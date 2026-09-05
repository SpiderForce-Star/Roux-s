export function Deck() {
  return (
    <section id="deck" className="bg-paper py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.22em] text-plum-mid uppercase">
            Out back
          </p>
          <h2 className="mt-3 font-display text-4xl text-plum sm:text-5xl">
            Park in the rear. The deck is waiting.
          </h2>
          <p className="mt-4 text-muted">
            Street parking on Water Avenue is tight. Drive around back. That is
            where the lot is — and where the covered deck sits. Roof, fans,
            string lights, a little music. Eat out there. Crawfish when the
            weather is right.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <figure className="overflow-hidden rounded-xl">
            <img
              src="/images/deck.jpg"
              alt="Covered back deck at Roux's — tables, string lights, and a roof"
              className="aspect-photo w-full object-cover"
            />
            <figcaption className="mt-3 text-sm text-muted">
              Covered deck. Fans. Music. Your po&rsquo;boy does not have to eat
              inside.
            </figcaption>
          </figure>
          <figure className="overflow-hidden rounded-xl">
            <img
              src="/images/deck-boil.jpg"
              alt="Crawfish boil on the back deck at Roux's Creole Cafe"
              className="aspect-photo w-full object-cover object-center"
            />
            <figcaption className="mt-3 text-sm text-muted">
              When the pots come out, this is where Gallatin stands around them.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
