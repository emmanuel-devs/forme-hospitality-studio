"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { label: "Interiors", href: "/interiors" },
  { label: "Experiences", href: "/experiences" },
  { label: "Selected work", href: "/work" },
  { label: "Our process", href: "/process" },
  { label: "About", href: "/about" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const inquiryHref = "/quote";
  return (
    <header className="site-header">
      <div className="nav-shell container">
        <Link href="/#top" className="wordmark" aria-label="FORME Hospitality Studio home" onClick={() => setOpen(false)}>
          <span className="wordmark-main">FORME</span>
          <span className="wordmark-sub">HOSPITALITY STUDIO</span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
        </nav>
        <Link className="nav-cta" href={inquiryHref}>Discuss your project <ArrowUpRight size={15} strokeWidth={1.6} /></Link>
        <button className="menu-toggle" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && <nav className="mobile-nav" aria-label="Mobile navigation">
        {links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}
        <Link href="/trade" onClick={() => setOpen(false)}>Trade</Link>
        <Link href="/partners" onClick={() => setOpen(false)}>Partners</Link>
        <Link href={inquiryHref} className="mobile-nav-cta" onClick={() => setOpen(false)}>Discuss your project <ArrowUpRight size={16} /></Link>
      </nav>}
    </header>
  );
}
