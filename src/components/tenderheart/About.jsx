import React from "react";
import { Image } from "@/components/ui/image";
import Reveal, { FadeSoft, ImageReveal, InkLine } from "@/components/tenderheart/Reveal";

const specialties = ["Black & Grey", "Portraiture", "Realism", "Fine-line", "Blackout", "Illustrative Realism"];

export default function About() {
  return (
    <section id="about" className="bg-background border-t border-border">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-24 md:py-36">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="md:col-span-5">
            <ImageReveal>
            <div className="relative">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/66be95cad4352e0f282b9025/a5f1c5b1-8d30-4611-930c-a1c06f0a3aa0/besttattooartistinbozeman.jpg?format=2500w"
                alt="Courtney, tattoo artist and owner of Tender Heart Tattoo in Bozeman, Montana"
                className="w-full"
                fittingType="fit"
              />
              <div className="absolute -bottom-5 -right-5 bg-accent text-accent-foreground px-6 py-4 hidden md:block">
                <p className="font-heading text-xl tracking-[0.14em] leading-none">COURTNEY</p>
                <p className="font-script text-2xl leading-none mt-1">artist &amp; owner</p>
              </div>
            </div>
            </ImageReveal>
          </div>

          <div className="md:col-span-7">
            <Reveal>
              <p className="text-[10px] uppercase tracking-[0.4em] font-medium text-accent mb-4">About Courtney</p>
              <InkLine className="mb-8" />
            </Reveal>
            <FadeSoft delay={0.1}>
            <h2 className="font-heading text-6xl md:text-8xl leading-[0.85] tracking-[0.02em]">
              GREAT TATTOOS.
              <br />
              <span className="text-outline">GOOD LIFE.</span>
            </h2>
            </FadeSoft>

            <FadeSoft delay={0.2}>
            <div className="mt-10 space-y-5 text-[15px] md:text-base leading-[1.8] text-foreground/70 max-w-xl">
              <p>
                Making great tattoos, being a mom, and enjoying life, that's what makes
                Courtney's world go round. She's a mother of one, living and working right
                here in Bozeman, Montana.
              </p>
              <p>
                Her main focus is black &amp; grey and portraiture, with specialties in
                realism, fine-line, blackout, and illustrative realism, every piece
                drawn custom for the person wearing it.
              </p>
              <p>
                She believes the client/artist relationship matters as much as the ink
                itself: your experience should always be safe, positive, and entirely yours.
              </p>
            </div>
            </FadeSoft>

            <div className="mt-12 flex flex-wrap gap-3">
              {specialties.map((s, i) => (
                <Reveal key={s} delay={i * 0.06} y={16} className="inline-block">
                  <span className="text-[10px] uppercase tracking-[0.2em] border border-foreground/25 px-4 py-2 text-foreground/60">
                    {s}
                  </span>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}