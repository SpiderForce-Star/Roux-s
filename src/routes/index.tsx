import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Featured } from "@/components/featured";
import { MenuSection } from "@/components/menu-section";
import { Story } from "@/components/story";
import { HappyHour } from "@/components/happy-hour";
import { Truck } from "@/components/truck";
import { Deck } from "@/components/deck";
import { Visit } from "@/components/visit";
import { Footer } from "@/components/footer";
import { LINKS, PLACE } from "@/data/restaurant";

export const Route = createFileRoute("/")({ component: Home });

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: PLACE.name,
  image: "/images/hero.jpg",
  servesCuisine: ["Creole", "Cajun", "New Orleans"],
  priceRange: "$$",
  telephone: "+16154516961",
  address: {
    "@type": "PostalAddress",
    streetAddress: PLACE.street,
    addressLocality: "Gallatin",
    addressRegion: "TN",
    postalCode: "37066",
    addressCountry: "US",
  },
  url: "https://rouxscreolecafe.com",
  menu: LINKS.order,
  acceptsReservations: "False",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Sunday"],
      opens: "11:00",
      closes: "19:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday", "Saturday"],
      opens: "11:00",
      closes: "20:30",
    },
  ],
};

function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main id="main">
        <Hero />
        <Featured />
        <MenuSection />
        <Story />
        <HappyHour />
        <Truck />
        <Deck />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
