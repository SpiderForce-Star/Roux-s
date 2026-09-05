import { Clock, MapPin, Phone, Truck, Mail } from "lucide-react";
import { HOURS_ROWS, LINKS, PLACE } from "@/data/restaurant";

export function Visit() {
  return (
    <section id="visit" className="bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.22em] text-plum-mid uppercase">
            Downtown Gallatin
          </p>
          <h2 className="mt-3 font-display text-4xl text-plum sm:text-5xl">
            Come sit down. Or we&rsquo;ll come to you.
          </h2>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-xl">
            <a
              href={LINKS.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block min-h-80 overflow-hidden"
            >
              <img
                src="/images/hero.jpg"
                alt="Downtown Gallatin — Roux's Creole Cafe at 170 North Water Avenue"
                className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-plum-deep/50" />
              <div className="relative flex min-h-80 flex-col justify-end p-6">
                <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">
                  Find us
                </p>
                <p className="mt-2 font-display text-3xl text-cream sm:text-4xl">
                  170 North Water Avenue
                </p>
                <p className="mt-1 text-cream/80">Gallatin, Tennessee 37066</p>
                <span className="mt-4 inline-flex min-h-11 w-fit items-center rounded-full bg-gold px-5 text-sm font-semibold text-plum-deep">
                  Open in Google Maps
                </span>
              </div>
            </a>
          </div>

          <div className="rounded-xl bg-paper p-6 sm:p-8">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 size-5 text-gold" aria-hidden="true" />
              <div>
                <p className="font-display text-2xl text-plum">{PLACE.name}</p>
                <p className="text-muted">
                  {PLACE.street}
                  <br />
                  {PLACE.city}
                </p>
                <a
                  href={LINKS.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm font-medium text-plum underline-offset-2 hover:underline"
                >
                  Get directions
                </a>
              </div>
            </div>

            <div className="mt-8 flex items-start gap-3">
              <Clock className="mt-1 size-5 text-gold" aria-hidden="true" />
              <div className="flex-1">
                <p className="font-medium text-plum">Hours</p>
                <ul className="mt-3 space-y-2">
                  {HOURS_ROWS.map((row) => (
                    <li
                      key={row.days}
                      className="flex flex-col gap-0.5 border-b border-cream-dark py-2 sm:flex-row sm:justify-between"
                    >
                      <span className="text-ink">{row.days}</span>
                      <span className="text-muted">{row.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <a
                href={LINKS.phone}
                className="flex min-h-14 items-center gap-3 rounded-lg bg-plum px-4 text-cream"
              >
                <Phone className="size-4 text-gold" aria-hidden="true" />
                <span>
                  <span className="block text-xs tracking-wide text-cream/60 uppercase">
                    Restaurant
                  </span>
                  {PLACE.phoneDisplay}
                </span>
              </a>
              <a
                href={LINKS.truck}
                className="flex min-h-14 items-center gap-3 rounded-lg bg-plum px-4 text-cream"
              >
                <Truck className="size-4 text-gold" aria-hidden="true" />
                <span>
                  <span className="block text-xs tracking-wide text-cream/60 uppercase">
                    Food truck
                  </span>
                  {PLACE.truckDisplay}
                </span>
              </a>
            </div>

            <a
              href={LINKS.email}
              className="mt-4 flex min-h-12 items-center gap-3 text-sm text-plum"
            >
              <Mail className="size-4 text-gold" aria-hidden="true" />
              info@rouxscreolecafe.com
            </a>
          </div>
        </div>

        <div className="mt-10 rounded-xl border border-cream-dark bg-paper p-6 sm:p-8">
          <h3 className="font-display text-2xl text-plum">How to order</h3>
          <ol className="mt-5 grid gap-6 sm:grid-cols-3">
            <li>
              <p className="font-display text-3xl text-gold">01</p>
              <p className="mt-2 font-medium text-ink">Choose Toast first</p>
              <p className="mt-1 text-sm text-muted">
                Pickup or delivery at the Order Now button. Toast is
                commission-light, so more of the check stays with the kitchen.
              </p>
            </li>
            <li>
              <p className="font-display text-3xl text-gold">02</p>
              <p className="mt-2 font-medium text-ink">Or walk in</p>
              <p className="mt-1 text-sm text-muted">
                Order at the counter on Water Avenue. No host stand, no
                assigned sections — the whole family runs the room.
              </p>
            </li>
            <li>
              <p className="font-display text-3xl text-gold">03</p>
              <p className="mt-2 font-medium text-ink">Join Roux&rsquo;s Rewards</p>
              <p className="mt-1 text-sm text-muted">
                Sign up at checkout. Happy Hour Abita pours earn tokens toward
                drinks, beignets, and discounts.
              </p>
            </li>
          </ol>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={LINKS.order}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center rounded-full bg-plum px-5 text-sm font-semibold text-cream"
            >
              Order on Toast
            </a>
            <a
              href={LINKS.giftCards}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center rounded-full border border-plum px-5 text-sm font-semibold text-plum"
            >
              Buy a gift card
            </a>
            <a
              href={LINKS.doordash}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center text-sm text-muted underline-offset-2 hover:underline"
            >
              DoorDash
            </a>
            <a
              href={LINKS.grubhub}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center text-sm text-muted underline-offset-2 hover:underline"
            >
              Grubhub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
