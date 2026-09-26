import { person } from "@/content/profile";

export function Contact() {
  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <div className="wrap">
        <p className="kicker">06 — Contact</p>
        <h2 id="contact-title">Let’s talk</h2>
        <p className="lede">
          {person.location}. {person.availability}. Engineering leadership and applied
          AI on systems that are already live.
        </p>
        <div className="contact-row">
          <a href={person.phoneHref}>{person.phoneDisplay}</a>
          <a href={person.emailHref}>{person.email}</a>
          <a href={person.linkedinHref} target="_blank" rel="noopener noreferrer">
            {person.linkedinLabel}
          </a>
          <a href="https://clascout.in/" target="_blank" rel="noopener noreferrer">
            clascout.in
          </a>
        </div>
      </div>
    </section>
  );
}
