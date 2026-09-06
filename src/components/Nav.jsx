import { NavLink, useLocation } from "react-router-dom";
import { Moon, Server, Sun } from "lucide-react";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/cv", label: "CV" },
  { to: "/photography", label: "Photography" },
];

// Placeholder until the Cloudflare Tunnel + Access setup for Overseerr is done.
const HOMELAB_URL = "#";

export default function Nav({ theme, onToggleTheme }) {
  const { pathname } = useLocation();
  const onHome = pathname === "/";
  const onCV = pathname.startsWith("/cv");
  const onPhotography = pathname.startsWith("/photography");

  let headerClass = "border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950";
  if (onCV) {
    headerClass = "border-black/10 dark:border-white/10 bg-[#fdf7f7] dark:bg-[#170f10]";
  } else if (onPhotography) {
    headerClass = "border-sunflower-400/20 dark:border-sunflower-400/10 bg-sunflower-50 dark:bg-[#18140a]";
  }

  return (
    <header className={`sticky top-0 z-40 border-b ${headerClass}`}>
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <nav className="flex items-center gap-6 text-sm">
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) => {
                if (isActive && link.to === "/cv") {
                  return "text-tue transition-colors";
                }
                if (isActive && link.to === "/photography") {
                  return "text-sunflower-400 transition-colors";
                }
                return `transition-colors ${
                  isActive
                    ? "text-stone-900 dark:text-white"
                    : "text-stone-400 dark:text-stone-500 hover:text-stone-900 dark:hover:text-white"
                }`;
              }}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-1">
          {onHome && (
            <a
              href={HOMELAB_URL}
              aria-label="Homelab"
              title="Homelab"
              className="p-2 text-stone-400 dark:text-stone-500 opacity-40 hover:opacity-100 hover:text-stone-900 dark:hover:text-white transition-all"
            >
              <Server size={14} />
            </a>
          )}
          <button
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            className="p-2 text-stone-400 dark:text-stone-500 hover:text-stone-900 dark:hover:text-white transition-colors"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </div>
    </header>
  );
}
