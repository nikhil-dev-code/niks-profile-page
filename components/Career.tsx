import { education, roles } from "@/content/profile";

export function Career() {
  return (
    <section className="section" id="career" aria-labelledby="career-title">
      <div className="wrap">
        <p className="kicker">04 — Career</p>
        <h2 id="career-title">Where the work happened</h2>
        <div className="timeline">
          {roles.map((role) => (
            <article className="role" key={role.id}>
              <div>
                <p className="dates">
                  {role.start} – {role.end}
                </p>
                <h3>{role.org}</h3>
                <p className="card-title">{role.title}</p>
              </div>
              <div>
                <p>{role.detail}</p>
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
              </div>
            </article>
          ))}
        </div>
        <aside className="education">
          <h3>Education</h3>
          <p>
            {education.degree}, {education.school}, {education.year}
          </p>
          <p>{education.languages.join(", ")}</p>
          <p>{education.visa}</p>
        </aside>
      </div>
    </section>
  );
}
