import './Insights.css';

const upcomingPosts = [
  {
    title: 'How I deployed DailyGrit on AWS as a first serverless app',
    summary: 'The architecture, the wrong turns, and what I\'d do differently. Lambda + API Gateway + DynamoDB + Cognito, walked through end-to-end.',
    status: 'In progress',
  },
  {
    title: 'Building an Active Directory lab for 500 simulated users',
    summary: 'How I designed the OU structure, set up GPO precedence, and traced authentication failures back to DNS misconfigurations.',
    status: 'Planned',
  },
  {
    title: 'Site-to-site VPN, on-prem to AWS: the parts the tutorials skip',
    summary: 'Tunnel redundancy, BGP routing, overlapping CIDR ranges, and why the tunnel being up doesn\'t mean traffic flows.',
    status: 'Planned',
  },
];

export default function Insights() {
  return (
    <>
      <section className="insights-header">
        <div className="insights-eyebrow">Writing</div>
        <h1 className="insights-title">Insights</h1>
        <p className="insights-lede">
          Long-form writeups of what I'm building, what I'm learning, and
          where my mental models have been wrong. Currently in production —
          first posts landing soon.
        </p>
      </section>

      <div className="insights-list">
        {upcomingPosts.map((post, i) => (
          <article key={i} className="insights-card">
            <div className="insights-card-status">
              {post.status}
            </div>
            <h2 className="insights-card-title">{post.title}</h2>
            <p className="insights-card-summary">{post.summary}</p>
          </article>
        ))}
      </div>
    </>
  );
}