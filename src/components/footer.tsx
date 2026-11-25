import Link from "next/link";
import { site } from "@/data/site";
export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <span>Academic enquiries</span>
          <Link href="/contact">Contact</Link>
        </div>
        <div>
          <Link href="/projects">Projects</Link>
          <Link href="/industry-learning">Industry learning</Link>
          <Link href="/project-based-learning">Project-based learning</Link>
          <Link href="/student-impact">Student learning</Link>
          <a href={site.medium} target="_blank" rel="noopener noreferrer">Medium</a>
        </div>
      </div>
    </footer>
  );
}
