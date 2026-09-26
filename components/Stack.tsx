import { stack } from "@/content/profile";

export function Stack() {
  return (
    <section className="section" id="stack" aria-labelledby="stack-title">
      <div className="wrap">
        <p className="kicker">05 — Stack</p>
        <h2 id="stack-title">Tools I ship with</h2>
        <div className="stack-groups">
          {stack.map((group) => (
            <article key={group.label}>
              <h3>{group.label}</h3>
              <ul className="chips">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
