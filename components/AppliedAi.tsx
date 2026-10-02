import { appliedAi } from "@/content/profile";

function CertificateIcon() {
  return (
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="3" width="16" height="13" rx="1.5" />
      <path d="M8 8h8M8 11h5" />
      <path d="M10 16v3.5L12 18l2 1.5V16" />
    </svg>
  );
}

export function AppliedAi() {
  return (
    <section className="section" id="ai" aria-labelledby="ai-title">
      <div className="wrap">
        <p className="kicker">01 — Applied AI</p>
        <h2 id="ai-title">What I put into production</h2>
        <div className="statement">
          <p>{appliedAi.lead}</p>
          <p>{appliedAi.example}</p>
        </div>
        <ul className="credentials">
          {appliedAi.credentials.map((item) => (
            <li
              key={item.label}
              className={
                item.href ? "credentials-item has-credential" : "credentials-item"
              }
            >
              {item.href ? (
                <a
                  className="credential-link"
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Show credential for ${item.label}`}
                >
                  <CertificateIcon />
                </a>
              ) : null}
              <span>{item.label}</span>
              <strong>{item.status}</strong>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
