import { createFileRoute, Link } from "@tanstack/react-router";
import { Flame, Star, UtensilsCrossed, Wine } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import beerImg from "@/assets/pariah/beer.jpg";
import burgerImg from "@/assets/pariah/burger.jpg";
import chickenImg from "@/assets/pariah/chicken-and-chips.jpg";
import insideImg from "@/assets/pariah/inside.jpg";
import restaurantView from "@/assets/pariah/restaurant-view.jpg";
import steaksImg from "@/assets/pariah/steaks.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pariah State ZW - Avondale's Treehouse Steakhouse" },
      {
        name: "description",
        content:
          "Flame-grilled steaks, wood-fired pizzas and candlelit nights in Avondale, Harare. Reserve your table at Pariah State ZW.",
      },
    ],
  }),
  component: Home,
});

const PILLARS = [
  {
    icon: Flame,
    title: "Flame Grilled",
    body: "Prime cuts seared over open flame, finished with chimichurri and house butter.",
  },
  {
    icon: UtensilsCrossed,
    title: "Wood-Fired Kitchen",
    body: "Hand-stretched pizzas, slow-roasted chicken and signature grab-inns.",
  },
  {
    icon: Wine,
    title: "Cellar & Cocktails",
    body: "A curated wine list and exotic cocktails poured from a candlelit bar.",
  },
];

const SIGNATURE_DISHES = [
  {
    img: steaksImg,
    name: "Rump Steak 300g",
    desc: "Flame-grilled, chimichurri, hand-cut chips",
    price: "$22",
  },
  {
    img: burgerImg,
    name: "Grid Iron Burger",
    desc: "Brioche, smashed patty, smoked gouda",
    price: "$10",
  },
  {
    img: chickenImg,
    name: "Flame Chicken & Chips",
    desc: "Slow-roasted, peri-peri glaze",
    price: "$12",
  },
];

