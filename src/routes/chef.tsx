import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/header";
import { ChefPage } from "@/components/chef-page";
import { Footer } from "@/components/footer";

export const Route = createFileRoute("/chef")({
  component: Chef,
  head: () => ({
    meta: [
      { title: "Chef James Lampley | Roux's Creole Cafe" },
      {
        name: "description",
        content:
          "Chef James Lampley — born and raised in Gallatin, trained at the New England Culinary Institute and in Switzerland, cooked in Europe, Virginia, and Nashville.",
      },
    ],
  }),
});

function Chef() {
  return (
    <>
      <Header solid />
      <main id="main">
        <ChefPage />
      </main>
      <Footer />
    </>
  );
}
