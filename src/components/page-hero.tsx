import { SiteHeader } from "./site-header";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image: string;
}) {
  return (
    <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 hero-overlay-dark" />
      <SiteHeader />
      <div className="relative z-10 mx-auto flex h-full max-w-4xl flex-col items-center justify-center px-6 pt-20 text-center text-white">
        <p className="text-xs uppercase tracking-eyebrow text-gold">
          {eyebrow}
        </p>
        <h1 className="mt-4 font-display text-5xl md:text-6xl">{title}</h1>
        {subtitle && (
          <p className="mt-5 max-w-xl text-sm uppercase tracking-[0.25em] text-white/80">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
