"use client";

import Reveal from "@/components/Reveal";
import { about } from "@/data/siteData";
import { motion, useReducedMotion } from "framer-motion";

export default function About() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className="section-y bg-ivory text-ink">
      <div className="luxury-container grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
        <Reveal className="relative lg:pb-16">
          <div className="relative overflow-hidden rounded-t-full rounded-b-[1.5rem] border border-ink/10 bg-champagne/30 shadow-soft">
            <motion.img
              src={about.image.src}
              alt={about.image.alt}
              className="aspect-[4/5] h-full w-full object-cover"
              whileInView={reduceMotion ? undefined : { scale: [1.08, 1.02] }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow mb-6 text-gold">{about.kicker}</p>
            <h2 className="heading-lg max-w-[980px] text-balance">
              {about.title}
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-7 text-lg leading-8 text-espresso/76 md:grid-cols-2">
            {about.copy.map((paragraph, index) => (
              <Reveal key={paragraph} delay={index * 0.12}>
                <p>{paragraph}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-14 border-y border-ink/12">
            <dl className="grid grid-cols-2 gap-x-6 gap-y-8 py-8 md:grid-cols-4">
              {about.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-sm font-semibold text-ink/55">{stat.label}</dt>
                  <dd className="font-display mt-2 text-5xl leading-none text-ink">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
