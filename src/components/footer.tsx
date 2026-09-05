import { LINKS, PLACE, BRANDS } from "@/data/restaurant";
import { FleurDeLis, WebbShield } from "./marks";

export function Footer() {
  return (
    <footer className="bg-plum-deep text-cream">
      <div className="border-b border-gold/15">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 py-8 text-xs tracking-[0.18em] text-cream/45 uppercase sm:px-6">
          <span className="text-gold/80">Proud to serve</span>
          {BRANDS.map((brand) => (
            <span key={brand}>{brand}</span>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <FleurDeLis className="size-7 text-gold" />
            <p className="font-display text-2xl">Roux&rsquo;s Creole Cafe</p>
          </div>
          <p className="mt-3 max-w-xs text-sm text-cream/65">
            From-scratch Creole cooking. Super fresh. Super fast. Gallatin,
            Tennessee.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">
            Visit
          </p>
          <p className="mt-3 text-sm text-cream/80">
            {PLACE.street}
            <br />
            {PLACE.city}
          </p>
          <p className="mt-3 text-sm">
            <a href={LINKS.phone} className="hover:text-gold">
              {PLACE.phoneDisplay}
            </a>
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">
            Follow
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href={LINKS.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                Facebook
              </a>
            </li>
            <li>
              <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                Instagram
              </a>
            </li>
            <li>
              <a href={LINKS.x} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                X
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gold/15">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6">
          <p className="text-xs text-cream/45">
            © {new Date().getFullYear()} Roux&rsquo;s Creole Cafe. All rights
            reserved.
          </p>
          <a
            href={LINKS.webb}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 rounded-md text-cream/80 transition-colors duration-200 hover:text-gold"
            aria-label="Built by Webb Spinner Visions — visit webbspinnervisions.net"
          >
            <WebbShield className="size-9" />
            <span className="text-left">
              <span className="block text-micro tracking-[0.18em] text-gold/80 uppercase">
                Built by
              </span>
              <span className="font-display text-base text-cream group-hover:text-gold">
                Webb Spinner Visions
              </span>
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
