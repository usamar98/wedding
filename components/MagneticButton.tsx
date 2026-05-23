"use client";

import { ArrowRight } from "@phosphor-icons/react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring
} from "framer-motion";
import type { MouseEvent, ReactNode } from "react";

type MagneticButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "dark" | "light" | "line";
  className?: string;
};

export default function MagneticButton({
  href,
  children,
  variant = "dark",
  className = ""
}: MagneticButtonProps) {
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 18, mass: 0.45 });
  const springY = useSpring(y, { stiffness: 180, damping: 18, mass: 0.45 });

  const variants = {
    dark:
      "bg-ink text-ivory border-ink shadow-soft hover:bg-espresso active:translate-y-[1px]",
    light:
      "bg-ivory text-ink border-ivory shadow-gold hover:bg-champagne active:translate-y-[1px]",
    line:
      "bg-transparent text-ink border-ink/25 hover:border-gold hover:bg-ivory/50 active:translate-y-[1px]"
  };

  function onMove(event: MouseEvent<HTMLAnchorElement>) {
    if (reduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.14);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.14);
  }

  function onLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      href={href}
      className={`group inline-flex min-h-12 items-center justify-center gap-3 rounded-full border px-6 py-3 text-sm font-semibold transition duration-300 ${variants[variant]} ${className}`}
      style={reduceMotion ? undefined : { x: springX, y: springY }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileTap={{ scale: 0.985 }}
    >
      <span>{children}</span>
      <ArrowRight
        aria-hidden="true"
        size={17}
        weight="bold"
        className="transition-transform duration-300 group-hover:translate-x-1"
      />
    </motion.a>
  );
}
