import { createFileRoute } from "@tanstack/react-router";
import { Check, Moon, Sun } from "lucide-react";
import { useState } from "react";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { useTheme } from "@/components/theme-provider";
import insideImg from "@/assets/pariah/inside.jpg";

export const Route = createFileRoute("/reserve")({
  head: () => ({
    meta: [
      { title: "Reservations - Pariah State ZW" },
      {
        name: "description",
        content:
          "Reserve your table at Pariah State ZW Avondale. Choose Day Time Dining or Night Time Dining.",
      },
    ],
  }),
  component: ReservePage,
});

const TABLES = [
  { id: 1, label: "Window view", seats: 2 },
  { id: 2, label: "Near entrance", seats: 4 },
  { id: 3, label: "Cozy corner", seats: 2 },
  { id: 4, label: "Centre lounge", seats: 6 },
  { id: 5, label: "Garden patio", seats: 4 },
  { id: 6, label: "Chef's counter", seats: 3 },
];

function ReservePage() {
  const { theme, setTheme } = useTheme();
  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageHero
        eyebrow="Reservations"
        title="Choose Your Moment"
        subtitle="Day Time Dining - Night Time Dining"
        image={insideImg}
      />

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <p className="text-xs uppercase tracking-eyebrow text-gold">
              Select Your Experience
            </p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">
              When will you join us?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-sm text-muted-foreground">
              Switching the experience will gently transform the entire site to
              match the mood: sunlit cream by day, candlelit charcoal by night.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <button
              type="button"
              onClick={() => setTheme("day")}
              aria-pressed={theme === "day"}
              className={`group flex flex-col items-start gap-3 border p-8 text-left transition-all ${
                theme === "day"
                  ? "border-gold bg-gold/5"
                  : "border-foreground/15 hover:border-gold/60"
              }`}
            >
              <Sun className="h-6 w-6 text-gold" />
              <span className="text-xs uppercase tracking-eyebrow text-gold">
                Day Time Dining
              </span>
              <span className="font-display text-2xl">Brunch &amp; Lunch</span>
              <span className="text-sm text-muted-foreground">
                10am - 4pm - Sunlit patio, brunch plates and cold-press
                cocktails.
              </span>
            </button>
            <button
              type="button"
              onClick={() => setTheme("night")}
              aria-pressed={theme === "night"}
              className={`group flex flex-col items-start gap-3 border p-8 text-left transition-all ${
                theme === "night"
                  ? "border-gold bg-gold/5"
                  : "border-foreground/15 hover:border-gold/60"
              }`}
            >
              <Moon className="h-6 w-6 text-gold" />
              <span className="text-xs uppercase tracking-eyebrow text-gold">
                Night Time Dining
              </span>
              <span className="font-display text-2xl">Dinner &amp; Drinks</span>
              <span className="text-sm text-muted-foreground">
                5pm - Late - Candlelight, flame-grilled mains and live music
                Fridays.
              </span>
            </button>
          </div>

          <div className="mt-20">
            <div className="text-center">
              <p className="text-xs uppercase tracking-eyebrow text-gold">
                Floor Plan
              </p>
              <h3 className="mt-3 font-display text-3xl">Pick Your Table</h3>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
              {TABLES.map((table) => {
                const active = selected === table.id;
                return (
                  <button
                    key={table.id}
                    type="button"
                    onClick={() => setSelected(table.id)}
                    aria-pressed={active}
                    className={`flex aspect-square flex-col items-center justify-center border text-center transition-all ${
                      active
                        ? "border-gold bg-gold text-gold-foreground"
                        : "border-foreground/20 hover:border-gold"
                    }`}
                  >
                    <span className="font-display text-2xl">T{table.id}</span>
                    <span className="mt-1 text-[10px] uppercase tracking-eyebrow opacity-80">
                      {table.seats} seats
                    </span>
                  </button>
                );
              })}
            </div>
            {selected && (
              <p className="mt-6 text-center text-sm text-muted-foreground">
                Selected:{" "}
                <span className="text-gold">
                  Table {selected} -{" "}
                  {TABLES.find((table) => table.id === selected)?.label}
                </span>
              </p>
            )}
          </div>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              setSubmitted(true);
            }}
            className="mt-16 grid gap-5 border border-foreground/10 bg-card p-8 md:grid-cols-2"
          >
            <Field label="Full Name">
              <input required className="form-input" />
            </Field>
            <Field label="Phone">
              <input type="tel" required className="form-input" />
            </Field>
            <Field label="Date">
              <input type="date" required className="form-input" />
            </Field>
            <Field label="Time">
              <input type="time" required className="form-input" />
            </Field>
            <Field label="Guests">
              <input
                type="number"
                min={1}
                defaultValue={2}
                required
                className="form-input"
              />
            </Field>
            <Field label="Experience">
              <input
                value={
                  theme === "day" ? "Day Time Dining" : "Night Time Dining"
                }
                readOnly
                className="form-input"
              />
            </Field>
            <div className="md:col-span-2">
              <Field label="Special Requests">
                <textarea rows={3} className="form-input" />
              </Field>
            </div>
            <div className="flex items-center justify-between gap-4 pt-2 md:col-span-2">
              {submitted ? (
                <p className="flex items-center gap-2 text-sm text-gold">
                  <Check className="h-4 w-4" /> Reservation request received.
                  We'll confirm by phone.
                </p>
              ) : (
                <span />
              )}
              <button
                type="submit"
                className="bg-gold px-8 py-3 text-xs uppercase tracking-eyebrow text-gold-foreground hover:opacity-90"
              >
                Confirm Reservation
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
