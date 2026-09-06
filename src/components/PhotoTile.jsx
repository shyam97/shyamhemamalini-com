export default function PhotoTile({ photo, onClick }) {
  const ratio = photo.orientation === "landscape" ? "3/2" : "2/3";

  return (
    <button
      onClick={onClick}
      className="group relative block w-full overflow-hidden rounded-2xl bg-stone-100"
      style={{ aspectRatio: ratio }}
    >
      <img
        src={photo.src}
        alt={photo.caption}
        loading="lazy"
        className="w-full h-full object-cover"
      />

      {/* top vignette: location / date */}
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
      <div className="absolute inset-x-0 top-3 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-150">
        <span className="font-mono text-[11px] tracking-wide text-white">
          {photo.location} &middot; {photo.date}
        </span>
      </div>

      {/* bottom vignette: caption */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/65 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
      <div className="absolute inset-x-0 bottom-3 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-150">
        <span className="text-xs text-white/90 text-left block">{photo.caption}</span>
      </div>
    </button>
  );
}
