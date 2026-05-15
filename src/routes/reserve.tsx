import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { useState } from "react";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import insideImg from "@/assets/pariah/inside.jpg";

export const Route = createFileRoute("/reserve")({
  head: () => ({
    meta: [
      { title: "Reservations - Pariah State ZW" },
      {
        name: "description",
        content:
          "Reserve your table at Pariah State ZW Avondale. Choose your dining time and preferred table.",
      },
    ],
  }),
  component: ReservePage,
});

const TIME_OF_DAY = [
  {
    value: "brunch-lunch",
    label: "Brunch & Lunch",
    details: "10:00 AM - 4:00 PM",
  },
  {
    value: "dinner-drinks",
    label: "Dinner & Drinks",
    details: "5:00 PM - Late",
  },
];

const TIME_SLOTS = [
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "5:00 PM",
  "6:00 PM",
  "7:00 PM",
  "8:00 PM",
  "9:00 PM",
];

const TABLES = [
  { id: 1, label: "Window view", seats: 2 },
  { id: 2, label: "Near entrance", seats: 4 },
  { id: 3, label: "Cozy corner", seats: 2 },
  { id: 4, label: "Centre lounge", seats: 6 },
  { id: 5, label: "Garden patio", seats: 4 },
  { id: 6, label: "Chef's counter", seats: 3 },
];

function ReservePage() {
  const [timeOfDay, setTimeOfDay] = useState("brunch-lunch");
  const [timeSlot, setTimeSlot] = useState("");
  const [selectedTable, setSelectedTable] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const table = TABLES.find((item) => String(item.id) === selectedTable);
  const experience = TIME_OF_DAY.find((item) => item.value === timeOfDay);
  const canSubmit = Boolean(timeSlot && selectedTable);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageHero
        eyebrow="Reservations"
        title="Book Your Table"
        subtitle="Choose your dining time and preferred table"
        image={insideImg}
      />

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <p className="text-xs uppercase tracking-eyebrow text-gold">
              Reservation Details
            </p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl text-foreground">
              When will you join us?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-sm text-muted-foreground">
              Select your preferred part of the day, arrival time, and table
              before sending the request.
            </p>
          </div>

          <div className="mt-10 grid gap-5 border border-foreground/10 bg-card p-8 md:grid-cols-3">
            <Field label="Time of Day">
              <Select value={timeOfDay} onValueChange={setTimeOfDay}>
                <SelectTrigger className="reservation-select">
                  <SelectValue placeholder="Select time of day" />
                </SelectTrigger>
                <SelectContent>
                  {TIME_OF_DAY.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label} - {item.details}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
            <Field label="Arrival Time">
              <Select value={timeSlot} onValueChange={setTimeSlot} required>
                <SelectTrigger className="reservation-select">
                  <SelectValue placeholder="Select arrival time" />
                </SelectTrigger>
                <SelectContent>
                  {TIME_SLOTS.map((slot) => (
                    <SelectItem key={slot} value={slot}>
                      {slot}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
            <Field label="Preferred Table">
              <Select
                value={selectedTable}
                onValueChange={setSelectedTable}
                required
              >
                <SelectTrigger className="reservation-select">
                  <SelectValue placeholder="Select table" />
                </SelectTrigger>
                <SelectContent>
                  {TABLES.map((item) => (
                    <SelectItem key={item.id} value={String(item.id)}>
                      Table {item.id} - {item.label} ({item.seats} seats)
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
          </div>

          <div className="mt-20">
            <div className="text-center">
              <p className="text-xs uppercase tracking-eyebrow text-gold">
                Floor Plan
              </p>
              <h3 className="mt-3 font-display text-3xl text-foreground">Pick Your Table</h3>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
              {TABLES.map((table) => {
                const active = selectedTable === String(table.id);
                return (
                  <button
                    key={table.id}
                    type="button"
                    onClick={() => setSelectedTable(String(table.id))}
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
            {table && (
              <p className="mt-6 text-center text-sm text-muted-foreground">
                Selected:{" "}
                <span className="text-gold">
                  Table {table.id} - {table.label}
                </span>
              </p>
            )}
          </div>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              if (!canSubmit) return;
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
              <input
                value={timeSlot}
                readOnly
                required
                className="form-input"
                placeholder="Select arrival time above"
              />
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
                  experience
                    ? `${experience.label} (${experience.details})`
                    : ""
                }
                readOnly
                className="form-input"
              />
            </Field>
            <Field label="Table">
              <input
                value={table ? `Table ${table.id} - ${table.label}` : ""}
                readOnly
                required
                className="form-input"
                placeholder="Select table above"
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
                disabled={!canSubmit}
                className="bg-gold px-8 py-3 text-xs uppercase tracking-eyebrow text-gold-foreground hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-45"
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
        .reservation-select {
          height: 44px;
          border-radius: 0;
          border-color: var(--border);
          background: transparent;
          box-shadow: none;
        }
        .reservation-select:focus {
          border-color: var(--gold);
          box-shadow: 0 0 0 1px var(--gold);
        }
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
