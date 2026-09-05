import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { FleurDeLis } from "./marks";

const LORE = [
  {
    title: "The muffuletta",
    image: "/images/muffuletta.jpg",
    body: "Salvatore Lupo built it at Central Grocery in 1906. Round sesame bread, ham, salami, mortadella, provolone, mozzarella, and a flood of olive salad. The bread has to stay crusty under all that oil — which is why we insist on Leidenheimer.",
  },
  {
    title: "The po'boy",
    image: "/images/debris.jpg",
    body: "In the late 1920s, Benny and Clovis Martin fed striking streetcar conductors for free. When another one walked in: “Here comes another poor boy.” Debris — slow roast beef in brown gravy — is the original. Dressed means lettuce, tomato, and mayonnaise. Always on Leidenheimer, “good to the last crumb” since 1896.",
  },
  {
    title: "The beignet",
    image: "/images/beignets.jpg",
    body: "French for fritter, with roots that run to the 16th century. Ours are made in-house and fried to order — a rare thing in Middle Tennessee, and the dish that took off the week we opened. Powdered sugar is not optional.",
  },
];

export function Story() {
  const [open, setOpen] = useState(0);

  return (
    <section id="story" className="bg-paper py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          <p className="text-xs font-semibold tracking-[0.22em] text-plum-mid uppercase">
            Downtown Gallatin
          </p>
          <h2 className="mt-3 font-display text-4xl text-plum sm:text-5xl">
            Opened on Mardi Gras. Cooked like it is still New Orleans.
          </h2>
          <div className="mt-6 space-y-4 text-muted">
            <p>
              Roux&rsquo;s is a family cafe on Water Avenue. Chef James Lampley
              — born and raised in Gallatin — turned this room into a Creole
              kitchen and has kept it that way: everything from scratch, no
              shortcuts.
            </p>
            <p>
              “We&rsquo;re not taking shortcuts. We make everything from
              scratch — dried beans, ham hocks, the whole nine yards.” The
              recipes lean on books that go back to the mid-1800s, including an
              1830s church-cookbook bread pudding with a bourbon glaze. Creole,
              as James tells it, is the country&rsquo;s only true regional
              cuisine: urban New Orleans cooking, French, Spanish, African, and
              Caribbean in the same pot.
            </p>
            <p>
              Eddie Pollard runs operations. Sofia Goodall is the beignet queen
              and bread-pudding specialist. The kids can do it all. You order at
              the counter. The whole house takes care of you.
            </p>
          </div>
          <p className="mt-6">
            <Link
              to="/chef"
              className="font-semibold text-plum underline decoration-gold decoration-2 underline-offset-4 hover:text-plum-mid"
            >
              Meet Chef James Lampley →
            </Link>
          </p>
          <blockquote className="mt-8 border-l-2 border-gold pl-5">
            <p className="font-display text-2xl text-plum italic">
              “The rich traditions and vibrant flavors of Creole cuisine
              captivated us.”
            </p>
            <footer className="mt-2 text-sm text-muted">— Chef James Lampley</footer>
          </blockquote>
        </div>

        <div>
          <div className="mb-4 flex items-center gap-3 text-plum">
            <FleurDeLis className="size-5 text-gold" />
            <p className="text-xs font-semibold tracking-[0.2em] uppercase">
              A little history with supper
            </p>
          </div>
          <div className="overflow-hidden rounded-xl">
            <img
              src={LORE[open]!.image}
              alt=""
              className="aspect-photo w-full object-cover"
            />
          </div>
          <ul className="mt-4 space-y-2">
            {LORE.map((item, i) => {
              const selected = i === open;
              return (
                <li key={item.title}>
                  <button
                    type="button"
                    onClick={() => setOpen(i)}
                    className={cn(
                      "w-full rounded-lg px-4 py-3 text-left transition-colors duration-200",
                      selected ? "bg-plum text-cream" : "bg-cream text-plum hover:bg-cream-dark",
                    )}
                    aria-expanded={selected}
                  >
                    <span className="font-display text-xl">{item.title}</span>
                    {selected ? (
                      <span className="mt-2 block text-sm text-cream/75">
                        {item.body}
                      </span>
                    ) : null}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
