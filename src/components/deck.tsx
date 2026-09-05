const FACTS = [
  {
    title: "Upper deck",
    body: "Covered. Ceiling fans, TVs, string lights. Stay dry, catch the game.",
  },
  {
    title: "Lower deck",
    body: "Open-air with umbrellas. Shade, a breeze, and a view of the lot you just parked in.",
  },
  {
    title: "Parking",
    body: "The Water Avenue curb is short. Drive around back. The lot sits under the deck.",
  },
];

export function Deck() {
  return (
    <section id="deck" className="bg-paper py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.22em] text-plum-mid uppercase">
            Out back
          </p>
          <h2 className="mt-3 font-display text-4xl text-plum sm:text-5xl">
            Park in the rear. Two decks. Stay awhile.
          </h2>
          <p className="mt-4 text-muted">
            Street parking on Water Avenue is tight. Come around back — that is
            the lot, and that is the patio. Eat, hang out, catch the game, or
            stand around a crawfish pot when the weather is right.
          </p>
        </div>

        <ul className="mt-8 grid gap-4 sm:grid-cols-3">
          {FACTS.map((fact) => (
            <li key={fact.title} className="rounded-xl bg-cream px-5 py-4">
              <p className="font-display text-2xl text-plum">{fact.title}</p>
              <p className="mt-1 text-sm text-muted">{fact.body}</p>
            </li>
          ))}
        </ul>

        <figure className="mt-10 overflow-hidden rounded-xl">
          <img
            src="/images/deck-upper.jpg"
            alt="Covered upper deck at Roux's looking out over the lot — tables, TVs, fans, and the open-air umbrellas below"
            className="aspect-video w-full object-cover object-center"
          />
          <figcaption className="mt-3 text-sm text-muted">
            Upper deck, looking out. TVs and fans under the roof. Red umbrellas
            mark the open-air level below.
          </figcaption>
        </figure>

        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <figure className="overflow-hidden rounded-xl">
            <img
              src="/images/deck-lights.jpg"
              alt="String lights, ceiling fan, and stone wall on the covered upper deck"
              className="aspect-photo w-full object-cover"
            />
            <figcaption className="mt-3 text-sm text-muted">
              Same roof, other way. Lights, a fan, the stone wall. This is
              where you sit when you want the shade.
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
