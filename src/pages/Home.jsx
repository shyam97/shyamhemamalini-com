import { Link } from "react-router-dom";
import { ArrowUpRight, Camera, Github, Linkedin, Mail } from "lucide-react";
import ProjectCard from "../components/ProjectCard";
import UnsplashIcon from "../components/UnsplashIcon";
import { RESUME_DATA } from "../data/resume";
import { PROJECTS } from "../data/projects";
import { mailtoHref } from "../lib/email";

const PROJECTS_BY_YEAR = [
  ...PROJECTS.filter((p) => p.pinned),
  ...PROJECTS.filter((p) => !p.pinned).sort((a, b) => Number(b.period) - Number(a.period)),
];

const ABOUT_ITEMS = [
  "Computational physics engineer",
  "Finishing a PhD at TU/e on turbulent iron powder combustion",
  <>
    Interested in <span className="text-tue">R&amp;D</span>,{" "}
    <span className="text-tue">CFD</span>,{" "}
    <span className="text-tue">scientific software development</span>, and{" "}
    <span className="text-tue">thermal &amp; flow engineering</span> roles
  </>,
  "Hobbyist photographer",
  "Tinkering with home networks on the side",
];

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
      <header className="text-center mb-20">
        <h1 className="font-serif text-3xl md:text-4xl tracking-tight text-black dark:text-white">
          {RESUME_DATA.profile.name}
        </h1>

        <div className="mt-6 flex items-center justify-center gap-5">
          <a
            href={mailtoHref()}
            aria-label="Email"
            className="text-stone-400 hover:text-black dark:hover:text-white transition-colors"
          >
            <Mail size={18} />
          </a>
          <a
            href={RESUME_DATA.profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-stone-400 hover:text-black dark:hover:text-white transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={RESUME_DATA.profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-stone-400 hover:text-black dark:hover:text-white transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href={RESUME_DATA.profile.unsplash}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Unsplash"
            className="text-stone-400 hover:text-black dark:hover:text-white transition-colors"
          >
            <UnsplashIcon size={18} />
          </a>
        </div>

        <div className="mt-10 max-w-md mx-auto text-left">
          <h2 className="text-sm font-semibold tracking-[0.15em] text-black dark:text-white uppercase mb-3">
            About Me
          </h2>
          <ul className="font-mono text-sm text-stone-600 dark:text-stone-300 space-y-1.5">
            {ABOUT_ITEMS.map((item, i) => (
              <li key={i} className="flex gap-2.5">
                <span className="text-stone-400 dark:text-stone-600">-</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-row items-center justify-center gap-3">
          <Link
            to="/cv"
            className="relative w-16 h-16 flex items-center justify-center rounded-2xl border-2 border-tue text-black dark:text-white font-medium hover:bg-tue hover:text-white transition-colors"
          >
            CV
            <ArrowUpRight size={12} className="absolute top-1.5 right-1.5" />
          </Link>
          <Link
            to="/photography"
            aria-label="Photography"
            className="relative w-16 h-16 flex items-center justify-center rounded-2xl border-2 border-sunflower-400 text-black dark:text-white hover:bg-sunflower-400 hover:text-black transition-colors"
          >
            <Camera size={20} />
            <ArrowUpRight size={12} className="absolute top-1.5 right-1.5" />
          </Link>
        </div>
      </header>

      <section>
        <h2 className="text-sm font-semibold tracking-[0.15em] text-black dark:text-white uppercase mb-6">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-start">
          {PROJECTS_BY_YEAR.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
