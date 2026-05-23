"use client";

import Reveal from "@/components/Reveal";
import { processSteps } from "@/data/siteData";
import { motion } from "framer-motion";

export default function Process() {
  return (
    <section id="process" className="section-y bg-ivory text-ink">
      <div className="luxury-container">
        <Reveal className="max-w-[860px]">
          <p className="eyebrow mb-6 text-gold">Planning Rhythm</p>
          <h2 className="heading-lg text-balance">
            A calm path from first conversation to final candle.
          </h2>
        </Reveal>

        <div className="mt-14 hidden lg:block">
          <div className="relative grid grid-cols-5 gap-5">
            <div className="absolute left-0 right-0 top-10 h-px bg-ink/14" />
            {processSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.08}>
                <motion.article
                  className="relative pt-24"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 130, damping: 20 }}
                >
                  <span className="absolute left-0 top-0 grid h-20 w-20 place-items-center rounded-full border border-gold/40 bg-linen text-xl font-bold shadow-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-3xl leading-tight">{step.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-espresso/70">{step.copy}</p>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-5 lg:hidden">
          {processSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.05}>
              <article className="grid grid-cols-[3.75rem_1fr] gap-5 border-t border-ink/12 pt-6">
                <span className="grid h-14 w-14 place-items-center rounded-full border border-gold/40 bg-linen text-sm font-bold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-3xl leading-tight">{step.title}</h3>
                  <p className="mt-3 leading-7 text-espresso/70">{step.copy}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
