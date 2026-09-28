import React from "react";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

export default function Reveal({ children, delay = 0, y = 36, className }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/* Soft, ethereal fade: blur melts away as it rises into place. */
export function FadeSoft({ children, delay = 0, y = 20, className }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.2, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/* Curtain wipe: images unfurl from a soft inset frame. */
export function ImageReveal({ children, delay = 0, className }) {
  return (
    <motion.div
      className={className}
      initial={{ clipPath: "inset(8% 6% 8% 6%)", opacity: 0, scale: 1.05 }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.4, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export function InkLine({ className = "", delay = 0 }) {
  return (
    <motion.div
      className={`h-px bg-accent w-24 ${className}`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay, ease: EASE }}
      style={{ transformOrigin: "left" }}
    />
  );
}