import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { label: "The Shop", href: "#shop" },
  { label: "Gallery", href: "#portfolio" },
  { label: "Booking", href: "#process" },
];

export default function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const onHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  // On non-home pages (e.g. the full gallery), anchor links navigate back to
  // the home page section instead of pointing at a missing hash.
  const anchorProps = (href) =>
    onHome
      ? { href }
      : { to: `/${href}` };

  const Anchor = ({ href, className, children }) =>
    onHome ? (
      <a href={href} className={className}>{children}</a>
    ) : (
      <Link to={`/${href}`} className={className}>{children}</Link>
    );

  const closeAnd = () => setOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 border-b transition-all duration-500 ${
          scrolled
            ? "py-3 bg-background/90 backdrop-blur-md border-border"
            : "py-5 bg-gradient-to-b from-black/70 to-transparent border-transparent"
        }`}
      >
        <nav className="mx-auto max-w-[1400px] px-6 md:px-12 flex items-center justify-between">
          {onHome ? (
            <a href="#top" className="flex items-baseline gap-2">
              <span className="font-heading text-3xl tracking-[0.06em] leading-none">TENDER HEART</span>
              <span className="font-script text-2xl text-accent leading-none hidden sm:inline">tattoo</span>
            </a>
          ) : (
            <Link to="/" className="flex items-baseline gap-2">
              <span className="font-heading text-3xl tracking-[0.06em] leading-none">TENDER HEART</span>
              <span className="font-script text-2xl text-accent leading-none hidden sm:inline">tattoo</span>
            </Link>
          )}

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Anchor
                key={l.href}
                href={l.href}
                className="text-[11px] uppercase tracking-[0.3em] text-foreground/60 hover:text-foreground transition-colors"
              >
                {l.label}
              </Anchor>
            ))}
            <Anchor
              href="#consultation"
              className="font-heading text-lg tracking-[0.1em] bg-accent text-accent-foreground px-6 py-2 hover:bg-foreground hover:text-background transition-colors"
            >
              Book Now
            </Anchor>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-foreground"
            aria-label="Open menu"
          >
            <Menu size={24} strokeWidth={1.5} />
          </button>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-50 bg-background transition-all duration-500 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="relative h-full flex flex-col px-6 py-6">
          <div className="flex items-center justify-between">
            {onHome ? (
              <span className="font-heading text-3xl tracking-[0.06em]">TENDER HEART</span>
            ) : (
              <Link to="/" className="font-heading text-3xl tracking-[0.06em]" onClick={closeAnd}>
                TENDER HEART
              </Link>
            )}
            <button onClick={closeAnd} aria-label="Close menu">
              <X size={26} strokeWidth={1.5} />
            </button>
          </div>

          <div className="flex flex-col gap-6 my-auto">
            {links.map((l) =>
              onHome ? (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={closeAnd}
                  className="font-heading text-6xl tracking-[0.03em] leading-none hover:text-accent transition-colors"
                >
                  {l.label}
                </a>
              ) : (
                <Link
                  key={l.href}
                  to={`/${l.href}`}
                  onClick={closeAnd}
                  className="font-heading text-6xl tracking-[0.03em] leading-none hover:text-accent transition-colors"
                >
                  {l.label}
                </Link>
              )
            )}
            {onHome ? (
              <a
                href="#consultation"
                onClick={closeAnd}
                className="font-heading text-6xl tracking-[0.03em] text-accent"
              >
                Book Now
              </a>
            ) : (
              <Link
                to="/#consultation"
                onClick={closeAnd}
                className="font-heading text-6xl tracking-[0.03em] text-accent"
              >
                Book Now
              </Link>
            )}
          </div>

          <p className="text-[11px] uppercase tracking-[0.3em] text-foreground/40">
            Bozeman, MT · By Appointment
          </p>
        </div>
      </div>
    </>
  );
}