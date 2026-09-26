import { roles } from "@/content/profile";

export function SelectedWork() {
  const featured = roles.filter((role) => role.featured);

  return (
    <section className="section" id="work" aria-labelledby="work-title">
      <div className="wrap">
        <p className="kicker">02 — Selected work</p>
        <h2 id="work-title">Products in market</h2>
        <div className="cards">
          {featured.map((role) => (
            <article className="card" key={role.id}>
              <p className="dates">
                {role.start} – {role.end}
              </p>
              <h3>{role.org}</h3>
              <p className="card-title">{role.title}</p>
              <p>{role.summary}</p>
              {role.stack.length > 0 ? (
                <ul className="chips" aria-label={`${role.org} stack`}>
                  {role.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
              {role.url ? (
                <a href={role.url} target="_blank" rel="noopener noreferrer">
                  {role.urlLabel ?? "View project"}
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
