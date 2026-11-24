import {
  CodeXml,
  GraduationCap,
  Mail,
  UserRound,
  UsersRound,
} from "lucide-react";
import { contactChannels, opportunities } from "@/data/contact";
import { site } from "@/data/site";

export function ContactHero() {
  return (
    <section className="contact-hero">
      <div className="container contact-hero-inner">
        <div>
          <p className="eyebrow">Contact</p>
          <h1>Let&apos;s Connect.<br />Let&apos;s Collaborate.</h1>
          <p>
            Open to meaningful conversations, academic collaborations, and opportunities
            that bring education, technology, and industry together.
          </p>
        </div>
        <div className="contact-orbit" role="img" aria-label="Connect through academia, collaboration, email, and technology">
          <div className="orbit-ring" />
          <span className="orbit-center"><UserRound size={25} /></span>
          <span className="orbit-node orbit-academic"><GraduationCap size={17} /></span>
          <span className="orbit-node orbit-collaboration"><UsersRound size={17} /></span>
          <span className="orbit-node orbit-email"><Mail size={17} /></span>
          <span className="orbit-node orbit-technology"><CodeXml size={17} /></span>
        </div>
      </div>
    </section>
  );
}

export function CollaborationOpportunities() {
  return (
    <section className="contact-section">
      <div className="container">
        <p className="eyebrow">Opportunities to connect</p>
        <h2>Areas of Collaboration</h2>
        <div className="contact-opportunity-grid">
          {opportunities.map(({ title, description, icon: Icon }) => (
            <article key={title}>
              <Icon size={18} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function OnlineChannels() {
  return (
    <section className="contact-section contact-online">
      <div className="container">
        <p className="eyebrow">Get in touch</p>
        <h2>Find Me Online</h2>
        <div className="contact-channel-grid">
          {contactChannels.map(({ name, description, href, icon: Icon }) => {
            const content = (
              <>
                <Icon size={17} aria-hidden="true" />
                <strong>{name}{name === "Medium" && href ? " ↗" : ""}</strong>
                <span>{description}</span>
                {!href && <small>Link not configured</small>}
              </>
            );
            return href ? (
              <a className="contact-channel" href={href} key={name} target={name === "Email" ? undefined : "_blank"} rel={name === "Email" ? undefined : "noopener noreferrer"}>
                {content}
              </a>
            ) : (
              <div className="contact-channel contact-channel-unavailable" key={name}>
                {content}
              </div>
            );
          })}
        </div>
        <p className="contact-location">Based in {site.location} · Open to global collaboration</p>
      </div>
    </section>
  );
}

export function ContactSignoff() {
  return (
    <section className="contact-signoff">
      <h2>Teach · Innovate · Build · Impact</h2>
      <p>Connecting people, knowledge, and possibilities.</p>
    </section>
  );
}
