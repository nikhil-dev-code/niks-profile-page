import { agentDemos, agentEmptyCopy } from "@/content/profile";

export function AgentInterfaces() {
  return (
    <section className="section" id="agents" aria-labelledby="agents-title">
      <div className="wrap">
        <p className="kicker">03 — Agent interfaces</p>
        <h2 id="agents-title">Interfaces for agents</h2>
        {agentDemos.length === 0 ? (
          <div className="panel">
            <p>{agentEmptyCopy}</p>
          </div>
        ) : (
          <div className="cards">
            {agentDemos.map((demo) => (
              <article className="card" key={demo.name}>
                <h3>{demo.name}</h3>
                <p>{demo.summary}</p>
                <ul className="chips" aria-label={`${demo.name} stack`}>
                  {demo.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {demo.url ? (
                  <a href={demo.url} target="_blank" rel="noopener noreferrer">
                    Open demo
                  </a>
                ) : (
                  <p className="status">In progress</p>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
