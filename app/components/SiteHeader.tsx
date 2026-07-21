"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiBookOpen, FiBriefcase, FiPlay, FiSearch } from "react-icons/fi";

const links = [
  { href: "/watch", label: "Watch" },
  { href: "/senpai-notes", label: "Notes" },
  { href: "/recommendations", label: "Recs" },
  { href: "/about", label: "About" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <nav className="nav container" aria-label="Primary navigation">
        <Link className="wordmark" href="/" aria-label="SenpaiS1lva home">
          <span className="nav-logo" aria-hidden="true" />
          <span className="nav-wordmark">SenpaiS1lva</span>
        </Link>
        <div className="nav-links nav-links--pages">
          {links.map((link) => <Link key={link.href} className={pathname === link.href ? "active" : ""} href={link.href}>{link.label}</Link>)}
        </div>
        <Link className={`nav-cta ${pathname === "/work-with-me" ? "active" : ""}`} href="/work-with-me" aria-label="Work with SenpaiS1lva">Collab</Link>
        <button className="menu-button" type="button" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}><span aria-hidden="true" />Menu</button>
        {open && <div id="mobile-navigation" className="mobile-navigation">{links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}<Link href="/work-with-me" onClick={() => setOpen(false)}>Collab</Link><Link href="/courplay" onClick={() => setOpen(false)}>Courplay</Link><Link href="/silvas-circle" onClick={() => setOpen(false)}>Silva’s Circle</Link></div>}
      </nav>
      <nav className="mobile-bottom-rail" aria-label="Quick navigation">
        <Link className={pathname === "/watch" ? "active" : ""} href="/watch"><FiPlay aria-hidden="true" /><span>Watch</span></Link>
        <Link className={pathname.startsWith("/senpai-notes") ? "active" : ""} href="/senpai-notes"><FiBookOpen aria-hidden="true" /><span>Notes</span></Link>
        <Link className={pathname === "/recommendations" ? "active" : ""} href="/recommendations"><FiSearch aria-hidden="true" /><span>Recs</span></Link>
        <Link className={pathname === "/work-with-me" ? "active" : ""} href="/work-with-me"><FiBriefcase aria-hidden="true" /><span>Collab</span></Link>
      </nav>
    </>
  );
}