const REVIEWS = [
  {
    name: "Andy Ceaser - 3 months ago",
    quote: "Lovely atmosphere, prices a bit high but the music was good.",
  },
  {
    name: "Tinotenda Kurwaisimba - 3 months ago",
    quote:
      "Went on a cold night and sadly the open doors posed a slight chill. Food was good especially the burgers. Drinks were pouring and the staff was quite accommodating too. Won't mind heading back there sometime.",
  },
  {
    name: "Joe Ruzvidzo - 6 months ago",
    quote:
      "I love the outdoor dining under the stars. The cocktails are amazing and the staff so warm.",
  },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
        <img
          src={steaksImg}
          alt="Flame-grilled steak at Pariah State"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay-dark" />
        <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-6 text-center text-foreground">
          <p className="mb-6 text-xs uppercase tracking-eyebrow text-gold">
            Avondale - Harare - Est. 2015
          </p>
          <h1 className="font-display text-5xl leading-tight sm:text-6xl md:text-7xl">
            An Extraordinary
            <br />
            Dining Experience
          </h1>
          <div className="my-8 flex items-center justify-center text-gold/80">
            <span className="h-px w-16 bg-gold/60" />
            <Star className="mx-3 h-3 w-3 fill-gold text-gold" />
            <Star className="mx-1 h-3 w-3 fill-gold text-gold" />
            <Star className="mx-3 h-3 w-3 fill-gold text-gold" />
            <span className="h-px w-16 bg-gold/60" />
          </div>
          <p className="max-w-xl text-sm uppercase tracking-[0.3em] text-foreground/80">
            The finest prime steak. Exquisite wines. Genuine service.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/menu"
              className="rounded-none border border-gold px-8 py-3 text-xs uppercase tracking-eyebrow text-gold transition-colors hover:bg-gold hover:text-gold-foreground"
            >
              Discover Menus
            </Link>
            <Link
              to="/reserve"
              className="rounded-none bg-gold px-8 py-3 text-xs uppercase tracking-eyebrow text-gold-foreground transition-opacity hover:opacity-90"
            >
              Reserve a Table
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-surface py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-eyebrow text-gold">
              Our Heritage
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
              A Treehouse <br /> Steakhouse in Harare
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Pariah State ZW is a beloved landmark in the heart of Avondale,
              rooted in classic tradition, dressed in warm timber and glowing
              lanterns. We provide guests with an elegant, vibrant dining
              atmosphere, award-winning cuisine and impeccable wines, making
              every meal an unforgettable experience.
            </p>
            <Link
              to="/menu"
              className="mt-8 inline-block border-b border-gold pb-1 text-xs uppercase tracking-eyebrow text-gold hover:opacity-80"
            >
              Discover More
            </Link>
          </div>
          <div className="relative">
            <img
              src={insideImg}
              alt="Pariah State interior"
              className="h-[460px] w-full object-cover"
            />
            <div className="absolute -bottom-6 -left-6 hidden h-24 w-24 border border-gold md:block" />
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-xs uppercase tracking-eyebrow text-gold">
              What We Serve
            </p>
            <h2 className="mt-3 font-display text-4xl">
              Crafted with Fire & Care
            </h2>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {PILLARS.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="border border-foreground/10 bg-card p-10 text-center transition-colors hover:border-gold"
              >
                <Icon className="mx-auto h-7 w-7 text-gold" />
                <h3 className="mt-5 font-display text-2xl">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-eyebrow text-gold">
                Signature Dishes
              </p>
              <h2 className="mt-3 font-display text-4xl">House Favourites</h2>
            </div>
            <Link
              to="/menu"
              className="text-xs uppercase tracking-eyebrow text-gold hover:opacity-80"
            >
              View Full Menu
            </Link>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {SIGNATURE_DISHES.map((dish) => (
              <article key={dish.name} className="group bg-card">
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={dish.img}
                    alt={dish.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-start justify-between gap-4 p-6">
                  <div>
                    <h3 className="font-display text-xl">{dish.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {dish.desc}
                    </p>
                  </div>
                  <span className="font-display text-lg text-gold">
                    {dish.price}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative h-[480px] overflow-hidden">
        <img
          src={beerImg}
          alt="Bar at Pariah State"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay-dark" />
        <div className="relative z-10 mx-auto flex h-full max-w-3xl flex-col items-center justify-center px-6 text-center text-foreground">
          <p className="text-xs uppercase tracking-eyebrow text-gold">
            Live Music - Fridays
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">
            Candlelit Nights, Open Flame
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-foreground/80">
            Step into a space where treehouse architecture, warm timber tones
            and glowing lanterns create a magical, forested ambience right in
            the city.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="text-xs uppercase tracking-eyebrow text-gold">
              Guest Stories
            </p>
            <h2 className="mt-3 font-display text-4xl">Loved by Harare</h2>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {REVIEWS.map((review) => (
              <figure
                key={review.name}
                className="border-t border-gold/40 pt-8"
              >
                <div className="flex gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-3.5 w-3.5 fill-gold" />
                  ))}
                </div>
                <blockquote className="mt-5 font-display text-xl leading-snug">
                  "{review.quote}"
                </blockquote>
                <figcaption className="mt-6 text-xs uppercase tracking-eyebrow text-muted-foreground">
                  - {review.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-20 max-w-6xl px-6">
          <h2 className="font-display text-3xl">Pariah State Location</h2>
          <div className="mt-6 aspect-[4/3] w-full overflow-hidden border border-foreground/10 bg-card sm:aspect-[16/9]">
            <iframe
              title="Pariah State Avondale map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.7880035411586!2d31.036993218361754!3d-17.80165777135377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a50b2b4e6719%3A0x238715b5df29ec0b!2sPariah%20State%20Avondale!5e0!3m2!1sen!2sin!4v1777987089051!5m2!1sen!2sin"
              className="h-full w-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <img
          src={restaurantView}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay-dark" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center text-foreground">
          <h2 className="font-display text-4xl md:text-5xl">
            Reserve Your Table Tonight
          </h2>
          <p className="mt-4 text-sm uppercase tracking-[0.25em] text-foreground/80">
            Avondale, Harare - Open daily 8am - Late
          </p>
          <Link
            to="/reserve"
            className="mt-10 inline-block bg-gold px-10 py-3 text-xs uppercase tracking-eyebrow text-gold-foreground hover:opacity-90"
          >
            Find a Table
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
