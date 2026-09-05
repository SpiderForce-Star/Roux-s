import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { LINKS } from "@/data/restaurant";
import { FleurDeLis } from "./marks";

const NAV = [
  { href: "/#menu", label: "Menu" },
  { href: "/#story", label: "Our Story" },
  { href: "/chef", label: "The Chef", to: "/chef" as const },
  { href: "/#happy-hour", label: "Happy Hour" },
  { href: "/#truck", label: "Food Truck" },
  { href: "/#deck", label: "The Deck" },
  { href: "/#visit", label: "Visit" },
];

export function Header({ solid = false }: { solid?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background,box-shadow,backdrop-filter] duration-300",
        solid || scrolled || open
          ? "bg-plum-deep/95 shadow-nav backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-sm focus:bg-gold focus:px-3 focus:py-2 focus:text-plum-deep"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:h-18 sm:px-6">
        <Link to="/" className="flex items-center gap-2.5 text-cream">
          <FleurDeLis className="size-7 text-gold" />
          <span className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
            Roux&rsquo;s
          </span>
        </Link>

        <nav className="hidden items-center gap-4 xl:gap-7 lg:flex" aria-label="Primary">
          {NAV.map((item) =>
            item.to ? (
              <Link
                key={item.href}
                to={item.to}
                className="font-body text-sm font-medium text-cream/80 transition-colors duration-200 hover:text-gold"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.href}
                href={item.href}
                className="font-body text-sm font-medium text-cream/80 transition-colors duration-200 hover:text-gold"
              >
                {item.label}
              </a>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={LINKS.order}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center rounded-full bg-gold px-4 text-sm font-semibold text-plum-deep transition-transform duration-150 hover:bg-gold-light active:scale-[0.96] sm:px-5"
          >
            Order Now
          </a>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full text-cream lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className={cn(
          "border-t border-gold/20 bg-plum-deep lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav className="flex flex-col px-6 py-6" aria-label="Mobile">
          {NAV.map((item) =>
            item.to ? (
              <Link
                key={item.href}
                to={item.to}
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center border-b border-cream/10 font-display text-2xl text-cream"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center border-b border-cream/10 font-display text-2xl text-cream"
              >
                {item.label}
              </a>
            ),
          )}
          <a
            href={LINKS.truck}
            className="mt-5 inline-flex min-h-12 items-center justify-center rounded-full border border-gold text-gold"
          >
            Book the Food Truck
          </a>
        </nav>
      </div>
    </header>
  );
}
