import { useEffect, useMemo, useState } from "react";
import { Mail } from "lucide-react";
import Lightbox from "../components/Lightbox";
import PhotoTile from "../components/PhotoTile";
import { RESUME_DATA } from "../data/resume";
import { PHOTOS } from "../data/photos";
import { mailtoHref } from "../lib/email";

const [FIRST_NAME, ...LAST_NAME_PARTS] = RESUME_DATA.profile.name.split(" ");
const LAST_NAME = LAST_NAME_PARTS.join(" ");

// Fisher–Yates. PHOTOS' own order (in data/photos.js) is just for
// editing convenience — display order is randomized per page load so
// portrait/landscape tiles don't fall into a repeating column pattern.
function shuffle(items) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

// A real CSS Grid with N row-locked columns forces every tile in a row to
// match the tallest one — a landscape tile next to a portrait one leaves a
// gap under it. True masonry needs each column to be its own independent
// vertical stack instead, so we distribute photos into N column-arrays
// ourselves (greedy: always add the next photo to whichever column is
// currently shortest, estimating height from its known aspect ratio at a
// notional column width of 1) and render each as a plain flex column.
function distributeIntoColumns(photos, columnCount) {
  const columns = Array.from({ length: columnCount }, () => []);
  const heights = Array(columnCount).fill(0);
  for (const photo of photos) {
    let shortest = 0;
    for (let i = 1; i < columnCount; i++) {
      if (heights[i] < heights[shortest]) shortest = i;
    }
    columns[shortest].push(photo);
    heights[shortest] += photo.orientation === "landscape" ? 2 / 3 : 3 / 2;
  }
  return columns;
}

const BREAKPOINTS = [
  { query: "(min-width: 1024px)", count: 4 },
  { query: "(min-width: 640px)", count: 3 },
];

function useColumnCount() {
  const getCount = () => {
    if (typeof window === "undefined") return 2;
    const match = BREAKPOINTS.find((b) => window.matchMedia(b.query).matches);
    return match ? match.count : 2;
  };

  const [count, setCount] = useState(getCount);

  useEffect(() => {
    const mqls = BREAKPOINTS.map((b) => window.matchMedia(b.query));
    const update = () => setCount(getCount());
    mqls.forEach((mql) => mql.addEventListener("change", update));
    update();
    return () => mqls.forEach((mql) => mql.removeEventListener("change", update));
  }, []);

  return count;
}

export default function Photography() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [shuffledPhotos] = useState(() => shuffle(PHOTOS));
  const columnCount = useColumnCount();
  const columns = useMemo(
    () => distributeIntoColumns(shuffledPhotos, columnCount),
    [shuffledPhotos, columnCount],
  );

  return (
    <div>
      <header className="max-w-3xl mx-auto px-6 pt-16 pb-12 text-center">
        <h1 className="font-bartle text-4xl sm:text-5xl md:text-6xl tracking-tight text-sunflower-400">
          {FIRST_NAME} <span className="text-2xl sm:text-5xl md:text-6xl">{LAST_NAME}</span>
        </h1>
        <p className="font-oswald text-lg text-stone-500 dark:text-stone-400 mt-3">
          Hobbyist Photographer
        </p>
        <a
          href={mailtoHref("Photography inquiry")}
          className="inline-flex items-center gap-1.5 text-sm text-stone-400 dark:text-stone-500 hover:text-sunflower-700 dark:hover:text-sunflower-400 transition-colors mt-2"
        >
          <Mail size={13} /> Available for small events
        </a>
      </header>

      <div className="relative w-full px-2 sm:px-4 pb-16">
        <div
          className="pointer-events-none select-none blur-md sm:blur-lg grid gap-2 sm:gap-4"
          style={{ gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))` }}
        >
          {columns.map((column, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-2 sm:gap-4">
              {column.map((photo) => (
                <PhotoTile
                  key={photo.id}
                  photo={photo}
                  onClick={() => setActiveIndex(shuffledPhotos.indexOf(photo))}
                />
              ))}
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-white/50 dark:bg-black/40 pointer-events-none" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="font-oswald font-semibold text-3xl sm:text-4xl text-sunflower-400 dark:text-white">
            Coming soon...
          </p>
        </div>
      </div>

      <Lightbox
        photos={shuffledPhotos}
        index={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </div>
  );
}
