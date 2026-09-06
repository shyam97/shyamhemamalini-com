import { useEffect, useRef, useState } from "react";
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

const [FIRST_NAME, ...LAST_NAME_PARTS] = RESUME_DATA.profile.name.split(" ");
const LAST_NAME = LAST_NAME_PARTS.join(" ");

// Automatic re-trigger interval — every 10s, unless a hover/press trigger
// resets the clock first. Each play itself runs a 5s animation (see the
// chroma-red/chroma-yellow keyframes in tailwind.config.js).
const GLITCH_INTERVAL_MS = 10000;

// The real (white/black) text sits in its own z-10 stacking context so it
// always paints above the two absolutely-positioned ghost layers, which
// would otherwise win by default (positioned elements paint over static
// ones regardless of DOM order). Ghost direction comes from the --gx/--gy
// custom properties set on the ancestor <h1> — see Home() below.
//
// `playKey` changing remounts the ghost spans (via React `key`), which
// restarts their CSS animation from 0% — the standard way to replay a
// finished (or interrupt a running) CSS animation on demand.
function GlitchName({ text, className = "", playKey }) {
  const ghostBase = "absolute inset-0 pointer-events-none select-none";
  return (
    <span className={`relative inline-block whitespace-nowrap ${className}`}>
      <span className="relative z-10">{text}</span>
      <span key={`r${playKey}`} aria-hidden="true" className={`${ghostBase} text-tue animate-chroma-red`}>
        {text}
      </span>
      <span
        key={`y${playKey}`}
        aria-hidden="true"
        className={`${ghostBase} text-sunflower-400 animate-chroma-yellow`}
      >
        {text}
      </span>
    </span>
  );
}

const ABOUT_ITEMS = [
  "Computational physics engineer",
  "Finishing a PhD at TU/e on turbulent iron powder combustion",
  <>
    Interested in <span className="text-tue">R&amp;D</span>,{" "}
    <span className="text-tue">CFD</span>,{" "}
    <span className="text-tue">scientific software development</span>, and{" "}
    <span className="text-tue">thermal &amp; flow engineering</span> roles
  </>,
  <>
    Hobbyist <span className="text-sunflower-400">photographer</span>
  </>,
  <>
    Tinkering with <span className="text-green-500">home networks</span> on the side
  </>,
];

export default function Home() {
  const [angle, setAngle] = useState(() => Math.random() * Math.PI * 2);
  const [playKey, setPlayKey] = useState(0);
  const timerRef = useRef(null);

  const scheduleNext = () => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(playGlitch, GLITCH_INTERVAL_MS);
  };

  const playGlitch = () => {
    setAngle(Math.random() * Math.PI * 2);
    setPlayKey((k) => k + 1);
    scheduleNext();
  };

  useEffect(() => {
    scheduleNext();
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
      <header className="text-center mb-12">
        <h1
          className="font-space-mono lowercase leading-tight tracking-tight text-black dark:text-white"
          style={{ "--gx": Math.cos(angle), "--gy": Math.sin(angle) }}
          onMouseEnter={playGlitch}
          onTouchStart={playGlitch}
        >
          <GlitchName
            text={FIRST_NAME}
            className="text-6xl sm:text-7xl md:text-8xl -translate-x-[1ch]"
            playKey={playKey}
          />
          <br />
          <GlitchName
            text={LAST_NAME}
            className="text-5xl sm:text-6xl md:text-7xl translate-x-[1ch]"
            playKey={playKey}
          />
        </h1>

        <div className="mt-10 flex items-center justify-center gap-5">
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
