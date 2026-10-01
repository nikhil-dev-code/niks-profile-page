import { appliedAi } from "@/content/profile";

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
            <li key={item.label}>
              <span>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.label}
                  </a>
                ) : (
                  item.label
                )}
              </span>
              <strong>{item.status}</strong>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
