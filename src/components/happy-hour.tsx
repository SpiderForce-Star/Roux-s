import { HAPPY_HOUR_DEALS, LINKS } from "@/data/restaurant";
import { FleurDeLis } from "./marks";

export function HappyHour() {
  return (
    <section
      id="happy-hour"
      className="relative overflow-hidden bg-plum py-20 text-cream sm:py-24"
    >
      <div className="fleur-watermark pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="flex items-center gap-3">
              <FleurDeLis className="size-7 text-gold" />
              <p className="text-xs font-semibold tracking-[0.22em] text-gold uppercase">
                Every day
              </p>
            </div>
            <h2 className="mt-4 font-display text-5xl sm:text-6xl">
              Happy Hour
              <span className="mt-2 block font-script text-4xl text-gold sm:text-5xl">
                3 to 6
              </span>
            </h2>
            <p className="mt-5 max-w-md text-cream/75">
              The room slows down, Abita starts pouring two-for-one, and the
              appetizers drop two dollars. Bring a friend. Stay for beignets.
            </p>
            <a
              href={LINKS.order}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex min-h-12 items-center rounded-full bg-gold px-6 font-semibold text-plum-deep transition-transform duration-150 hover:bg-gold-light active:scale-[0.96]"
            >
              Order for Happy Hour
            </a>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {HAPPY_HOUR_DEALS.map((deal) => (
              <li
                key={deal.title}
                className="rounded-xl border border-gold/25 bg-plum-deep/50 p-5"
              >
                <p className="font-display text-2xl text-gold">{deal.title}</p>
                <p className="mt-2 text-sm text-cream/70">{deal.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
