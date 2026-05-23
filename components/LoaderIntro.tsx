"use client";

import { company } from "@/data/siteData";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoaderIntro() {
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), reduceMotion ? 350 : 1850);
    return () => window.clearTimeout(timer);
  }, [reduceMotion]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[70] grid place-items-center overflow-hidden bg-ink text-ivory"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-3%" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="absolute inset-x-[12vw] top-1/2 h-px bg-gradient-to-r from-transparent via-gold to-transparent"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="relative text-center">
            <motion.p
              className="eyebrow mb-5 text-gold"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {company.tagline}
            </motion.p>
            <motion.h1
              className="font-display text-[clamp(2.3rem,7vw,6.4rem)] leading-none"
              initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              {company.name}
            </motion.h1>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
