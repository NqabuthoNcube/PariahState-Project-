import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-foreground/10 bg-surface">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <h3 className="font-display text-2xl">
            Pariah <span className="text-gold">State</span>
          </h3>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
            A treehouse-inspired dining sanctuary in the heart of Avondale,
            where flame-grilled craft, candlelight, and Zimbabwean warmth meet
            every evening.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href="https://www.instagram.com/pariahstatezw/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="rounded-full border border-foreground/20 p-2 hover:border-gold hover:text-gold"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://www.facebook.com/pariahstatezw/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="rounded-full border border-foreground/20 p-2 hover:border-gold hover:text-gold"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-eyebrow text-gold">
            Visit
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <MapPin className="h-4 w-4 text-gold" /> Avondale, Harare
            </li>
            <li className="flex gap-2">
              <Phone className="h-4 w-4 text-gold" /> +263 867 710 3920
            </li>
            <li className="flex gap-2">
              <Mail className="h-4 w-4 text-gold" /> hello@pariahstatezw.com
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-eyebrow text-gold">
            Hours
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Mon - Thu - 8am - 10pm</li>
            <li>Fri - Sun - 8am - Late</li>
            <li>Live music - Fridays 7pm</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs uppercase tracking-eyebrow text-muted-foreground sm:flex-row">
          <span>(c) 2026 Pariah State ZW</span>
          <div className="flex gap-5">
            <Link to="/menu" className="hover:text-gold">
              Menu
            </Link>
            <Link to="/reserve" className="hover:text-gold">
              Reserve
            </Link>
            <Link to="/contact" className="hover:text-gold">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
