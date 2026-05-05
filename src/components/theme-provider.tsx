import * as React from "react";

type Theme = "day" | "night";
type Ctx = { theme: Theme; setTheme: (t: Theme) => void; toggle: () => void };

const ThemeContext = React.createContext<Ctx | null>(null);

const STORAGE_KEY = "pariah-theme";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = React.useState<Theme>("night");
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    const stored = (typeof window !== "undefined" &&
      localStorage.getItem(STORAGE_KEY)) as Theme | null;
    if (stored === "day" || stored === "night") {
      setThemeState(stored);
    } else {
      const hour = new Date().getHours();
      setThemeState(hour >= 6 && hour < 18 ? "day" : "night");
    }
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    if (theme === "night") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme, mounted]);

  const setTheme = React.useCallback((t: Theme) => setThemeState(t), []);
  const toggle = React.useCallback(
    () => setThemeState((t) => (t === "day" ? "night" : "day")),
    [],
  );

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = React.useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
}
