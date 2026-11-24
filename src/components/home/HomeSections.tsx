import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Lightbulb,
  Settings,
  Target,
} from "lucide-react";
import { focusAreas } from "@/data/home";

export function HomeHero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-main">
          <p className="eyebrow hero-eyebrow">
            Computing education
            <span />
          </p>
          <h1>Teach · Innovate · Build · Impact</h1>
          <div className="hero-intro">
            <Image
              className="profile-photo"
              src="/tarun-sharma.png"
              alt="Portrait of Tarun Kumar"
              width={126}
              height={126}
              priority
            />
            <p className="lead">
              Bridging 20+ years of industry experience with computing education
              to create practical, AI-enabled, and industry-aligned learning
              that prepares students for real-world challenges.
            </p>
          </div>
          <div className="actions">
            <Link className="btn btn-primary" href="/teaching">
              Explore My Teaching <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="approach">
          <p className="eyebrow approach-eyebrow">
            My teaching approach
            <span />
          </p>
          <h2>What · Why · How</h2>
          <div className="process">
            <div className="process-item">
              <div className="process-icon"><Target size={35} strokeWidth={1.8} /></div>
              <strong>What</strong>
              <small>Identify the real-world problem.</small>
            </div>
            <ArrowRight className="process-arrow" size={34} />
            <div className="process-item">
              <div className="process-icon"><Lightbulb size={35} strokeWidth={1.8} /></div>
              <strong>Why</strong>
              <small>Understand its importance and relevance.</small>
            </div>
            <ArrowRight className="process-arrow" size={34} />
            <div className="process-item">
              <div className="process-icon"><Settings size={35} strokeWidth={1.8} /></div>
              <strong>How</strong>
              <small>Apply the right concepts and tools to solve it.</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomeFocusAreas() {
  return (
    <section className="focus-section">
      <div className="container focus-grid">
        {focusAreas.map(({ title, description, href, icon: Icon }) => (
          <Link key={title} href={href} className="focus-card">
            <div className="focus-icon"><Icon size={35} strokeWidth={1.7} /></div>
            <h3>{title}</h3>
            <p>{description}</p>
            <span className="card-link">Explore <ArrowRight size={17} /></span>
          </Link>
        ))}
      </div>
    </section>
  );
}
