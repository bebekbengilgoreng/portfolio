"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { portfolio } from "@/data/portfolio";

export function SiteNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  return (
    <header className="site-header">
      <div className="nav-inner wrap">
        <a className="wordmark" href="#top" aria-label="Michiel Aelis Wijaya, home">Michiel Aelis Wijaya</a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {portfolio.navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <button className="menu-button" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close navigation" : "Open navigation"}>
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      {open ? <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">{portfolio.navigation.map((item, index) => <a key={item.href} href={item.href} onClick={() => setOpen(false)}><span>0{index + 1}</span>{item.label}</a>)}</nav> : null}
    </header>
  );
}
