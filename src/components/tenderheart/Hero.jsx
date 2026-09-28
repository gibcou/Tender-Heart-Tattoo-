import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Image } from "@/components/ui/image";

const slides = [
  "https://images.squarespace-cdn.com/content/v1/66be95cad4352e0f282b9025/dc0b9445-e89d-4e3c-a283-85c4d772c62c/AE840F5D-36BB-4F47-872B-4403D21D8612.jpg",
  "https://images.squarespace-cdn.com/content/v1/66be95cad4352e0f282b9025/42c53cfa-c11d-4fde-add4-b645c2bd46b2/894E6B6B-8922-4E05-A7E0-5E217871F8FC.jpg",
  "https://images.squarespace-cdn.com/content/v1/66be95cad4352e0f282b9025/4ba43f05-f557-45c3-b390-065b2f57f2ef/FEF54C76-B563-401A-8953-BA911D2DB7E0.jpg",
  "https://images.squarespace-cdn.com/content/v1/66be95cad4352e0f282b9025/d71d53fc-5c8e-40bc-b8bc-cd6a52c7d5d0/IMG_7109.jpg",
  "https://images.squarespace-cdn.com/content/v1/66be95cad4352e0f282b9025/dd6434b3-e35d-46f8-90ec-3447ce2e53b8/IMG_2100.jpg",
];

const FADE_MS = 2500;
const HOLD_MS = 6000;
const EASE = [0.22, 1, 0.36, 1];

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % slides.length), HOLD_MS);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="top" className="relative min-h-[100svh] flex flex-col overflow-hidden">
      {/* Crossfading background */}
      <div className="absolute inset-0">
        {slides.map((src, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity ease-in-out ${i === active ? "kenburns" : ""}`}
            style={{
              opacity: i === active ? 1 : 0,
              transitionDuration: `${FADE_MS}ms`,
            }}
            aria-hidden={i !== active}
          >
            <Image
              src={src}
              alt="Black and grey tattoo work by Courtney at Tender Heart Tattoo"
              className="w-full h-full"
              fittingType="fill"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
      </div>

      {/* Type */}
      <div className="relative flex-1 flex flex-col justify-end px-6 md:px-12 pb-10 pt-40">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          className="font-script text-4xl md:text-6xl text-accent mb-2 md:mb-4"
        >
          fine ink since
        </motion.p>
        <h1 className="font-heading leading-[0.82] tracking-[0.01em]">
          <motion.span
            initial={{ opacity: 0, y: 90 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: EASE }}
            className="block text-[26vw] md:text-[15vw]"
          >
            TENDER
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 90 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: EASE }}
            className="block text-[26vw] md:text-[15vw] text-outline"
          >
            HEART
          </motion.span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8, ease: EASE }}
          className="mt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
        >
          <p className="max-w-md text-[13px] md:text-[15px] leading-[1.8] tracking-[0.01em] text-foreground/70">
            Custom black &amp; grey realism: swallows, portraits, everything with a story.
            One chair, one artist, Bozeman Montana.
          </p>
          <div className="flex flex-col items-stretch sm:flex-row sm:items-center gap-4 sm:gap-6">
            <a
              href="#consultation"
              className="font-heading text-xl md:text-2xl tracking-[0.08em] bg-accent text-accent-foreground px-8 py-3.5 text-center hover:bg-foreground hover:text-background transition-colors"
            >
              Book a Chair
            </a>
            <a
              href="#portfolio"
              className="font-heading text-xl md:text-2xl tracking-[0.08em] text-foreground/70 hover:text-foreground transition-colors text-center"
            >
              The Work ↓
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}