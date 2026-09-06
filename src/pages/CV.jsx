import { useLocation } from "react-router-dom";
import { Download } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import TimelineCard from "../components/TimelineCard";
import { RESUME_DATA } from "../data/resume";

const { profile, summary, expertise, timeline, publications, ancillary, languagesSpoken } =
  RESUME_DATA;

function Label({ children }) {
  return (
    <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-stone-400 dark:text-stone-600 mr-2">
      {children}
    </span>
  );
}

export default function CV() {
  const { hash } = useLocation();
  const openId = hash.slice(1);

  return (
    <div className="max-w-3xl mx-auto px-6 py-14 md:py-20">
      {/* Header */}
      <header className="mb-14 flex flex-col-reverse md:flex-row items-start gap-4 md:gap-8">
        <div className="flex-1">
          <h1 className="font-ubuntu text-3xl md:text-4xl font-normal tracking-tight text-stone-900 dark:text-white">
            {profile.name}
          </h1>
          <p className="text-lg text-stone-700 dark:text-stone-300 mt-2">{profile.title}</p>
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-stone-400 dark:text-stone-600 mt-1.5">
            {profile.subtitle}
          </p>

          <p className="mt-4 text-sm">
            <Label>Nationality</Label>
            <span className="text-stone-600 dark:text-stone-300">{profile.nationality}</span>
          </p>
          <p className="text-sm">
            <Label>Availability</Label>
            <span className="text-stone-600 dark:text-stone-300">{profile.availability}</span>
          </p>

          <a
            href={profile.cvPdf}
            download
            className="inline-flex items-center gap-2 mt-5 px-4 py-2 rounded-md border border-tue text-tue text-sm font-medium hover:bg-tue hover:text-white transition-colors"
          >
            <Download size={14} /> Download CV
          </a>
        </div>

        <img
          src={profile.photo}
          alt={profile.name}
          className="w-32 h-32 md:w-36 md:h-36 rounded-full object-cover border border-stone-200 dark:border-stone-800"
        />
      </header>

      {/* Summary */}
      <section className="mb-14">
        <p className="text-stone-600 dark:text-stone-300 leading-relaxed">{summary}</p>
      </section>

      <div className="space-y-14">
        <section>
          <SectionHeader index="01" title="Expertise" />
          <div className="space-y-4">
            {expertise.map((group) => (
              <p key={group.label} className="text-sm leading-relaxed">
                <Label>{group.label}</Label>
                <span className="text-stone-600 dark:text-stone-300">
                  {group.items.join(", ")}
                </span>
              </p>
            ))}
          </div>
        </section>

        <section>
          <SectionHeader index="02" title="Education & Experience" />
          <div className="grid gap-4">
            {timeline.map((item) => (
              <TimelineCard key={item.id} item={item} forceOpen={item.id === openId} />
            ))}
          </div>
        </section>

        <section>
          <SectionHeader index="03" title="Publications" />
          <ol className="space-y-5">
            {publications.map((pub, i) => (
              <li
                key={pub.id}
                className="text-sm border-t border-stone-100 dark:border-stone-800/70 pt-4 first:border-t-0 first:pt-0"
              >
                <p className="text-stone-800 dark:text-stone-100 leading-relaxed">
                  <span className="font-mono text-stone-400 dark:text-stone-600 mr-2">
                    {i + 1}.
                  </span>
                  {pub.title}
                </p>
                <p className="text-stone-500 dark:text-stone-400 mt-1 ml-5">{pub.authors}</p>
                <p className="text-stone-400 dark:text-stone-500 mt-1 ml-5">
                  {pub.venue} &middot; {pub.year}
                  {pub.href && (
                    <>
                      {" "}
                      &middot;{" "}
                      <a
                        href={pub.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-stone-300 dark:decoration-stone-600 hover:text-tue"
                      >
                        {pub.hrefLabel}
                      </a>
                    </>
                  )}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <SectionHeader index="04" title="Ancillary Activities" />
          <ul className="space-y-4">
            {ancillary.map((a) => (
              <li
                key={a.id}
                className="text-sm flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-t border-stone-100 dark:border-stone-800/70 pt-4 first:border-t-0 first:pt-0"
              >
                <p className="text-stone-700 dark:text-stone-300">
                  <span className="font-semibold text-stone-900 dark:text-white">{a.role}</span>{" "}
                  &mdash;{" "}
                  {a.href ? (
                    <a
                      href={a.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-stone-300 dark:decoration-stone-600 hover:text-tue"
                    >
                      {a.context}
                    </a>
                  ) : (
                    a.context
                  )}
                </p>
                <span className="font-mono text-xs text-stone-400 dark:text-stone-500 whitespace-nowrap">
                  {a.period}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <SectionHeader index="05" title="Languages Spoken" />
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {languagesSpoken.map((l) => (
              <p key={l.language} className="text-sm">
                <span className="text-stone-800 dark:text-stone-100 font-medium">
                  {l.language}
                </span>{" "}
                <span className="font-mono text-xs text-stone-400 dark:text-stone-500">
                  — {l.level}
                </span>
              </p>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
