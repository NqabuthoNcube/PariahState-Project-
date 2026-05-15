import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { Check, Clock, Mail, MapPin, Phone } from "lucide-react";
import restaurantView from "@/assets/pariah/restaurant-view.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact - Pariah State ZW" },
      {
        name: "description",
        content:
          "Visit Pariah State ZW in Avondale, Harare. Call, email or send a message.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageHero
        eyebrow="Get in Touch"
        title="We'd Love to Hear From You"
        subtitle="Reservations - Private Dining - Press"
        image={restaurantView}
      />

      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-eyebrow text-gold">
              Visit the Restaurant
            </p>
            <h2 className="mt-3 font-display text-3xl text-foreground">Avondale, Harare</h2>
            <ul className="mt-8 space-y-5 text-sm">
              <Info icon={MapPin} title="Address">
                King George Rd, Avondale, Harare, Zimbabwe
              </Info>
              <Info icon={Phone} title="Reservations">
                +263 8677103920
              </Info>
              <Info icon={Mail} title="Email">
                hello@pariahstatezw.com
              </Info>
              <Info icon={Clock} title="Hours">
                Mon - Thu - 8am - 10pm
                <br />
                Fri - Sun - 8am - Late
              </Info>
            </ul>

            <div className="mt-10 border border-foreground/10 bg-card p-6">
              <p className="text-xs uppercase tracking-eyebrow text-gold">
                Private Dining
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                Hosting a celebration, birthday or corporate evening? Our team
                will tailor every detail, from custom tasting menus to live
                music and floral styling.
              </p>
            </div>
          </div>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              setSent(true);
            }}
            className="space-y-5 border border-foreground/10 bg-card p-8"
          >
            <p className="text-xs uppercase tracking-eyebrow text-gold">
              Send a Message
            </p>
            <Field label="Name">
              <input required className="form-input" />
            </Field>
            <Field label="Email">
              <input type="email" required className="form-input" />
            </Field>
            <Field label="Subject">
              <input className="form-input" />
            </Field>
            <Field label="Message">
              <textarea rows={5} required className="form-input" />
            </Field>
            <div className="flex items-center justify-between gap-4 pt-2">
              {sent ? (
                <p className="flex items-center gap-2 text-sm text-gold">
                  <Check className="h-4 w-4" /> Message sent. We'll reply within
                  24 hours.
                </p>
              ) : (
                <span />
              )}
              <button
                type="submit"
                className="bg-gold px-8 py-3 text-xs uppercase tracking-eyebrow text-gold-foreground hover:opacity-90"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      <style>{`
        .form-input {
          width: 100%;
          background: transparent;
          border: 0;
          border-bottom: 1px solid var(--border);
          padding: 8px 0;
          font-size: 14px;
          color: var(--foreground);
          outline: none;
          transition: border-color 200ms;
        }
        .form-input:focus { border-color: var(--gold); }
      `}</style>

      <SiteFooter />
    </div>
  );
}

function Info({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex gap-4">
      <Icon className="mt-1 h-5 w-5 flex-none text-gold" />
      <div>
        <p className="text-[10px] uppercase tracking-eyebrow text-muted-foreground">
          {title}
        </p>
        <p className="mt-1 text-sm text-foreground">{children}</p>
      </div>
    </li>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[10px] uppercase tracking-eyebrow text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}
