import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import beer from "@/assets/pariah/beer.jpg";
import burger from "@/assets/pariah/burger.jpg";
import chicken from "@/assets/pariah/chicken-and-chips.jpg";
import chips from "@/assets/pariah/chips.jpg";
import coffee2 from "@/assets/pariah/coffee-2.jpg";
import coffee from "@/assets/pariah/coffee.jpg";
import salad from "@/assets/pariah/salad.jpg";
import steaks from "@/assets/pariah/steaks.jpg";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu - Pariah State ZW" },
      {
        name: "description",
        content:
          "Flame-grilled steaks, wood-fired pizzas, signature burgers and craft drinks at Pariah State ZW in Avondale, Harare.",
      },
    ],
  }),
  component: MenuPage,
});

type Section = {
  title: string;
  subtitle: string;
  items: { name: string; desc: string; price: string; img?: string }[];
};

const SECTIONS: Section[] = [
  {
    title: "From the Grill",
    subtitle: "Open-flame, prime cuts, finished with house butter",
    items: [
      {
        name: "Rump Steak 300g",
        desc: "Hand-cut chips, chimichurri, charred onion",
        price: "$22",
        img: steaks,
      },
      {
        name: "Grid Iron Burger",
        desc: "Smashed patty, smoked gouda, brioche, secret sauce",
        price: "$10",
        img: burger,
      },
      {
        name: "Flame Chicken & Chips",
        desc: "Slow-roasted half chicken, peri-peri glaze",
        price: "$12",
        img: chicken,
      },
      {
        name: "Tender BBQ Ribs",
        desc: "Slow-braised pork ribs, sticky bourbon glaze",
        price: "$18",
      },
    ],
  },
  {
    title: "From the Garden",
    subtitle: "Bright plates, locally grown, made to share",
    items: [
      {
        name: "Treehouse Salad",
        desc: "Heirloom greens, citrus, candied pecans",
        price: "$8",
        img: salad,
      },
      {
        name: "Hand-Cut Chips",
        desc: "Triple-cooked, rosemary salt, aioli",
        price: "$5",
        img: chips,
      },
      {
        name: "Wood-Fired Margherita",
        desc: "San Marzano, fior di latte, basil",
        price: "$11",
      },
      {
        name: "Sadza Bowl",
        desc: "Slow-stewed beef, greens, peanut crumb",
        price: "$9",
      },
    ],
  },
  {
    title: "Bar & Cellar",
    subtitle: "Curated wines, craft beer and signature cocktails",
    items: [
      {
        name: "Avondale Old Fashioned",
        desc: "Bourbon, smoked sugar, orange peel",
        price: "$8",
        img: coffee2,
      },
      {
        name: "Treehouse Spritz",
        desc: "Aperol, sparkling rose, citrus",
        price: "$7",
        img: beer,
      },
      {
        name: "House Espresso",
        desc: "Locally roasted, single origin",
        price: "$3",
        img: coffee,
      },
      {
        name: "Cellar Red - Glass",
        desc: "Stellenbosch shiraz, full-bodied",
        price: "$6",
      },
    ],
  },
];

function MenuPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageHero
        eyebrow="The Menu"
        title="Crafted to Delight"
        subtitle="A celebration of fire, garden and cellar"
        image={steaks}
      />

      <section className="py-20">
        <div className="mx-auto max-w-6xl space-y-24 px-6">
          {SECTIONS.map((section) => (
            <div key={section.title}>
              <div className="text-center">
                <p className="text-xs uppercase tracking-eyebrow text-gold">
                  {section.title}
                </p>
                <h2 className="mt-3 font-display text-4xl text-foreground">{section.title}</h2>
                <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
                  {section.subtitle}
                </p>
              </div>

              <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
                {section.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex gap-5 border-b border-foreground/10 pb-6"
                  >
                    {item.img && (
                      <img
                        src={item.img}
                        alt={item.name}
                        className="h-20 w-20 flex-none object-cover"
                      />
                    )}
                    <div className="flex-1">
                      <div className="flex items-baseline justify-between gap-3">
                        <h3 className="font-display text-xl text-foreground">{item.name}</h3>
                        <span className="font-display text-lg text-gold">
                          {item.price}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
