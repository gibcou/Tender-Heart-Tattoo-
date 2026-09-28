import React from "react";
import { Image } from "@/components/ui/image";
import Reveal, { FadeSoft, ImageReveal, InkLine } from "@/components/tenderheart/Reveal";

const marqueeItems = [
  "Black & Grey",
  "Realism",
  "Portraits",
  "Custom Pieces",
  "Cover-ups",
  "Traditional",
  "Walk-out Art",
];

export default function Philosophy() {
  return (
    <section id="shop" className="bg-background">
      {/* Marquee */}
      <div className="border-y border-border bg-accent text-accent-foreground py-3 overflow-hidden">
        <div className="flex gap-10 whitespace-nowrap animate-[scroll_28s_linear_infinite]">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="font-heading text-lg md:text-xl tracking-[0.18em] flex items-center gap-10">
              {item} <span className="text-background/40">✦</span>
            </span>
          ))}
        </div>
        <style>{`@keyframes scroll { from { transform: translateX(0) } to { transform: translateX(-33.33%) } }`}</style>
      </div>

      {/* The shop / the artist */}
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-24 md:py-36">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
          <div className="md:col-span-7">
            <Reveal>
              <p className="text-[10px] uppercase tracking-[0.4em] font-medium text-accent mb-4">The Shop</p>
              <InkLine className="mb-8" />
            </Reveal>
            <FadeSoft delay={0.1}>
            <h2 className="font-heading text-6xl md:text-8xl leading-[0.85] tracking-[0.02em]">
              ONE CHAIR.
              <br />
              <span className="text-outline">ONE ARTIST.</span>
              <br />
              NO ASSEMBLY LINE.
            </h2>
            </FadeSoft>

            <FadeSoft delay={0.2}>
            <div className="mt-10 space-y-5 text-[15px] md:text-base leading-[1.8] text-foreground/70 max-w-xl">
              <p>
                Tender Heart is a private tattoo studio run by <span className="text-foreground font-medium">Courtney</span>,
                a black &amp; grey artist who draws every piece from scratch, for one person, and never repeats it.
              </p>
              <p>
                No flash-wall shortcuts, no conveyor belt. You sit down, we talk about what the piece
                means, and the needle does the rest. Bold when it needs to be bold, soft where it counts.
              </p>
            </div>
            </FadeSoft>

            <div className="mt-12 grid grid-cols-2 gap-px bg-border border border-border">
              {[
                { t: "Black & Grey", d: "Smooth greyscale, deep blacks" },
                { t: "Realism", d: "Portraits & animals that hold up" },
                { t: "Cover-ups", d: "Old work, new story" },
                { t: "18+ Only", d: "ID required, no exceptions" },
              ].map((f, i) => (
                <FadeSoft key={f.t} delay={i * 0.06} y={16}>
                  <div className="bg-background p-4 sm:p-6">
                    <h3 className="font-heading text-xl tracking-[0.08em]">{f.t}</h3>
                    <p className="mt-2.5 text-[13px] leading-[1.7] text-foreground/50">{f.d}</p>
                  </div>
                </FadeSoft>
              ))}
            </div>
          </div>

          <div className="md:col-span-5 md:sticky md:top-28">
            <ImageReveal delay={0.15}>
            <div className="relative overflow-hidden border border-border group">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/66be95cad4352e0f282b9025/42c53cfa-c11d-4fde-add4-b645c2bd46b2/894E6B6B-8922-4E05-A7E0-5E217871F8FC.jpg"
                alt="Black and grey portrait tattoo by Courtney"
                className="w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                fittingType="fit"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-5">
                <p className="font-script text-3xl text-foreground">work by Courtney</p>
              </div>
            </div>
            </ImageReveal>
          </div>
        </div>
      </div>
    </section>
  );
}