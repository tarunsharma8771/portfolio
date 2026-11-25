"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation, site } from "@/data/site";

export function Header() {
  const path = usePathname().replace(/\/$/, "") || "/";
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label={`${site.name} home`}>
          <span className="brand-mark" aria-hidden="true">TK</span>
          <span className="brand-text"><strong>{site.name}</strong></span>
        </Link>
        <nav className="nav" aria-label="Primary navigation">
          {navigation.map(({ href, label }) => (
            <Link href={href} key={href} aria-current={path === href ? "page" : undefined}>
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
