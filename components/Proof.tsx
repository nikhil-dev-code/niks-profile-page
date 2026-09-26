import { proof } from "@/content/profile";

export function Proof() {
  return (
    <section className="proof" aria-label="Proof">
      <div className="wrap proof-grid">
        {proof.map((item) => (
          <article key={item.label}>
            <p className="figure">{item.figure}</p>
            <p>{item.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
