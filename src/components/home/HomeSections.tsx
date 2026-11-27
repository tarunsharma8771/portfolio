import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpenText, Lightbulb, Play, Settings, Target } from "lucide-react";
import { experienceHighlights } from "@/data/about";
import { focusAreas } from "@/data/home";
import { site } from "@/data/site";
import { loadArticles, loadVideos } from "@/lib/content";
import styles from "./HomeSections.module.css";

const basePath = process.env.GITHUB_PAGES === "true" ? "/portfolio" : "";
const profileImage = `${basePath}/tarun-kumar-original-portrait.webp`;

const teachingSteps = [
  { title: "What", description: "Define the problem", icon: Target },
  { title: "Why", description: "Understand the principle", icon: Lightbulb },
  { title: "How", description: "Apply and test", icon: Settings },
];

export function HomeHero() {
  return (
    <section className={`container ${styles.hero}`} aria-labelledby="profile-name">
      <Image
        className={styles.portrait}
        src={profileImage}
        alt={`Portrait of ${site.name}`}
        width={144}
        height={144}
        priority
      />
      <div className={styles.intro}>
        <p className={styles.kicker}>{site.tagline}</p>
        <h1 id="profile-name">{site.name}</h1>
        <p className={styles.affiliation}>
          Visiting Faculty · Symbiosis Institute of Technology · {site.location}
        </p>
        <div className={styles.actions}>
          <Link className="btn btn-primary" href="/teaching">
            Explore my teaching <ArrowRight size={17} aria-hidden="true" />
          </Link>
          <Link className="btn btn-secondary" href="/about">
            About me <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function HomeExperienceHighlights() {
  return (
    <section className="container" aria-labelledby="experience-highlights">
      <h2 className="visually-hidden" id="experience-highlights">Experience at a glance</h2>
      <ul className={styles.metrics}>
        {experienceHighlights.map(({ title, description }) => (
          <li key={title}>
            <strong>{title}</strong>
            <span>{description}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function HomeFocusAreas() {
  return (
    <section className={`container ${styles.section}`} aria-labelledby="focus-title">
      <h2 id="focus-title">Teaching and applied work</h2>
      <div className={styles.framework}>
        <ol className={styles.steps} aria-label="Problem-centred teaching approach">
          {teachingSteps.map(({ title, description, icon: Icon }, index) => (
            <li key={title}>
              <span className={styles.icon}><Icon size={22} aria-hidden="true" /></span>
              <div><strong>{title}</strong><span>{description}</span></div>
              {index < teachingSteps.length - 1 && (
                <ArrowRight className={styles.stepArrow} size={18} aria-hidden="true" />
              )}
            </li>
          ))}
        </ol>
        <Link className="text-link" href="/teaching#teaching-case-studies">
          View classroom case studies <ArrowRight size={17} aria-hidden="true" />
        </Link>
      </div>
      <div className="focus-grid">
        {focusAreas.map(({ title, description, href, icon: Icon }) => (
          <Link key={title} href={href} className="focus-card">
            <span className={styles.icon}><Icon size={22} aria-hidden="true" /></span>
            <h3>{title}</h3>
            <p>{description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export async function HomeResources() {
  const [articles, videos] = await Promise.all([loadArticles(), loadVideos()]);
  const [article] = articles;
  const [video] = videos;
  const hasArticleDate = Number.isFinite(Date.parse(article?.date ?? ""));

  return (
    <section className={`container ${styles.section} ${styles.resources}`} aria-labelledby="resources-title">
      <h2 id="resources-title">Latest articles and videos</h2>
      <div className={styles.resourceGrid}>
        <article className={styles.resourceCard}>
          <p className={styles.kicker}>{hasArticleDate ? "Latest article" : "Featured article"}</p>
          <div className={styles.resourceItem}>
            <span className={styles.icon}><BookOpenText size={22} aria-hidden="true" /></span>
            {article && <h3><a href={article.href}>{article.title}</a></h3>}
          </div>
          <Link href="/articles" className="text-link">All articles <ArrowRight size={16} aria-hidden="true" /></Link>
        </article>
        <article className={styles.resourceCard}>
          <p className={styles.kicker}>Videos</p>
          <div className={styles.resourceItem}>
            <span className={styles.icon}><Play size={21} aria-hidden="true" /></span>
            {video ? <h3><a href={video.href}>{video.title}</a></h3> : <p>Educational videos are in development.</p>}
          </div>
          <Link href="/videos" className="text-link">All videos <ArrowRight size={16} aria-hidden="true" /></Link>
        </article>
      </div>
    </section>
  );
}
