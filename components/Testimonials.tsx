"use client";

import Reveal from "@/components/Reveal";
import { testimonials } from "@/data/siteData";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(
      () => setActive((current) => (current + 1) % testimonials.length),
      5200
    );
    return () => window.clearInterval(timer);
  }, []);

  const testimonial = testimonials[active];

  return (
    <section id="testimonials" className="section-y bg-linen text-ink">
      <div className="luxury-container grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
        <Reveal>
          <p className="eyebrow mb-6 text-gold">Client Notes</p>
          <h2 className="heading-md max-w-[620px] text-balance">
            Emotional proof, told with restraint.
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="relative overflow-hidden rounded-[1.5rem] border border-ink/10 bg-ivory p-8 shadow-soft md:p-12">
            <AnimatePresence mode="wait">
              <motion.figure
                key={testimonial.couple}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <blockquote className="font-display text-3xl leading-tight md:text-5xl">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-10 flex flex-col gap-2 border-t border-ink/10 pt-6 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="font-semibold">{testimonial.couple}</p>
                    <p className="mt-1 text-sm text-espresso/65">
                      {testimonial.location}
                    </p>
                  </div>
                  <p className="text-sm font-semibold text-moss">
                    {testimonial.eventType}
                  </p>
                </figcaption>
              </motion.figure>
            </AnimatePresence>

            <div className="mt-8 flex gap-3">
              {testimonials.map((item, index) => (
                <button
                  key={item.couple}
                  type="button"
                  aria-label={`Show testimonial from ${item.couple}`}
                  onClick={() => setActive(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    index === active ? "w-10 bg-gold" : "w-2.5 bg-ink/18"
                  }`}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
