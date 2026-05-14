import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section style={{ textAlign: 'center', padding: 'var(--space-12) 0' }}>
      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '11px',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        color: 'var(--gold)',
        marginBottom: 'var(--space-3)'
      }}>
        Error 404
      </div>
      <h1 style={{
        fontFamily: 'var(--font-serif)',
        fontSize: '38px',
        fontWeight: 500,
        marginBottom: 'var(--space-4)'
      }}>
        Page not found
      </h1>
      <p style={{ color: 'var(--muted)', marginBottom: 'var(--space-6)' }}>
        The page you're looking for doesn't exist.
      </p>
      <Link to="/" style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '13px',
        padding: '10px 16px',
        border: '0.5px solid var(--text)',
        color: 'var(--text)',
        borderRadius: 'var(--radius-md)',
        textDecoration: 'none'
      }}>
        ← Return home
      </Link>
    </section>
  );
}