import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, description }: {
  eyebrow?: string;
  title: string;
  description: string;
}) {
  return (
    <header className="page-hero">
      <div className="container">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        <p className="lead">{description}</p>
      </div>
    </header>
  );
}

export function Section({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <section className="section">
      <div className="container">
        {title && <h2>{title}</h2>}
        {children}
      </div>
    </section>
  );
}
