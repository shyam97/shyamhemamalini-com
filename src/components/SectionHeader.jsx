export default function SectionHeader({ index, title }) {
  return (
    <div className="flex items-baseline gap-3 mb-6">
      <span className="font-mono text-xs text-tue">{index}</span>
      <h2 className="text-sm font-semibold tracking-[0.15em] text-tue uppercase">
        {title}
      </h2>
      <div className="flex-1 h-px bg-stone-200 dark:bg-stone-800" />
    </div>
  );
}
