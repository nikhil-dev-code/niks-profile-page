import { person } from "@/content/profile";

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-name">
      <div className="wrap">
        <p className="kicker">
          {person.location}
          <span aria-hidden="true"> · </span>
          {person.availability}
        </p>
        <h1 id="hero-name">{person.name}</h1>
        <p className="role-line">{person.title}</p>
        <p className="specialties">{person.specialties}</p>
        <p className="lede">{person.supporting}</p>
        <div className="contact-row">
          <a href={person.phoneHref}>{person.phoneDisplay}</a>
          <a href={person.emailHref}>{person.email}</a>
          <a href={person.linkedinHref} target="_blank" rel="noopener noreferrer">
            {person.linkedinLabel}
          </a>
        </div>
        <a className="button" href="#work">
          View selected work
        </a>
      </div>
    </section>
  );
}
