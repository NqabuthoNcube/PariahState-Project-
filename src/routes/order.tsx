import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { useState } from "react";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import delivery from "@/assets/pariah/delivery.jpg";

export const Route = createFileRoute("/order")({
  head: () => ({
    meta: [
      { title: "Order Online - Pariah State ZW" },
      {
        name: "description",
        content:
          "Order Pariah State ZW favourites for delivery across Avondale, Mt Pleasant, Borrowdale and the CBD.",
      },
    ],
  }),
  component: OrderPage,
});

function OrderPage() {
  const [done, setDone] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageHero
        eyebrow="Delivery"
        title="Order to Your Door"
        subtitle="Avondale - Mt Pleasant - Borrowdale - CBD"
        image={delivery}
      />

      <section className="py-20">
        <div className="mx-auto grid max-w-6xl items-start gap-12 px-6 md:grid-cols-5">
          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-eyebrow text-gold">
              Place Your Order
            </p>
            <h2 className="mt-3 font-display text-3xl">
              Quick &amp; Easy Delivery
            </h2>
            <p className="mt-4 text-sm text-muted-foreground">
              Pay on delivery via EcoCash, Swipe or USD cash. Free delivery on
              orders above $40.
            </p>

            <form
              onSubmit={(event) => {
                event.preventDefault();
                setDone(true);
              }}
              className="mt-10 space-y-5 border border-foreground/10 bg-card p-8"
            >
              <Field label="Full Name">
                <input required className="form-input" />
              </Field>
              <Field label="Phone">
                <input type="tel" required className="form-input" />
              </Field>
              <Field label="Delivery Address">
                <input required className="form-input" />
              </Field>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Menu Item">
                  <select required className="form-input">
                    <option value="">Select a dish</option>
                    <option>Rump Steak 300g - $22</option>
                    <option>Grid Iron Burger - $10</option>
                    <option>Wood-Fired Margherita - $11</option>
                    <option>Flame Chicken & Chips - $12</option>
                    <option>Sadza Bowl - $9</option>
                  </select>
                </Field>
                <Field label="Quantity">
                  <input
                    type="number"
                    min={1}
                    defaultValue={1}
                    required
                    className="form-input"
                  />
                </Field>
              </div>
              <Field label="Special Instructions">
                <textarea rows={3} className="form-input" />
              </Field>
              <div className="flex items-center justify-between gap-4 pt-2">
                {done ? (
                  <p className="flex items-center gap-2 text-sm text-gold">
                    <Check className="h-4 w-4" /> Order placed. We'll be in
                    touch shortly.
                  </p>
                ) : (
                  <span />
                )}
                <button
                  type="submit"
                  className="bg-gold px-8 py-3 text-xs uppercase tracking-eyebrow text-gold-foreground hover:opacity-90"
                >
                  Place Order
                </button>
              </div>
            </form>
          </div>

          <aside className="space-y-8 md:col-span-2">
            <div className="border border-foreground/10 bg-card p-6">
              <p className="text-xs uppercase tracking-eyebrow text-gold">
                Delivery Info
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>11am - 9pm daily</li>
                <li>Minimum order $10</li>
                <li>Free delivery above $40</li>
                <li>EcoCash - Swipe - USD cash</li>
              </ul>
            </div>
            <div className="border border-foreground/10 bg-card p-6">
              <p className="text-xs uppercase tracking-eyebrow text-gold">
                Weekend Madness
              </p>
              <p className="mt-3 font-display text-2xl">
                Buy 2 Pizzas, Get 1 Free
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Saturdays only. Auto-applied at checkout.
              </p>
            </div>
            <img
              src={delivery}
              alt="Pariah State delivery"
              className="h-56 w-full object-cover"
            />
          </aside>
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
