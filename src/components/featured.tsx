import { FEATURED } from "@/data/restaurant";

export function Featured() {
  return (
    <section
      aria-labelledby="featured-heading"
      className="bg-plum-deep py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] text-gold uppercase">
              From the kitchen
            </p>
            <h2
              id="featured-heading"
              className="mt-2 font-display text-4xl text-cream sm:text-5xl"
            >
              A few of our favorites
            </h2>
          </div>
          <p className="max-w-sm text-sm text-cream/65">
            Our customers love them. These are the plates Gallatin comes back
            for — top sellers, cooked the same way every time.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED.map((dish) => (
            <li
              key={dish.name}
              className="group overflow-hidden rounded-xl bg-plum"
            >
              <div className="aspect-photo overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="size-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex items-start justify-between gap-3 p-4">
                <div>
                  <p className="font-display text-xl text-cream">{dish.name}</p>
                  <p className="mt-1 text-sm text-cream/60">{dish.caption}</p>
                </div>
                <p className="shrink-0 font-medium text-gold">{dish.price}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
