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
  Five years working with high-stakes data and systems — from EMS to
  cancer research compliance, and now AWS, Active Directory, and
  identity infrastructure labs on nights and weekends. I'm building
  toward cybersecurity, with cloud and network engineering as the
  paths that get me there.
</p>
      </section>

      <div className="about-grid">
        <article className="about-story">
          <div className="about-section-eyebrow">The story</div>

         <p>
  I started in emergency medicine — an EMT-Basic running calls in
  Houston while finishing my public health degree at UT Austin. The
  work was about making fast, structured decisions when the system
  absolutely could not fail. It also taught me to translate technical
  information across people who needed different things from it —
  dispatch, ER staff, families. That translation work is the thread
  that runs through everything I've done since.
</p>

<p>
  Cancer research was the natural next step. At MD Anderson I worked
  as a Data Research Coordinator — data validation, quality checks,
  regulatory compliance. At Fred Hutchinson I moved into a Clinical
  Research Coordinator role where I'm the bridge between physicians,
  data managers, and IT support. On any given day I'm triaging an EDC
  outage, debugging a REDCap permissions issue, or walking through why
  a workflow keeps failing. Half the job is finding root cause. The
  other half is governance: keeping data accurate, access controlled,
  and the regulatory chain unbroken under audit.
</p>

<p>
  What pulled me toward infrastructure wasn't any single thing — it
  was a pattern. Every outage or permission issue I troubleshot left
  me wanting to understand the layer underneath: DNS, routing,
  identity, the actual systems that control who can see what. So I
  started building. AWS Cloud Practitioner first, then Solutions
  Architect Associate, then CompTIA Network+. On the side: a Raspberry
  Pi NAS, a Windows Server lab with 500+ simulated users in Active
  Directory, a site-to-site VPN tunnel between my home lab and an AWS
  VPC, and a full multi-user serverless app on AWS with defense-in-depth
  authorization across the API, function, and data layers.
</p>

<p>
  What I'm looking for now is a role where these threads pull together.
  Cloud and network engineering fit naturally — building and securing
  the infrastructure that high-stakes data depends on. So does
  cybersecurity, particularly identity and access management, cloud
  security, GRC, and the emerging space of AI governance and data
  privacy where my clinical research compliance background translates
  directly. I'm currently pursuing security certifications alongside
  my AWS work. If you're hiring for any of these paths, my contact is
  one click away.
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
              <span>CompTIA Security+</span>
            </li>
            <li>
              <span className="about-currently-label">Outside work</span>
              <span>Homelab, Sports, Automotive Enthusiast</span>
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