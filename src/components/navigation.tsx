"use client";
import { LanguagePicker } from "./language-picker";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
const links = [
  ["Projects", "/#work"],
  ["About", "/#about"],
  ["Expertise", "/#expertise"],
  ["Achievements", "/#achievements"],
] as const;
export function Navigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        document.getElementById("menu-toggle")?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="Gabriel Aragão home">
        ga<span>↗</span>
      </Link>

      <nav aria-label="Main navigation" className="desktop-nav">
        {links.map(([label, href]) => (
          <Link href={href} key={label}>
            {label}
          </Link>
        ))}
        <Link className="contact-link" href="/#contact">
          Let’s connect <ArrowUpRight size={15} />
        </Link>
      </nav>
      <LanguagePicker />
      <button
        id="menu-toggle"
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Close navigation" : "Open navigation"}
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>
      {open && (
        <nav
          id="mobile-nav"
          className="mobile-nav"
          aria-label="Mobile navigation"
        >
          {[...links, ["Contact", "/#contact"]].map(([label, href]) => (
            <Link key={label} href={href} onClick={() => setOpen(false)}>
              {label}
              <ArrowUpRight />
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
