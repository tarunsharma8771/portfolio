import type { Metadata } from "next";
import { ArrowUpRight, CodeXml, Network, Play, Cpu } from "lucide-react";
import { loadVideos } from "@/lib/content";

export const metadata: Metadata = { title: "Videos" };

const plannedTopics = [
  {
    title: "Concepts Explained",
    description: "System design, distributed systems, and core computing concepts.",
    icon: Network,
  },
  {
    title: "Hands-On Learning",
    description: "Programming, practical demonstrations, and real-world implementations.",
    icon: CodeXml,
  },
  {
    title: "AI & Emerging Technologies",
    description: "Exploring modern technologies and their practical applications.",
    icon: Cpu,
  },
];

export default async function Videos() {
  const videos = await loadVideos();
  return (
    <>
      <section className="videos-hero">
        <div className="container videos-hero-inner">
          <div className="videos-hero-copy">
            <p className="eyebrow">Videos &amp; visual learning</p>
            <h1>Complex Concepts.<br />Simple Explanations.</h1>
            <p>
              Making computing concepts accessible through visual explanations,
              practical demonstrations, and real-world examples.
            </p>
          </div>
          <div className="video-preview" role="img" aria-label="Illustration of a visual computing lesson">
            <div className="video-browser">
              <div className="video-browser-bar"><i /><i /><i /></div>
              <div className="video-browser-canvas">
                <span />
                <span />
                <span />
                <span />
                <Play className="video-play" size={24} fill="currentColor" />
                <i className="video-connector video-connector-one" />
                <i className="video-connector video-connector-two" />
              </div>
              <div className="video-browser-progress" />
            </div>
            <p>Understand · Visualize · Apply</p>
          </div>
        </div>
      </section>

      <section className="videos-planned">
        <div className="container">
          <p className="eyebrow">Planned content</p>
          <h2>What to Expect</h2>
          <div className="video-topic-grid">
            {plannedTopics.map(({ title, description, icon: Icon }) => (
              <article key={title}>
                <Icon size={20} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {videos.length > 0 ? (
        <section className="videos-published">
          <div className="container">
            <p className="eyebrow">Published videos</p>
            <h2>Watch &amp; Learn</h2>
            <div className="published-video-list">
              {videos.map((video) => (
                <article key={video.href}>
                  <div><h3>{video.title}</h3><p>{video.source}{video.date ? ` · ${new Date(video.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}` : ""}</p></div>
                  <a href={video.href} target="_blank" rel="noopener noreferrer" aria-label={`Watch ${video.title}`}>
                    Watch <ArrowUpRight size={15} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="videos-coming-soon">
          <div className="container">
            <Play size={22} aria-hidden="true" />
            <p className="eyebrow">Coming soon</p>
            <h2>A New Way to Learn.</h2>
            <p>Educational videos and technical walkthroughs are planned.<br />New content will be shared here as it becomes available.</p>
          </div>
        </section>
      )}
    </>
  );
}
