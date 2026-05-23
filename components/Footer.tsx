"use client";

import { company, navLinks } from "@/data/siteData";
import {
  EnvelopeSimple,
  InstagramLogo,
  PinterestLogo,
  WhatsappLogo
} from "@phosphor-icons/react";
import type { ReactNode } from "react";

export default function Footer() {
  return (
    <footer className="bg-ivory py-12 text-ink">
      <div className="luxury-container">
        <div className="grid gap-10 border-t border-ink/12 pt-10 md:grid-cols-[1.1fr_0.7fr_1.2fr]">
          <div>
            <p className="font-display text-4xl leading-none">{company.name}</p>
            <p className="mt-4 max-w-[360px] leading-7 text-espresso/70">
              {company.tagline} for planners, studios, and couples who want a
              celebration with atmosphere.
            </p>
          </div>

          <div>
            <p className="mb-4 text-sm font-bold text-ink">Quick links</p>
            <div className="grid gap-3 text-sm text-espresso/72">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="transition hover:text-ink">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 text-sm font-bold text-ink">Connect</p>
            <div className="flex flex-wrap gap-3">
              <SocialLink href={company.socials.instagram} label="Instagram">
                <InstagramLogo size={18} aria-hidden="true" />
              </SocialLink>
              <SocialLink href={company.socials.pinterest} label="Pinterest">
                <PinterestLogo size={18} aria-hidden="true" />
              </SocialLink>
              <SocialLink href={`mailto:${company.email}`} label="Email">
                <EnvelopeSimple size={18} aria-hidden="true" />
              </SocialLink>
              <SocialLink href={`https://wa.me/${company.phone.replace(/[^\d]/g, "")}`} label="WhatsApp">
                <WhatsappLogo size={18} aria-hidden="true" />
              </SocialLink>
            </div>
            <p className="mt-7 text-sm font-bold text-ink">Cities served</p>
            <p className="mt-3 max-w-[520px] text-sm leading-7 text-espresso/70">
              {company.citiesServed.join(", ")}
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-ink/10 pt-6 text-xs text-espresso/62 sm:flex-row sm:items-center sm:justify-between">
          <p>Frontend demo, no backend, payments, or database.</p>
          <p>Designed for Vercel deployment.</p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-ink/14 px-4 text-sm font-semibold transition hover:border-gold hover:bg-champagne/35 active:translate-y-[1px]"
    >
      {children}
      {label}
    </a>
  );
}
