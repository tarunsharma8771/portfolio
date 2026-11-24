"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navigation, site } from "@/data/site";
export function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <div className="container header-inner">
      <Link href="/" className="brand" onClick={() => setOpen(false)} aria-label="Tarun Kumar home">
        <span className="brand-mark">TK</span>
        <span className="brand-divider" />
        <span className="brand-text">
          <strong>{site.name}</strong>
          <small>{site.title}</small>
        </span>
      </Link>
      <button className="mobile-toggle" type="button" onClick={() => setOpen(v => !v)} aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open}>{open ? <X size={22}/> : <Menu size={22}/>}</button>
      <nav className={`nav ${open ? "nav-open" : ""}`} aria-label="Primary navigation">
        {navigation.map(link => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} aria-current={path === link.href ? "page" : undefined}>{link.label}</Link>)}
      </nav>
    </div>
  </header>;
}
