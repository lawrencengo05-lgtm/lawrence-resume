export const projects = [
  {
    slug: 'responsible-ai-chatbot',
    number: '01',
    category: 'ai governance',
    title: 'Responsible AI Chatbot Deployment',
    summary:
      'Institution-approved generative AI chatbot for clinical research support, scoped to internal SOPs and NCT.gov trial protocols. Applied the NIST AI RMF and ISO/IEC 42001 across the deployment lifecycle.',
    featured: true,
    tech: ['Perplexity', 'NIST AI RMF', 'ISO/IEC 42001', 'SharePoint'],
    built: [
      'Scoped the chatbot to a defined corpus (internal SOPs and NCT.gov trial protocols) rather than open-domain use, reducing the risk surface before technical controls were even applied.',
      'Wrote an acceptable-use policy defining approved use cases, prohibited inputs, data classification rules, and consequences for misuse — reviewed with clinical and IT stakeholders before rollout.',
      'Designed a risk-tiered human-in-the-loop review model: outputs touching regulated or patient-related information route to human reviewers before use; low-risk outputs are logged but not gated.',
      'Built a SharePoint-based feedback loop where users flag problematic outputs; flagged items feed into a periodic review cycle and inform updates to the acceptable-use policy.',
    ],
    learned: [
      'Framework guidance (NIST AI RMF, ISO/IEC 42001) is abstract by design — the operational work is translating "human oversight" into a specific SharePoint form and a specific routing rule.',
      'Acceptable-use policies drafted in isolation fail on contact with real users. The version that stuck was co-authored with clinical stakeholders who could name the actual edge cases.',
      'Scoping the input corpus was a bigger governance win than any single output control. Constraining what the system can see is easier to audit than constraining what it says.',
    ],
    differently: [
      'Would define output-quality metrics before launch, not after. Without a baseline, "monitoring" becomes anecdotal.',
      'Would set a formal re-review cadence for the acceptable-use policy up front (e.g., quarterly), so it doesn\'t drift out of alignment with actual usage patterns.',
    ],
  },
  {
    slug: 'claude-code-job-agent',
    number: '02',
    category: 'ai engineering',
    title: 'Claude Code Job-Hunting Agent',
    summary:
      'Personal Claude Code agent that automates parts of the job-search workflow — from listing analysis to tailored application drafting — with human-in-the-loop review before anything is submitted.',
    featured: true,
    tech: ['Claude Code', 'Anthropic API', 'MCP'],
    built: [
      'Configured a Claude Code agent to ingest job postings, compare them against a source-of-truth resume, and surface fit signals and gaps.',
      'Automated the mechanical parts of the workflow (listing analysis, draft generation, application tracking) while keeping the decision to actually apply as a manual human step.',
      'Structured the agent to be honest about what it did and didn\'t generate, so nothing goes out under my name without me reviewing every word.',
    ],
    learned: [
      'Agent design lives or dies on the boundary between "helpful automation" and "acting on my behalf." The most useful setup is one that prepares work, not one that submits it.',
      'Prompt engineering matters less than context engineering — giving the agent the right source material (resume, past application patterns) is the biggest quality lever.',
      'The tool made the job hunt feel less draining, which mattered more than any single application it helped draft.',
    ],
    differently: [
      'Would build in explicit cost controls and rate limits from day one — LLM API bills are easy to accumulate silently.',
      'Would formalize the human-review checkpoints as their own step rather than an implicit convention.',
    ],
  },
  {
    slug: 'identity-access-management-lab',
    number: '03',
    category: 'identity',
    title: 'Identity and Access Management Lab',
    summary:
      'Windows Server AD environment with 500+ users, OUs, and GPOs. Applied RBAC and centralized identity governance across domain-joined systems — the on-prem foundation for the cloud IAM work.',
    featured: true,
    tech: ['Windows Server', 'Active Directory', 'Group Policy', 'RBAC'],
    built: [
      'Deployed a Windows Server AD environment supporting centralized identity and network services: AD, DNS, and DHCP.',
      'Modeled 500+ users into an organizational unit hierarchy that mirrors a realistic enterprise structure, and enforced access boundaries via Group Policy Objects.',
      'Implemented role-based access control across the domain, treating IAM as a governance problem (who should see what, and how do we prove it) rather than just a technical one.',
    ],
    learned: [
      'Authentication failures almost always trace to DNS misconfiguration first. Start there when troubleshooting AD.',
      'Group Policy precedence (Local → Site → Domain → OU) is the actual control surface for RBAC in a Windows environment — abstract policy means nothing without correct precedence.',
      'IAM on-prem and IAM in the cloud (Cognito, IAM roles) are the same discipline applied to different substrates.',
    ],
    differently: [
      'Would document the OU structure and group hierarchy before adding a single user. Refactoring later is painful.',
      'Would stand up a secondary domain controller for redundancy — production environments are never single-DC, and the practice is worth it.',
    ],
  },
  {
    slug: 'cloud-network-security',
    number: '04',
    category: 'cloud security',
    title: 'Cloud Network Security Architecture',
    summary:
      'AWS VPC peering, site-to-site VPN, and a serverless application with CloudWatch audit logging. Applied IAM least-privilege across every layer.',
    featured: false,
    tech: ['AWS VPC', 'IPsec VPN', 'Lambda', 'API Gateway', 'CloudWatch', 'IAM'],
    built: [
      'Designed AWS VPC peering between environments and a site-to-site IPsec VPN between an on-premises lab and an AWS VPC, with routing policies allowing controlled bidirectional traffic.',
      'Built a serverless application on Lambda and API Gateway with CloudWatch logging for every function invocation — an audit trail as a first-class concern, not an afterthought.',
      'Applied IAM least-privilege roles at every layer: the API Gateway execution role, each Lambda\'s role, and the data access role are all scoped to the minimum permissions required.',
    ],
    learned: [
      'Overlapping CIDR ranges between on-prem and cloud will silently break routing. Plan the address space before configuring anything.',
      '"The tunnel is up" is not the same as "traffic flows." Security groups and NACLs on the cloud side need explicit rules for cross-VPN traffic.',
      'CloudWatch logs are cheap to generate and expensive to reason about — put structure into them at write time (JSON, consistent field names) or you\'ll regret it during an audit.',
    ],
    differently: [
      'Would test tunnel behavior under realistic load, not just with a single ping. Performance issues only show up at scale.',
      'Would set up CloudWatch alarms for anomalous IAM activity as part of the initial build — retrofitting alarms after an incident is the wrong order.',
    ],
  },
];