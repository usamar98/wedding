"use client";

import Reveal from "@/components/Reveal";
import { caseStudy } from "@/data/siteData";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function CaseStudy() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-5%", "7%"]);
  const progress = useTransform(scrollYProgress, [0.2, 0.82], ["0%", "100%"]);

  return (
    <section
      ref={sectionRef}
      id="case-study"
      className="relative overflow-hidden bg-ivory py-[clamp(5rem,12vw,12rem)] text-ink"
    >
      <div className="luxury-container grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <Reveal>
            <p className="eyebrow mb-6 text-gold">{caseStudy.kicker}</p>
            <h2 className="heading-lg max-w-[820px] text-balance">
              {caseStudy.title}
            </h2>
            <p className="mt-8 max-w-[620px] text-lg leading-8 text-espresso/74">
              {caseStudy.summary}
            </p>
            <p className="mt-5 font-semibold text-moss">{caseStudy.location}</p>
          </Reveal>
        </div>

        <div>
          <Reveal className="relative overflow-hidden rounded-[1.5rem] border border-ink/10 bg-champagne/25 shadow-soft">
            <div className="aspect-[5/6] overflow-hidden md:aspect-[16/10]">
              <motion.img
                src={caseStudy.image.src}
                alt={caseStudy.image.alt}
                className="h-[116%] w-full object-cover"
                style={{ y: imageY }}
              />
            </div>
          </Reveal>

          <div className="relative mt-14">
            <div className="absolute left-4 top-0 hidden h-full w-px bg-ink/12 md:block">
              <motion.div
                className="w-px bg-gold"
                style={{ height: progress }}
              />
            </div>
            <div className="space-y-6 md:pl-14">
              {caseStudy.moments.map((moment, index) => (
                <Reveal key={moment.title} delay={index * 0.08}>
                  <article className="relative border-t border-ink/12 py-8 md:border-t-0">
                    <span className="mb-5 inline-grid h-9 w-9 place-items-center rounded-full border border-gold/35 bg-ivory text-sm font-bold text-ink md:absolute md:-left-[3.8rem] md:top-8">
                      {index + 1}
                    </span>
                    <h3 className="font-display text-3xl leading-tight">
                      {moment.title}
                    </h3>
                    <p className="mt-4 max-w-[650px] leading-7 text-espresso/72">
                      {moment.copy}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
