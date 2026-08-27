"use client";

import Link from "next/link";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  { href: "#work-experience", label: "Work Experience" },
  { href: "#organization", label: "Organization" },
  { href: "#gallery", label: "Gallery" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/60 border-b border-white/10">
      <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-extrabold text-lg tracking-tight">
          Holy's Portfolio
        </Link>
        <ul className="hidden lg:flex items-center gap-6 text-sm text-muted">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-foreground transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded-full bg-accent text-white text-sm font-semibold px-4 py-2 hover:brightness-110 transition"
        >
          Contact me!
        </a>
      </nav>
    </header>
  );
}
