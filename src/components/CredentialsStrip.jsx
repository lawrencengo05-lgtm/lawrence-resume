import { Award, GraduationCap } from 'lucide-react';
import './CredentialsStrip.css';

const credentials = [
  { type: 'cert', label: 'AWS Solutions Architect Associate' },
  { type: 'cert', label: 'AWS Cloud Practitioner' },
  { type: 'cert', label: 'CompTIA Network+' },
  { type: 'edu',  label: 'B.S. UT Austin' },
];

export default function CredentialsStrip() {
  return (
    <div className="credentials-strip">
      {credentials.map((c) => (
        <span key={c.label} className="credential-chip">
          {c.type === 'cert' ? <Award size={12} /> : <GraduationCap size={12} />}
          <span>{c.label}</span>
        </span>
      ))}
    </div>
  );
}