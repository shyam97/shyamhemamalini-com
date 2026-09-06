import { Suspense, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Nav from "./Nav";
import { RESUME_DATA } from "../data/resume";

function getInitialTheme() {
  const stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  return "dark";
}

// Matches the shellClass backgrounds below — kept in sync manually since
// overscroll (rubber-band) regions are painted from the root element's
// background, not any inner div's.
const BODY_BG = {
  home: { light: "#ffffff", dark: "#000000" },
  cv: { light: "#fdf7f7", dark: "#170f10" },
  photography: { light: "#FFFBEA", dark: "#18140a" },
};

export default function Layout() {
  const [theme, setTheme] = useState(getInitialTheme);
  const { pathname } = useLocation();
  const onCV = pathname.startsWith("/cv");
  const onPhotography = pathname.startsWith("/photography");
  const page = onCV ? "cv" : onPhotography ? "photography" : "home";

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const color = BODY_BG[page][theme];
    document.documentElement.style.backgroundColor = color;
    document.body.style.backgroundColor = color;
  }, [page, theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  let shellClass = "min-h-screen bg-white dark:bg-black text-black dark:text-white selection:bg-black/10 dark:selection:bg-white/20";
  if (onCV) {
    shellClass =
      "min-h-screen bg-[#fdf7f7] dark:bg-[#170f10] text-stone-900 dark:text-stone-100 selection:bg-tue/15";
  } else if (onPhotography) {
    shellClass =
      "min-h-screen bg-sunflower-50 dark:bg-[#18140a] text-stone-900 dark:text-stone-100 selection:bg-sunflower-400/20";
  }

  return (
    <div className={theme}>
      <div className={shellClass}>
        {onCV && <div className="fixed inset-0 bg-grid pointer-events-none -z-10" />}

        <Nav theme={theme} onToggleTheme={toggleTheme} />

        <Suspense fallback={null}>
          <Outlet />
        </Suspense>

        <footer className="max-w-5xl mx-auto px-6 py-8 mt-16 border-t border-stone-200 dark:border-stone-800 text-center text-xs font-mono text-stone-400 dark:text-stone-600">
          <p>
            © {new Date().getFullYear()} {RESUME_DATA.profile.name}
          </p>
          <p className="mt-1 text-stone-300 dark:text-stone-700">
            Made with Claude, Tailwind, and Vite
          </p>
        </footer>
      </div>
    </div>
  );
}
