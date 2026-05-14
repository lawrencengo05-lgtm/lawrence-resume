import { useState } from 'react';
import { Mail, Briefcase, Code2 } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    console.log('Form submission:', { name, email, message });
    setTimeout(() => {
      setStatus('sent');
      setName('');
      setEmail('');
      setMessage('');
    }, 500);
  };

  return (
    <>
      <section className="contact-header">
        <div className="contact-eyebrow">Get in touch</div>
        <h1 className="contact-title">Contact</h1>
        <p className="contact-lede">
          Looking to hire a network engineer with real cloud experience and
          a translation background between technical and non-technical
          stakeholders? Send a note — I read every message.
        </p>
      </section>

      <div className="contact-grid">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-field">
            <label htmlFor="name" className="contact-label">Your name</label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="contact-input"
            />
          </div>

          <div className="contact-field">
            <label htmlFor="email" className="contact-label">Your email</label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="contact-input"
            />
          </div>

          <div className="contact-field">
            <label htmlFor="message" className="contact-label">Message</label>
            <textarea
              id="message"
              required
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="contact-input contact-textarea"
            />
          </div>

          <button
            type="submit"
            className="contact-submit"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending...' : 'Send message'}
          </button>

          {status === 'sent' && (
            <div className="contact-success">
              Message captured locally (backend lands in a future build).
              You'll hear back within 48 hours once live.
            </div>
          )}
        </form>

        <aside className="contact-sidebar">
          <div className="contact-section-eyebrow">Other ways to reach me</div>

          <a href="mailto:Lnngo86@outlook.com" className="contact-channel">
            <Mail size={16} />
            <div className="contact-channel-text">
              <div className="contact-channel-label">Email</div>
              <div className="contact-channel-value">Lnngo86@outlook.com</div>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/lawrence-ngo-aka0086/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-channel"
          >
            <Briefcase size={16} />
            <div className="contact-channel-text">
              <div className="contact-channel-label">LinkedIn</div>
              <div className="contact-channel-value">Connect</div>
            </div>
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-channel"
          >
            <Code2 size={16} />
            <div className="contact-channel-text">
              <div className="contact-channel-label">GitHub</div>
              <div className="contact-channel-value">View work</div>
            </div>
          </a>
        </aside>
      </div>
    </>
  );
}