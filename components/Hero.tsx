"use client";

import MagneticButton from "@/components/MagneticButton";
import { company, hero } from "@/data/siteData";
import { motion, useReducedMotion } from "framer-motion";

const textReveal = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0 }
};

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="top"
      className="soft-focus relative min-h-[92dvh] overflow-hidden pt-24 text-ink"
    >
      <div className="absolute inset-x-0 top-16 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="luxury-container grid min-h-[calc(92dvh-6rem)] items-center gap-12 pb-12 pt-10 lg:grid-cols-[1.04fr_0.96fr] lg:gap-14">
        <motion.div
          className="max-w-[790px]"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.12, delayChildren: 1.95 }}
        >
          <motion.p className="eyebrow mb-8 text-gold" variants={textReveal}>
            {company.tagline}
          </motion.p>
          <motion.h1 className="heading-xl text-balance" variants={textReveal}>
            {hero.headline}
          </motion.h1>
          <motion.p
            className="mt-8 max-w-[620px] text-lg leading-8 text-espresso/76 md:text-xl"
            variants={textReveal}
          >
            {hero.subheadline}
          </motion.p>
          <motion.div
            className="mt-10 flex flex-col gap-4 sm:flex-row"
            variants={textReveal}
          >
            <MagneticButton href={hero.primaryCta.href}>
              {hero.primaryCta.label}
            </MagneticButton>
            <MagneticButton href={hero.secondaryCta.href} variant="line">
              {hero.secondaryCta.label}
            </MagneticButton>
          </motion.div>
        </motion.div>

        <div className="relative min-h-[560px] lg:min-h-[720px]">
          <motion.div
            className="image-vignette absolute right-0 top-0 h-[78%] w-[74%] overflow-hidden rounded-t-full rounded-b-[2rem] border border-ivory/60 shadow-soft"
            initial={{ opacity: 0, clipPath: "inset(18% 0 18% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0% 0 0% 0)" }}
            transition={{ duration: 1.25, delay: 2.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.img
              src={hero.images[0].src}
              alt={hero.images[0].alt}
              className="h-full w-full object-cover"
              loading="eager"
              animate={reduceMotion ? undefined : { scale: [1.06, 1.11, 1.06] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
          <motion.div
            className="absolute bottom-8 left-0 w-[56%] overflow-hidden rounded-[1.5rem] border border-ivory/70 bg-ivory/80 p-3 shadow-gold backdrop-blur-md"
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="aspect-[4/5] overflow-hidden rounded-[1rem]">
              <motion.img
                src={hero.images[1].src}
                alt={hero.images[1].alt}
                className="h-full w-full object-cover"
                animate={reduceMotion ? undefined : { y: ["0%", "-4%", "0%"] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <div className="flex items-end justify-between gap-4 px-2 py-4">
              <p className="max-w-[16ch] text-sm font-semibold leading-5 text-ink">
                Art direction, hospitality, and production in one atelier.
              </p>
              <span className="font-display text-4xl text-gold">18</span>
            </div>
          </motion.div>
          <motion.div
            className="absolute left-[12%] top-[12%] hidden w-28 border-t border-gold/70 pt-4 text-xs font-semibold uppercase text-ink/60 lg:block"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 2.45 }}
          >
            Global celebration design
          </motion.div>
        </div>
      </div>
    </section>
  );
}
