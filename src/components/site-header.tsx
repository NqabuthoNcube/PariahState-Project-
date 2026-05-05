import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./theme-toggle";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/reserve", label: "Reservations" },
  { to: "/order", label: "Order" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="hidden border-b border-foreground/10 bg-background/30 backdrop-blur md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs uppercase tracking-eyebrow text-foreground/70">
          <span>Avondale, Harare - Zimbabwe</span>
          <span className="flex items-center gap-2">
            <Phone className="h-3 w-3 text-gold" /> +263 774 823 115
          </span>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="font-display text-2xl tracking-wide text-foreground">
            Pariah <span className="text-gold">State</span>
          </span>
          <span className="hidden text-[10px] uppercase tracking-eyebrow text-foreground/60 sm:inline">
            ZW - Est. 2015
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-xs uppercase tracking-eyebrow text-foreground/80 transition-colors hover:text-gold"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            to="/reserve"
            className="hidden rounded-full border border-gold px-5 py-2 text-xs uppercase tracking-eyebrow text-gold transition-colors hover:bg-gold hover:text-gold-foreground md:inline-block"
          >
            Find a Table
          </Link>
          <button
            type="button"
            className="md:hidden"
            onClick={() => setOpen((current) => !current)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-foreground/10 bg-background/95 backdrop-blur md:hidden">
          <nav className="flex flex-col px-6 py-4">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="border-b border-foreground/10 py-3 text-sm uppercase tracking-eyebrow text-foreground/80 hover:text-gold"
                activeProps={{ className: "text-gold" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
