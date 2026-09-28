import React from "react";
import { Instagram } from "lucide-react";
import { FadeSoft } from "@/components/tenderheart/Reveal";

export default function SiteFooter() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-20 md:py-28">
        <FadeSoft>
          <p className="font-script text-5xl md:text-7xl text-accent">tattoo</p>
          <p className="font-heading text-[18vw] md:text-[10vw] leading-[0.85] tracking-[0.02em] text-outline select-none">
            TENDER HEART
          </p>
        </FadeSoft>

        <div className="mt-12 md:mt-16 grid md:grid-cols-3 gap-10">
          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-foreground/40 mb-4">The Shop</p>
            <p className="text-foreground/70 text-[13px] leading-[1.8]">
              Private studio in Bozeman, Montana<br />
              By appointment only<br />
              Wednesday – Saturday
            </p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-foreground/40 mb-4">Booking</p>
            <p className="text-foreground/70 text-sm leading-relaxed">
              18+ with valid ID<br />
              Deposit required to hold a date<br />
              Consultations are always free
            </p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-foreground/40 mb-4">Follow</p>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-foreground/70 hover:text-accent transition-colors text-[13px]"
            >
              <Instagram size={15} strokeWidth={1.5} /> @tenderhearttattoo
            </a>
            <a
              href="mailto:hello@tenderhearttattoo.com"
              className="block mt-3 text-foreground/70 hover:text-accent transition-colors text-sm"
            >
              hello@tenderhearttattoo.com
            </a>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-border flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-[10px] uppercase tracking-[0.25em] text-foreground/35">
          <span>© {new Date().getFullYear()} Tender Heart Tattoo, Bozeman, MT</span>
          <a href="#top" className="hover:text-foreground transition-colors">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}