import { useState } from "react";
import { Mail } from "lucide-react";
import Lightbox from "../components/Lightbox";
import PhotoTile from "../components/PhotoTile";
import { RESUME_DATA } from "../data/resume";
import { PHOTOS } from "../data/photos";
import { mailtoHref } from "../lib/email";

export default function Photography() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div>
      <header className="max-w-3xl mx-auto px-6 pt-16 pb-12 text-center">
        <h1 className="font-bartle text-4xl sm:text-5xl md:text-6xl tracking-tight text-sunflower-400">
          {RESUME_DATA.profile.name}
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
        <div className="pointer-events-none select-none blur-md sm:blur-lg columns-2 sm:columns-3 lg:columns-4 gap-2 sm:gap-4">
          {PHOTOS.map((photo, i) => (
            <PhotoTile key={photo.id} photo={photo} onClick={() => setActiveIndex(i)} />
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
        photos={PHOTOS}
        index={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </div>
  );
}
