"use client";

import { company, navLinks } from "@/data/siteData";
import { ChatCircleText } from "@phosphor-icons/react";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-40 border-b border-ink/10 bg-ivory/72 backdrop-blur-xl"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="luxury-container flex min-h-16 items-center justify-between gap-5">
        <a href="#top" className="font-display text-xl leading-none text-ink md:text-2xl">
          {company.name}
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink/68 transition hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="#inquiry"
          className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-ink/20 px-4 text-sm font-semibold text-ink transition hover:border-gold hover:bg-champagne/50 active:translate-y-[1px]"
        >
          <ChatCircleText size={17} aria-hidden="true" />
          <span className="hidden sm:inline">Inquire</span>
        </a>
      </nav>
    </motion.header>
  );
}
