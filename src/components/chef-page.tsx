import { FleurDeLis } from "./marks";

const CREDENTIALS = [
  "Gallatin, TN",
  "New England Culinary Institute",
  "Switzerland — chocolate & pastry",
  "Europe · Virginia · Nashville",
];

export function ChefPage() {
  return (
    <section className="bg-paper pt-28 pb-20 sm:pt-32 sm:pb-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          <p className="text-xs font-semibold tracking-[0.22em] text-plum-mid uppercase">
            Chef James Lampley
          </p>
          <h1 className="mt-3 font-display text-4xl text-plum sm:text-5xl">
            Born in Gallatin. Trained across the water. Cooks like home.
          </h1>
          <div className="mt-6 space-y-4 text-muted">
            <p>
              Chef James Lampley is born and raised in Gallatin, Tennessee. He
              left town long enough to learn the craft, then brought it back to
              Water Avenue.
            </p>
            <p>
              He started as a sous chef at 18. He earned his degree at the New
              England Culinary Institute — A.O.S. Culinary Arts and B.S.
              Hotel/Restaurant Management — then took a second degree in
              chocolate and pastries in Switzerland. Stages and service followed
              in Italy, France, Germany, and Monte Carlo.
            </p>
            <p>
              The résumé is quiet on purpose. James has cooked in five-star and
              top-class kitchens across Europe, Virginia, and Nashville. He does
              not make a speech about it. The plate does.
            </p>
            <p>
              Creole is the through-line: urban New Orleans cooking held in one
              pot — French, Spanish, African, Caribbean — dried beans and ham
              hocks, Leidenheimer bread, an 1830s church-cookbook pudding with a
              bourbon glaze. No shortcuts. The whole nine yards.
            </p>
          </div>
          <ul className="mt-6 flex flex-wrap gap-2">
            {CREDENTIALS.map((item) => (
              <li
                key={item}
                className="rounded-full border border-plum/15 bg-cream px-3 py-1 text-sm text-plum"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8">
            <a
              href="/#story"
              className="font-semibold text-plum underline decoration-gold decoration-2 underline-offset-4 hover:text-plum-mid"
            >
              Back to the cafe →
            </a>
          </p>
          <blockquote className="mt-8 border-l-2 border-gold pl-5">
            <p className="font-display text-2xl text-plum italic">
              “We&rsquo;re not taking shortcuts. We make everything from
              scratch.”
            </p>
            <footer className="mt-2 text-sm text-muted">— Chef James Lampley</footer>
          </blockquote>
        </div>

        <div>
          <div className="mb-4 flex items-center gap-3 text-plum">
            <FleurDeLis className="size-5 text-gold" />
            <p className="text-xs font-semibold tracking-[0.2em] uppercase">
              From the kitchen, not the stage
            </p>
          </div>
          <div className="overflow-hidden rounded-xl">
            <img
              src="/images/hero.jpg"
              alt="The Creole kitchen on Water Avenue"
              className="aspect-photo w-full object-cover"
            />
          </div>
          <p className="mt-2 mb-5 text-sm text-muted">
            Water Avenue, Gallatin — the room he turned into a Creole kitchen.
          </p>
          <div className="overflow-hidden rounded-xl">
            <img
              src="/images/bread-pudding.jpg"
              alt="Bourbon-glazed bread pudding"
              className="aspect-photo w-full object-cover"
            />
          </div>
          <p className="mt-2 mb-5 text-sm text-muted">
            The 1830s church-cookbook pudding. Switzerland taught the pastry
            hand. Gallatin gets the plate.
          </p>
          <div className="rounded-xl bg-plum p-6 text-cream">
            <p className="font-display text-2xl">What he actually cooks</p>
            <p className="mt-2 text-sm text-cream/80">
              Muffulettas on Leidenheimer. Debris and shrimp po&rsquo;boys.
              Gumbo. Crawfish étouffée. Beignets and that bourbon-glazed bread
              pudding. Order at the counter. He would rather you eat than read
              this page.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
