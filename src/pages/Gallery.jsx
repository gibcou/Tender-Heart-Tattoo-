import React from "react";
import { Link } from "react-router-dom";
import SiteNav from "@/components/tenderheart/SiteNav";
import SiteFooter from "@/components/tenderheart/SiteFooter";
import { Image } from "@/components/ui/image";
import { galleryImages } from "@/components/tenderheart/galleryImages";
import { FadeSoft, ImageReveal } from "@/components/tenderheart/Reveal";

export default function Gallery() {
  return (
    <div className="grain bg-background min-h-screen">
      <SiteNav />
      <main className="pt-28 md:pt-36">
        <section className="mx-auto max-w-[1400px] px-6 md:px-12 pb-24 md:pb-32">
          <FadeSoft>
            <p className="text-[10px] uppercase tracking-[0.4em] font-medium text-accent mb-4">Full Gallery</p>
            <h1 className="font-heading text-6xl md:text-8xl leading-[0.85] tracking-[0.02em]">
              EVERY PIECE.
            </h1>
            <p className="mt-6 max-w-md text-[15px] leading-[1.8] text-foreground/60">
              The complete archive from the studio: every piece Courtney has been able to photograph.
            </p>
          </FadeSoft>

          <div className="mt-14 md:mt-20 columns-2 lg:columns-3 gap-3 md:gap-6">
            {galleryImages.map((src, i) => (
              <ImageReveal key={i} delay={(i % 3) * 0.06}>
                <figure className="group relative overflow-hidden mb-3 md:mb-6 break-inside-avoid">
                  <Image
                    src={src}
                    alt={`Tattoo piece ${i + 1} by Courtney at Tender Heart Tattoo`}
                    className="w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    fittingType="fit"
                  />
                </figure>
              </ImageReveal>
            ))}
          </div>

          <FadeSoft>
            <div className="mt-16 text-center">
              <Link
                to="/"
                className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] border-b border-foreground pb-2 hover:gap-5 transition-all"
              >
                <span className="text-accent">←</span> Back to the Shop
              </Link>
            </div>
          </FadeSoft>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}