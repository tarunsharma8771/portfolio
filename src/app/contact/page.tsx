import type { Metadata } from "next";
import {
  ArrowUpRight,
  CodeXml,
  GraduationCap,
  Mail,
  UserRound,
  UsersRound,
} from "lucide-react";
import { collaborationAreas, contactChannels } from "@/data/contact";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Contact" };

export default function Contact() {
  return (
    <>
      <header className="contact-hero">
        <div className="container contact-hero-inner">
          <div>
            <p className="eyebrow">Contact</p>
            <h1>
              Let&apos;s Connect.
              <br />
              Let&apos;s Collaborate.
            </h1>
            <p>
              I welcome academic enquiries, questions from students, and
              conversations about projects that connect universities with
              industry.
            </p>
            {site.email && (
              <a
                className="text-link contact-email"
                href={`mailto:${site.email}`}
              >
                {site.email}
              </a>
            )}
          </div>
          <div className="contact-orbit" aria-hidden="true">
            <div className="orbit-ring" />
            <span className="orbit-center">
              <UserRound size={25} />
            </span>
            <span className="orbit-node orbit-academic">
              <GraduationCap size={17} />
            </span>
            <span className="orbit-node orbit-collaboration">
              <UsersRound size={17} />
            </span>
            <span className="orbit-node orbit-email">
              <Mail size={17} />
            </span>
            <span className="orbit-node orbit-technology">
              <CodeXml size={17} />
            </span>
          </div>
        </div>
      </header>

      <section className="contact-section" aria-labelledby="collaboration">
        <div className="container">
          <h2 id="collaboration">Areas of Collaboration</h2>
          <div className="contact-opportunity-grid">
            {collaborationAreas.map(({ title, description, icon: Icon }) => (
              <article key={title}>
                <Icon size={19} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="contact-section contact-online"
        aria-labelledby="contact-channels"
      >
        <div className="container">
          <h2 id="contact-channels">Find Me Online</h2>
          <div className="contact-channel-grid">
            {contactChannels
              .filter(({ href }) => href)
              .map(({ name, href, description, icon: Icon }) => (
                <a
                  className="contact-channel"
                  key={name}
                  href={href}
                  target={name === "Email" ? undefined : "_blank"}
                  rel={name === "Email" ? undefined : "noopener noreferrer"}
                >
                  <Icon size={20} aria-hidden="true" />
                  <strong>
                    {name}
                    {name !== "Email" && (
                      <ArrowUpRight size={13} aria-hidden="true" />
                    )}
                  </strong>
                  <span>{description}</span>
                </a>
              ))}
          </div>
          <p className="contact-location">
            Based in {site.location} · Open to academic collaboration worldwide
          </p>
        </div>
      </section>

      <div className="contact-signoff">
        <p>{site.tagline}</p>
      </div>
    </>
  );
}
