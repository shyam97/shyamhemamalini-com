import { useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function Lightbox({ photos, index, onClose, onNavigate }) {
  const photo = photos[index];

  useEffect(() => {
    if (photo == null) return;
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((index + 1) % photos.length);
      if (e.key === "ArrowLeft") onNavigate((index - 1 + photos.length) % photos.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKey);
    };
  }, [photo, index, photos.length, onClose, onNavigate]);

  if (photo == null) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
      <div className="absolute inset-0 bg-stone-950/90 backdrop-blur-sm" onClick={onClose} />

      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 p-2 text-stone-300 hover:text-white transition-colors"
      >
        <X size={28} />
      </button>

      <button
        onClick={() => onNavigate((index - 1 + photos.length) % photos.length)}
        aria-label="Previous photo"
        className="absolute left-2 sm:left-6 z-10 p-2 text-stone-300 hover:text-white transition-colors"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={() => onNavigate((index + 1) % photos.length)}
        aria-label="Next photo"
        className="absolute right-2 sm:right-6 z-10 p-2 text-stone-300 hover:text-white transition-colors"
      >
        <ChevronRight size={32} />
      </button>

      <div className="relative z-0 max-w-4xl max-h-[85vh] flex flex-col items-center">
        <img
          src={photo.src}
          alt={photo.caption}
          className="max-h-[75vh] max-w-full object-contain rounded shadow-2xl"
        />
        <div className="mt-4 text-center font-mono text-sm text-stone-300">
          <span>{photo.caption}</span>
          <span className="text-stone-500"> — {photo.location} · {photo.date}</span>
        </div>
      </div>
    </div>
  );
}
