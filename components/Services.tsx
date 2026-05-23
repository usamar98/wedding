"use client";

import Reveal from "@/components/Reveal";
import { services, type Service } from "@/data/siteData";
import {
  Compass,
  Crown,
  FlowerLotus,
  HandHeart
} from "@phosphor-icons/react";
import { motion } from "framer-motion";

const iconMap: Record<Service["icon"], typeof Compass> = {
  planning: Crown,
  destination: Compass,
  styling: FlowerLotus,
  hospitality: HandHeart
};

export default function Services() {
  return (
    <section id="services" className="section-y bg-linen text-ink">
      <div className="luxury-container">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <Reveal>
            <p className="eyebrow mb-5 text-gold">Signature Services</p>
            <h2 className="heading-md max-w-[720px] text-balance">
              Design, planning, and hospitality shaped as one experience.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-[680px] text-lg leading-8 text-espresso/72 lg:ml-auto">
              Built for planners and studios who need their digital presence to
              communicate taste, trust, and the ability to hold complex celebrations.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <Reveal key={service.title} delay={index * 0.08}>
                <motion.article
                  className={`group relative min-h-[300px] overflow-hidden rounded-[1.75rem] border border-ink/10 bg-ivory/74 p-8 shadow-soft transition duration-500 hover:-translate-y-2 hover:border-gold/55 ${
                    index === 1 ? "md:mt-12" : ""
                  } ${index === 2 ? "md:-mt-6" : ""}`}
                  whileHover={{ rotate: index % 2 === 0 ? -0.55 : 0.55 }}
                >
                  <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-gold/80 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                  <div className="mb-12 inline-grid h-14 w-14 place-items-center rounded-full border border-gold/35 bg-champagne/35 text-ink">
                    <Icon size={26} weight="duotone" aria-hidden="true" />
                  </div>
                  <h3 className="font-display max-w-[15ch] text-3xl leading-tight">
                    {service.title}
                  </h3>
                  <p className="mt-5 max-w-[56ch] leading-7 text-espresso/70">
                    {service.description}
                  </p>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
