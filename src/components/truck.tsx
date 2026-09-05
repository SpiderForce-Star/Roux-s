import { useState, type FormEvent } from "react";
import { LINKS } from "@/data/restaurant";

const TRUCK_MENU = [
  "Po'boys",
  "Shrimp gumbo",
  "Crawfish étouffée",
  "Bread pudding",
  "Beignets",
];

export function Truck() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const date = String(data.get("date") ?? "").trim();
    const notes = String(data.get("notes") ?? "").trim();
    const subject = encodeURIComponent("Food truck booking — Roux's Creole Cafe");
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nDate / event: ${date}\nDetails: ${notes}\n\nSent from the Roux's website.`,
    );
    window.location.href = `${LINKS.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="truck" className="bg-plum-deep py-20 text-cream sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div className="overflow-hidden rounded-xl">
          <img
            src="/images/food-truck.jpg"
            alt="Roux's Creole Cafe purple food trailer with gold lettering — Super Fresh, Super Fast"
            className="aspect-video w-full object-cover object-[center_60%]"
          />
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.22em] text-gold uppercase">
            Across Middle Tennessee
          </p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">
            Book the food truck
          </h2>
          <p className="mt-4 text-cream/75">
            Private parties, festivals, corporate lunches, tailgates. The truck
            rolls the same from-scratch cooking as the cafe.
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {TRUCK_MENU.map((item) => (
              <li
                key={item}
                className="rounded-full border border-gold/30 px-3 py-1 text-sm text-gold"
              >
                {item}
              </li>
            ))}
          </ul>

          <ol className="mt-8 space-y-3 text-sm text-cream/80">
            <li>
              <span className="mr-2 font-display text-lg text-gold">1.</span>
              Call or text{" "}
              <a href={LINKS.truck} className="text-gold underline-offset-2 hover:underline">
                (615) 428-4887
              </a>
              , or send the form.
            </li>
            <li>
              <span className="mr-2 font-display text-lg text-gold">2.</span>
              Tell us the date, headcount, and whether you want the full spread
              or a short po&rsquo;boy line.
            </li>
            <li>
              <span className="mr-2 font-display text-lg text-gold">3.</span>
              We confirm, roll up, and serve it hot.
            </li>
          </ol>

          <form onSubmit={onSubmit} className="mt-8 grid gap-3 sm:grid-cols-2">
            <label className="block text-sm">
              <span className="mb-1.5 block text-cream/70">Name</span>
              <input
                name="name"
                required
                autoComplete="name"
                className="min-h-11 w-full rounded-md border border-gold/25 bg-plum px-3 text-cream outline-none placeholder:text-cream/35"
              />
            </label>
            <label className="block text-sm">
              <span className="mb-1.5 block text-cream/70">Phone</span>
              <input
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                className="min-h-11 w-full rounded-md border border-gold/25 bg-plum px-3 text-cream outline-none"
              />
            </label>
            <label className="block text-sm sm:col-span-2">
              <span className="mb-1.5 block text-cream/70">Date & event</span>
              <input
                name="date"
                required
                placeholder="Saturday wedding, 80 guests"
                className="min-h-11 w-full rounded-md border border-gold/25 bg-plum px-3 text-cream outline-none placeholder:text-cream/35"
              />
            </label>
            <label className="block text-sm sm:col-span-2">
              <span className="mb-1.5 block text-cream/70">Notes</span>
              <textarea
                name="notes"
                rows={3}
                className="w-full rounded-md border border-gold/25 bg-plum px-3 py-2 text-cream outline-none"
              />
            </label>
            <div className="flex flex-col gap-2 sm:col-span-2 sm:flex-row sm:items-center">
              <button
                type="submit"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-gold px-6 font-semibold text-plum-deep transition-transform duration-150 hover:bg-gold-light active:scale-[0.96]"
              >
                Send booking request
              </button>
              {sent ? (
                <p className="text-sm text-gold">
                  Your mail app should open — if not, call the truck line.
                </p>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
