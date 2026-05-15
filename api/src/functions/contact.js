const { app } = require('@azure/functions');
const sgMail = require('@sendgrid/mail');

app.http('contact', {
  methods: ['POST'],
  authLevel: 'anonymous',
  handler: async (request, context) => {
    try {
      const body = await request.json();
      const { name, email, message, honeypot } = body || {};

      // Honeypot anti-spam — if a bot filled in the hidden field,
      // silently return success without sending anything
      if (honeypot) {
        context.log('Honeypot triggered — silently dropping submission');
        return { status: 200, jsonBody: { ok: true } };
      }

      // Validate required fields
      if (!name || !email || !message) {
        return {
          status: 400,
          jsonBody: { error: 'Missing required fields' },
        };
      }

      // Validate field lengths (defense against absurdly long inputs)
      if (name.length > 100 || email.length > 200 || message.length > 5000) {
        return {
          status: 400,
          jsonBody: { error: 'Field exceeds maximum length' },
        };
      }

      // Send the email via SendGrid
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);

      await sgMail.send({
        to: 'lawrence.ngo05@gmail.com',
        from: 'Lnngo86@outlook.com',
        replyTo: email,
        subject: `Resume site contact from ${name}`,
        text:
          `From: ${name} <${email}>\n\n` +
          `${message}\n\n` +
          `— sent via lawrencengo resume site`,
      });

      context.log(`Contact form submitted by ${name} <${email}>`);
      return { status: 200, jsonBody: { ok: true } };
    } catch (err) {
      context.log.error('Contact function error:', err);
      return {
        status: 500,
        jsonBody: { error: 'Failed to send message' },
      };
    }
  },
});