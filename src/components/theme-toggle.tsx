import { Sun, Moon } from "lucide-react";
import { useTheme } from "./theme-provider";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggle } = useTheme();
  const isNight = theme === "night";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${isNight ? "Day Time Dining" : "Night Time Dining"}`}
      title={isNight ? "Day Time Dining" : "Night Time Dining"}
      className={`group inline-flex items-center gap-3 rounded-full border border-gold/40 bg-background/40 px-3 py-1.5 text-xs uppercase tracking-eyebrow text-foreground/80 backdrop-blur transition-all hover:border-gold hover:text-gold ${className}`}
    >
      <span className="relative flex h-5 w-10 items-center rounded-full bg-foreground/10">
        <span
          className={`absolute flex h-4 w-4 items-center justify-center rounded-full bg-gold text-gold-foreground transition-all duration-500 ${
            isNight ? "translate-x-5" : "translate-x-0.5"
          }`}
        >
          {isNight ? (
            <Moon className="h-2.5 w-2.5" />
          ) : (
            <Sun className="h-2.5 w-2.5" />
          )}
        </span>
      </span>
      <span className="hidden sm:inline">
        {isNight ? "Night Dining" : "Day Dining"}
      </span>
    </button>
  );
}
