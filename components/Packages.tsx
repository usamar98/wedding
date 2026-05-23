"use client";

import Reveal from "@/components/Reveal";
import { packages } from "@/data/siteData";
import { SealCheck } from "@phosphor-icons/react";
import { motion } from "framer-motion";

export default function Packages() {
  const [primary, ...secondary] = packages;

  return (
    <section id="packages" className="section-y bg-nocturne text-ivory">
      <div className="luxury-container">
        <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
          <Reveal>
            <p className="eyebrow mb-6 text-gold">Investment</p>
            <h2 className="heading-lg max-w-[860px] text-balance">
              Planning packages with space for a custom proposal.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="max-w-[620px] text-lg leading-8 text-ivory/68 lg:ml-auto">
              Pricing is shown as a starting point for planning services.
              Custom proposals available after consultation.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <PackageCard pkg={primary} large />
          </Reveal>
          <div className="grid gap-5">
            {secondary.map((pkg, index) => (
              <Reveal key={pkg.name} delay={index * 0.1}>
                <PackageCard pkg={pkg} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PackageCard({
  pkg,
  large = false
}: {
  pkg: (typeof packages)[number];
  large?: boolean;
}) {
  return (
    <motion.article
      className={`relative h-full overflow-hidden rounded-[1.5rem] border p-8 transition duration-500 ${
        pkg.featured
          ? "border-gold/55 bg-ivory text-ink shadow-gold"
          : "border-ivory/12 bg-ivory/7 text-ivory"
      } ${large ? "min-h-[560px] lg:p-10" : "min-h-[260px]"}`}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 120, damping: 18 }}
    >
      {pkg.featured ? (
        <span className="mb-8 inline-flex rounded-full border border-gold/45 px-4 py-2 text-xs font-bold text-ink">
          Most requested
        </span>
      ) : null}
      <div className={large ? "max-w-[720px]" : "max-w-[620px]"}>
        <h3 className="font-display text-4xl leading-tight md:text-5xl">
          {pkg.name}
        </h3>
        <p className="font-display mt-5 text-5xl leading-none text-gold md:text-6xl">
          {pkg.price}
        </p>
        <p
          className={`mt-6 leading-7 ${
            pkg.featured ? "text-espresso/72" : "text-ivory/68"
          }`}
        >
          {pkg.description}
        </p>
      </div>
      <ul className={`mt-9 grid gap-4 ${large ? "md:grid-cols-2" : ""}`}>
        {pkg.inclusions.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm font-semibold">
            <SealCheck size={18} weight="duotone" className="mt-0.5 shrink-0 text-gold" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
