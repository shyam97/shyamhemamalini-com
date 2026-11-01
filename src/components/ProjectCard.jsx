import { Link } from "react-router-dom";
import { ArrowUpRight, Github } from "lucide-react";

export default function ProjectCard({ project }) {
  const Wrapper = project.href ? "a" : project.cvAnchor ? Link : "div";
  const wrapperProps = project.href
    ? { href: project.href, target: "_blank", rel: "noopener noreferrer" }
    : project.cvAnchor
      ? { to: `/cv#${project.cvAnchor}` }
      : {};
  const isLinked = Boolean(project.href || project.cvAnchor);

  return (
    <div className="relative">
      <Wrapper
        {...wrapperProps}
        className="group relative block w-full aspect-square overflow-hidden rounded-2xl bg-stone-900 border border-black/10 dark:border-white/10"
      >
        {project.background && (
          <img
            src={project.background}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

        <div className="absolute inset-x-0 top-0 p-4 flex items-start justify-between gap-3">
          <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/80">
            {project.category}
          </span>
          <span className="font-mono text-[10px] text-white/70">{project.period}</span>
        </div>

        <div className={`absolute inset-x-0 bottom-0 p-4 ${project.repo ? "pr-11" : ""}`}>
          {project.title && (
            <h3 className="text-sm font-semibold text-white flex items-center gap-1">
              {project.title}
              {isLinked && <ArrowUpRight size={12} className="text-white/70 shrink-0" />}
            </h3>
          )}
          <p className="text-xs text-white/75 mt-1 leading-snug">{project.description}</p>
          {project.keywords?.length > 0 && (
            <p className="font-mono text-[10px] text-white/60 mt-2">
              {project.keywords.join("  ·  ")}
            </p>
          )}
        </div>
      </Wrapper>

      {/* Sibling, not child: an <a> can't be nested inside the card's <a>. */}
      {project.repo && (
        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} source on GitHub`}
          className="absolute bottom-4 right-4 text-white/70 hover:text-white"
        >
          <Github size={16} />
        </a>
      )}
    </div>
  );
}
