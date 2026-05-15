import './About.css';

export default function About() {
  return (
    <>
      <section className="about-header">
        <div className="about-eyebrow">About me</div>
        <h1 className="about-title">
          Clinical research by day, <em>cables and cloud by night</em>
        </h1>
        <p className="about-lede">
          The short version: I'm a clinical research coordinator at Fred
          Hutchinson Cancer Center who taught myself cloud and networking on
          nights and weekends — and now I'm looking for the role that lets
          me do that work full-time.
        </p>
      </section>

      <div className="about-grid">
        <article className="about-story">
          <div className="about-section-eyebrow">The story</div>

          <p>
            I started in emergency medicine — an EMT-Basic running calls in
            Houston while finishing a public health degree at UT Austin. The
            work taught me how to make fast, structured decisions under
            pressure, communicate across a chain of people who needed
            different things from the same information, and keep equipment
            and systems running when failure had real consequences.
          </p>

          <p>
            Cancer research was the natural next step. At MD Anderson I
            worked as a Data Research Coordinator — data validation, quality
            checks, compliance — and at Fred Hutchinson I moved into a
            Clinical Research Coordinator role where I'm the bridge between
            physicians, data managers, and IT support. On any given day I'm
            Triaging an EDC outage, debugging a REDCap permissions issue, or
            sitting with a clinician walking through why a workflow keeps failing. 
            Half the job is technical, finding the actual root cause when something
            breaks. The other half is coordination: keeping physicians, data managers,
            and IT moving in the same direction long enough to fix it.
          </p>

          <p>
            What pulled me toward cloud and network engineering wasn't any
            single thing, it was a pattern. Every outage or permission issue
            I helped troubleshoot left me wanting to understand the layer undernath:
            DNS, routing, identity, the actual infrastructure. So I started building.
            AWS Cloud Practitioner first, then Solutions Architect Associate, then
            CompTIA Network+. On the side: a Raspberry Pi NAS, a Windows Server lab 
            with 500+ simulated users in Active Directory, a full multi-user serverless
            app on AWS, and the resume site your're reading this on.
          </p>

          <p>
            Now I'm looking for the network engineering role where the
            translation skills, the structured troubleshooting, and the
            cloud and infrastructure work all add up to one job.
          </p>
        </article>

        <aside className="about-sidebar">
          <div className="about-section-eyebrow">Currently</div>
          <ul className="about-currently">
            <li>
              <span className="about-currently-label">Based in</span>
              <span>Seattle, WA</span>
            </li>
            <li>
              <span className="about-currently-label">Working at</span>
              <span>Fred Hutchinson Cancer Center</span>
            </li>
            <li>
              <span className="about-currently-label">Learning</span>
              <span>AWS Advanced Networking, Terraform</span>
            </li>
            <li>
              <span className="about-currently-label">Outside work</span>
              <span>Homelab, weightlifting, automotive</span>
            </li>
          </ul>

          <div className="about-section-eyebrow about-section-eyebrow-spaced">
            Certifications
          </div>
          <ul className="about-certs">
            <li>
              <span className="about-cert-name">AWS Solutions Architect Associate</span>
              <span className="about-cert-org">Amazon Web Services</span>
            </li>
            <li>
              <span className="about-cert-name">AWS Cloud Practitioner</span>
              <span className="about-cert-org">Amazon Web Services</span>
            </li>
            <li>
              <span className="about-cert-name">CompTIA Network+</span>
              <span className="about-cert-org">CompTIA</span>
            </li>
          </ul>
        </aside>
      </div>
    </>
  );
}