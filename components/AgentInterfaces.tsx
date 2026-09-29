import { agentDemos, agentEmptyCopy } from "@/content/profile";

export function AgentInterfaces() {
  return (
    <section className="section" id="agents" aria-labelledby="agents-title">
      <div className="wrap">
        <p className="kicker">03 — Agent systems</p>
        <h2 id="agents-title">Agents designed for real workflows</h2>
        {agentDemos.length === 0 ? (
          <div className="panel">
            <p>{agentEmptyCopy}</p>
          </div>
        ) : (
          <div className="cards">
            {agentDemos.map((demo) => (
              <article className="card agent-case" key={demo.name}>
                <p className="agent-domain">{demo.domain}</p>
                <h3>{demo.name}</h3>
                <dl className="agent-blocks">
                  <div>
                    <dt>Problem</dt>
                    <dd>{demo.problem}</dd>
                  </div>
                  <div>
                    <dt>Approach</dt>
                    <dd>{demo.approach}</dd>
                  </div>
                  <div>
                    <dt>Production</dt>
                    <dd>{demo.production}</dd>
                  </div>
                </dl>
                <p className="agent-prompts-label">Try asking</p>
                <ul className="agent-prompts">
                  {demo.samplePrompts.map((prompt) => (
                    <li key={prompt}>{prompt}</li>
                  ))}
                </ul>
                <ul className="chips" aria-label={`${demo.name} stack`}>
                  {demo.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {demo.url ? (
                  <a href={demo.url} target="_blank" rel="noopener noreferrer">
                    Try sandbox
                  </a>
                ) : (
                  <p className="status">Sandbox in progress</p>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
