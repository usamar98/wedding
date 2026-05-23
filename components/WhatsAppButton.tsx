"use client";

import { company } from "@/data/siteData";
import { WhatsappLogo } from "@phosphor-icons/react";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  const phone = company.phone.replace(/[^\d]/g, "");
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(
    company.whatsappMessage
  )}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Open WhatsApp inquiry"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full border border-ivory/30 bg-[#1f7a4d] text-ivory shadow-soft transition hover:bg-[#17663f] active:translate-y-[1px]"
      initial={{ opacity: 0, y: 30, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 2.35, type: "spring", stiffness: 130, damping: 18 }}
    >
      <WhatsappLogo size={28} weight="fill" aria-hidden="true" />
    </motion.a>
  );
}
