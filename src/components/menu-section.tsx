import { useState } from "react";
import { LINKS, MENU } from "@/data/restaurant";
import { cn } from "@/lib/utils";

export function MenuSection() {
  const [active, setActive] = useState(MENU[0]!.id);
  const group = MENU.find((g) => g.id === active) ?? MENU[0]!;

  return (
    <section id="menu" className="bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.22em] text-plum-mid uppercase">
            The menu
          </p>
          <h2 className="mt-3 font-display text-4xl text-plum sm:text-5xl">
            Super fresh. Super fast. From scratch.
          </h2>
          <p className="mt-4 text-muted">
            Dried beans and ham hocks. Leidenheimer bread. Gulf oysters flown in
            weekly. Chef James does not take shortcuts — and the pots show it.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Menu categories"
          className="mt-10 flex gap-2 overflow-x-auto pb-2 hide-scrollbar"
        >
          {MENU.map((g) => {
            const selected = g.id === active;
            return (
              <button
                key={g.id}
                type="button"
                role="tab"
                aria-selected={selected}
                id={`tab-${g.id}`}
                aria-controls={`panel-${g.id}`}
                onClick={() => setActive(g.id)}
                className={cn(
                  "min-h-11 shrink-0 rounded-full px-4 text-sm font-medium transition-colors duration-200",
                  selected
                    ? "bg-plum text-cream"
                    : "bg-cream-dark/60 text-plum hover:bg-cream-dark",
                )}
              >
                {g.label}
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          id={`panel-${group.id}`}
          aria-labelledby={`tab-${group.id}`}
          className="mt-8 rounded-xl border border-cream-dark bg-paper p-5 sm:p-8"
        >
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <h3 className="font-display text-3xl text-plum">{group.label}</h3>
            {group.intro ? (
              <p className="max-w-md text-sm text-muted">{group.intro}</p>
            ) : null}
          </div>
          <ul className="divide-y divide-cream-dark">
            {group.items.map((item) => (
              <li
                key={item.name}
                className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-1 py-4"
              >
                <p className="font-medium text-ink">
                  {item.name}
                  {item.featured ? (
                    <span className="ml-2 align-middle text-micro font-semibold tracking-[0.14em] text-plum-mid uppercase">
                      House favorite
                    </span>
                  ) : null}
                </p>
                <p className="font-display text-lg text-plum">{item.price}</p>
                {item.note ? (
                  <p className="col-span-2 text-sm text-muted">{item.note}</p>
                ) : null}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={LINKS.order}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-plum px-7 font-semibold text-cream transition-transform duration-150 hover:bg-plum-mid active:scale-[0.96] sm:w-auto"
          >
            Order the full menu
          </a>
          <p className="text-center text-sm text-muted">
            Pickup and delivery through Toast — more of your dollar stays in
            Gallatin.
          </p>
        </div>
      </div>
    </section>
  );
}
