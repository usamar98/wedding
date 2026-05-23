"use client";

import Reveal from "@/components/Reveal";
import { portfolioProjects } from "@/data/siteData";
import { ArrowUpRight, MapPin, UsersThree } from "@phosphor-icons/react";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-y bg-ink text-ivory">
      <div className="luxury-container">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <Reveal>
            <p className="eyebrow mb-6 text-gold">Featured Celebrations</p>
            <h2 className="heading-lg max-w-[980px] text-balance">
              Cinematic weddings with a sense of place.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="max-w-[620px] text-lg leading-8 text-ivory/68 lg:ml-auto">
              A portfolio grid for destination planners, event stylists, and
              full-service studios who sell atmosphere before they sell logistics.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid auto-rows-[360px] gap-5 md:grid-cols-2 lg:grid-cols-6">
          {portfolioProjects.map((project, index) => (
            <Reveal
              key={project.title}
              delay={index * 0.06}
              className={`${
                index === 0 || index === 5
                  ? "lg:col-span-3 lg:row-span-2"
                  : "lg:col-span-3"
              }`}
            >
              <motion.article
                className="image-vignette group relative h-full overflow-hidden rounded-[1.35rem] border border-ivory/10 bg-espresso shadow-soft"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 120, damping: 18 }}
              >
                <motion.img
                  src={project.image.src}
                  alt={project.image.alt}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 z-[1] p-6 md:p-8">
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-ivory/20 bg-ink/34 px-3 py-1 text-xs font-semibold text-ivory backdrop-blur-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-display text-4xl leading-none md:text-5xl">
                    {project.title}
                  </h3>
                  <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ivory/78">
                    <span className="inline-flex items-center gap-2">
                      <MapPin size={16} aria-hidden="true" />
                      {project.location}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <UsersThree size={16} aria-hidden="true" />
                      {project.guests}
                    </span>
                  </div>
                  <div className="mt-6 flex items-center justify-between gap-4">
                    <p className="text-sm font-semibold text-gold">{project.type}</p>
                    <a
                      href="#case-study"
                      className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-ivory/30 px-4 text-sm font-semibold text-ivory transition hover:border-gold hover:bg-ivory/10 active:translate-y-[1px]"
                    >
                      View Story
                      <ArrowUpRight size={15} aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
