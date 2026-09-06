import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function TimelineCard({ item, forceOpen = false }) {
  const [open, setOpen] = useState(forceOpen);
  const ref = useRef(null);

  useEffect(() => {
    if (!forceOpen) return;
    setOpen(true);
    ref.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [forceOpen]);

  return (
    <div
      ref={ref}
      id={item.id}
      className="border border-stone-200 dark:border-stone-800 rounded-md hover:border-tue/40 transition-colors scroll-mt-20"
    >
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="w-full text-left px-6 py-5 flex items-start gap-4"
      >
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="font-semibold text-stone-900 dark:text-white">{item.role}</h3>
            <span className="font-mono text-xs text-stone-400 dark:text-stone-500 whitespace-nowrap">
              {item.period}
            </span>
          </div>
          <p className="text-sm text-stone-500 dark:text-stone-400 mt-0.5">
            {item.org}
            {item.location ? ` — ${item.location}` : ""}
          </p>
          {item.keywords?.length > 0 && (
            <p className="font-mono text-xs text-stone-400 dark:text-stone-500 mt-2.5">
              {item.keywords.join("  ·  ")}
            </p>
          )}
        </div>
        <ChevronDown
          size={16}
          className={`mt-1 shrink-0 text-stone-400 transition-transform duration-200 ${
            open ? "rotate-180 text-tue" : ""
          }`}
        />
      </button>

      <div
        className="grid transition-[grid-template-rows] duration-200 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6 border-t border-stone-100 dark:border-stone-800/70 pt-4 space-y-4">
            <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
              {item.shortDesc}
            </p>

            {item.meta?.map((m) => (
              <p key={m.label} className="text-sm text-stone-600 dark:text-stone-300">
                <span className="font-semibold text-stone-900 dark:text-white">
                  {m.label}:{" "}
                </span>
                {m.href ? (
                  <a
                    href={m.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-stone-300 dark:decoration-stone-600 hover:text-tue"
                  >
                    {m.value}
                  </a>
                ) : (
                  m.value
                )}
              </p>
            ))}

            <ul className="space-y-2.5">
              {item.details.map((detail, idx) => (
                <li
                  key={idx}
                  className="flex gap-3 text-sm text-stone-600 dark:text-stone-300 leading-relaxed"
                >
                  <span className="mt-2 w-1 h-1 rounded-full bg-stone-400 dark:bg-stone-600 shrink-0" />
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
