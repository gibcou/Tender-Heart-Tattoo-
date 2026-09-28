import React from "react";
import { Image } from "@/components/ui/image";
import Reveal, { FadeSoft, ImageReveal, InkLine } from "@/components/tenderheart/Reveal";

const steps = [
  {
    n: "01",
    t: "Send Your Idea",
    d: "Fill out the consultation form below: what you want, where it goes, and the story behind it.",
  },
  {
    n: "02",
    t: "Lock the Design",
    d: "Courtney draws your piece custom. You approve the design and pay the deposit to hold your date.",
  },
  {
    n: "03",
    t: "Sit Down",
    d: "Private appointment, one client at a time. Clean setup, fresh needles, good conversation.",
  },
  {
    n: "04",
    t: "Heal It Right",
    d: "You leave with written aftercare and a direct line to the shop if anything comes up.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative bg-foreground text-background py-24 md:py-36 overflow-hidden">
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-end mb-16">
          <FadeSoft className="md:col-span-7">
            <p className="text-[10px] uppercase tracking-[0.4em] font-medium text-accent mb-4">Getting Inked</p>
            <InkLine className="mb-8" />
            <h2 className="font-heading text-6xl md:text-8xl leading-[0.85] tracking-[0.02em]">
              FROM IDEA
              <br />
              TO HEALED.
            </h2>
          </FadeSoft>
          <div className="md:col-span-5">
            <FadeSoft>
            <p className="text-[15px] leading-[1.8] text-background/60 max-w-md">
              Straightforward booking, no games. A deposit holds your appointment and comes off
              the final price; details are worked out when we reply to your request.
            </p>
            </FadeSoft>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-background/20 border border-background/20">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08} y={28} className="bg-foreground">
              <div className="p-6 sm:p-8 md:p-10 flex flex-col">
                <span className="font-heading text-accent text-xl tracking-[0.12em]">{s.n}</span>
                <h3 className="mt-7 font-heading text-2xl tracking-[0.08em]">{s.t}</h3>
                <p className="mt-4 text-[13px] leading-[1.75] text-background/60">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <ImageReveal delay={0.1}>
        <div className="mt-20 relative overflow-hidden border border-background/20 group">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/66be95cad4352e0f282b9025/4ba43f05-f557-45c3-b390-065b2f57f2ef/FEF54C76-B563-401A-8953-BA911D2DB7E0.jpg"
            alt="Black and grey tattoo work by Courtney"
            className="w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            fittingType="fit"
          />
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
            <p className="font-script text-4xl md:text-5xl text-foreground">fresh off the needle</p>
          </div>
        </div>
        </ImageReveal>
      </div>
    </section>
  );
}