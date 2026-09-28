import React from "react";
import { Link } from "react-router-dom";
import { Image } from "@/components/ui/image";
import { galleryImages } from "@/components/tenderheart/galleryImages";
import Reveal, { FadeSoft, ImageReveal, InkLine } from "@/components/tenderheart/Reveal";

const featured = galleryImages.slice(0, 6);

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-background py-24 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] font-medium text-accent mb-4">Gallery</p>
              <InkLine className="mb-8" />
              <h2 className="font-heading font-light text-5xl md:text-6xl lg:text-7xl tracking-[0.02em] leading-[0.95]">
                The work, <span className="italic">up close.</span>
              </h2>
            </div>
            <p className="max-w-sm text-[13px] text-foreground/60 leading-[1.8]">
              Recent pieces from the studio. Each tattoo is original, drawn for one person and
              never repeated.
            </p>
          </div>
        </Reveal>

        <div className="columns-2 lg:columns-3 gap-3 md:gap-6">
          {featured.map((src, i) => (
            <ImageReveal key={i} delay={(i % 3) * 0.08}>
              <figure className="group relative overflow-hidden mb-3 md:mb-6 break-inside-avoid">
                <Image
                  src={src}
                  alt={`Tattoo piece ${i + 1} by Courtney`}
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
              to="/gallery"
              className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] border border-foreground/40 px-10 py-4 hover:border-foreground hover:bg-foreground hover:text-background transition-colors"
            >
              Load More <span className="text-accent">→</span>
            </Link>
          </div>
        </FadeSoft>
      </div>
    </section>
  );
}