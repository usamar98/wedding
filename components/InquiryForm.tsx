"use client";

import Reveal from "@/components/Reveal";
import { budgetRanges, company } from "@/data/siteData";
import { PaperPlaneTilt } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "framer-motion";
import type { FormEvent } from "react";
import { useState } from "react";

export default function InquiryForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.currentTarget.reset();
    setSent(true);
    window.setTimeout(() => setSent(false), 4600);
  }

  return (
    <section id="inquiry" className="section-y bg-ink text-ivory">
      <div className="luxury-container grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
        <Reveal>
          <p className="eyebrow mb-6 text-gold">Start An Inquiry</p>
          <h2 className="heading-lg max-w-[780px] text-balance">
            Tell us about the celebration you are imagining.
          </h2>
          <p className="mt-8 max-w-[560px] text-lg leading-8 text-ivory/68">
            This demo form is frontend only. Submitting it will show a success
            message so planners can see the complete inquiry flow.
          </p>
          <div className="mt-10 border-t border-ivory/12 pt-6 text-sm text-ivory/68">
            <p>{company.email}</p>
            <p className="mt-2">{company.phone}</p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="relative rounded-[1.5rem] border border-ivory/12 bg-ivory p-6 text-ink shadow-soft md:p-8"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone / WhatsApp" name="phone" type="tel" required />
              <Field label="Event location" name="location" />
              <Field label="Estimated date" name="date" type="date" />
              <Field label="Guest count" name="guests" type="number" min="1" />
              <label className="grid gap-2 md:col-span-2">
                <span className="text-sm font-semibold text-espresso">Budget range</span>
                <select
                  name="budget"
                  className="min-h-12 rounded-xl border border-ink/12 bg-linen px-4 outline-none transition focus:border-gold"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a range
                  </option>
                  {budgetRanges.map((range) => (
                    <option key={range}>{range}</option>
                  ))}
                </select>
              </label>
              <label className="grid gap-2 md:col-span-2">
                <span className="text-sm font-semibold text-espresso">Message</span>
                <textarea
                  name="message"
                  rows={5}
                  className="resize-none rounded-xl border border-ink/12 bg-linen px-4 py-3 outline-none transition focus:border-gold"
                  placeholder="Share the location, guest experience, style, priorities, or planning stage."
                />
              </label>
            </div>

            <button
              type="submit"
              className="mt-7 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-ink px-7 py-3 text-sm font-semibold text-ivory transition hover:bg-espresso active:translate-y-[1px]"
            >
              Submit Inquiry
              <PaperPlaneTilt size={17} weight="bold" aria-hidden="true" />
            </button>

            <AnimatePresence>
              {sent ? (
                <motion.div
                  className="absolute bottom-6 left-6 right-6 rounded-2xl border border-gold/35 bg-ink px-5 py-4 text-sm font-semibold text-ivory shadow-gold md:left-auto md:right-8 md:w-[360px]"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 18 }}
                  role="status"
                >
                  Thank you — your inquiry has been received.
                </motion.div>
              ) : null}
            </AnimatePresence>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  min
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  min?: string;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-semibold text-espresso">{label}</span>
      <input
        name={name}
        type={type}
        min={min}
        required={required}
        className="min-h-12 rounded-xl border border-ink/12 bg-linen px-4 outline-none transition focus:border-gold"
      />
    </label>
  );
}
