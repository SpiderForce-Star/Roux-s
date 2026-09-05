import { useEffect, useRef, useState } from "react";
import { MapPin, Clock } from "lucide-react";
import { LINKS, PLACE } from "@/data/restaurant";
import { getHouseStatus } from "@/lib/hours";
import { FleurDeLis } from "./marks";

export function Hero() {
  const [status, setStatus] = useState(() => getHouseStatus());
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const id = window.setInterval(() => setStatus(getHouseStatus()), 60_000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      if (mq.matches) {
        video.pause();
        video.classList.add("hidden");
      } else {
        video.classList.remove("hidden");
        video.play().catch(() => {});
      }
    };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  return (
    <section
      id="top"
      className="relative isolate flex min-h-svh items-end overflow-hidden bg-plum-deep text-cream"
    >
      <img
        src="/images/hero.jpg"
        alt=""
        className="absolute inset-0 size-full object-cover object-center"
      />
      <video
        ref={videoRef}
        className="hero-video absolute inset-0 size-full object-cover object-center"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/hero.jpg"
        aria-hidden="true"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      <div className="hero-scrim absolute inset-0" aria-hidden="true" />
      <div className="hero-vignette absolute inset-0" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-7 pt-20 sm:px-6 sm:pb-16 sm:pt-28 lg:pb-24">
        <p className="rise-in mb-5 inline-flex items-center gap-2 rounded-full border border-gold/35 bg-plum-deep/40 px-3 py-1.5 text-kicker font-semibold tracking-[0.22em] text-gold uppercase">
          <span
            className={`size-1.5 rounded-full ${status.open ? "bg-gold" : "bg-cream/50"}`}
            aria-hidden="true"
          />
          {status.label}
        </p>

        <div className="rise-in max-w-3xl" style={{ animationDelay: "80ms" }}>
          <h1 className="font-display text-hero leading-[0.82] font-semibold tracking-tight text-cream">
            Roux&rsquo;s
          </h1>
          <div className="mt-1 mb-3 flex items-center gap-4 sm:mb-4">
            <span className="h-px max-w-16 flex-1 bg-gold/70" />
            <FleurDeLis className="size-8 text-gold sm:size-12" />
            <span className="h-px max-w-28 flex-1 bg-gold/70" />
          </div>
          <p className="font-script text-script-lg leading-none text-gold">
            Creole Cafe
          </p>
        </div>

        <p
          className="rise-in mt-4 max-w-xl text-base text-cream/85 sm:mt-7 sm:text-xl"
          style={{ animationDelay: "160ms" }}
        >
          From-scratch Creole cooking in downtown Gallatin.
          <span className="hidden sm:inline">
            {" "}
            Po&rsquo;boys on Leidenheimer bread, dark-roux gumbo, crawfish
            étouffée, and beignets fried to order.
          </span>
        </p>

        <div
          className="rise-in mt-5 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center"
          style={{ animationDelay: "220ms" }}
        >
          <a
            href={LINKS.order}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-gold px-7 text-base font-semibold text-plum-deep transition-transform duration-150 hover:bg-gold-light active:scale-[0.96]"
          >
            Order pickup or delivery
          </a>
          <a
            href="#menu"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-cream/35 px-7 text-base font-medium text-cream transition-colors duration-200 hover:border-gold hover:text-gold"
          >
            See the menu
          </a>
        </div>

        <dl
          className="rise-in mt-5 flex flex-col gap-2 text-sm text-cream/80 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8"
          style={{ animationDelay: "280ms" }}
        >
          <div className="flex items-center gap-2">
            <MapPin className="size-4 shrink-0 text-gold" aria-hidden="true" />
            <dt className="sr-only">Address</dt>
            <dd>
              {PLACE.street}, {PLACE.city}
              <span className="mx-2 text-gold/70">·</span>
              <span className="font-medium text-gold">Parking in the rear</span>
            </dd>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="size-4 shrink-0 text-gold" aria-hidden="true" />
            <dt className="sr-only">Happy Hour</dt>
            <dd>Happy Hour daily 3–6 PM</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
