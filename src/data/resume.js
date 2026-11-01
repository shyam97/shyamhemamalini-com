/**
 * CV content. Mirrors public/SSHemamalini_CV.pdf (wording, structure and
 * positioning toward computational engineering for the energy transition),
 * plus web-only extras such as advisors, links and per-entry keywords.
 * Edit this file to update the site — no component code needs to change.
 */
export const RESUME_DATA = {
  profile: {
    name: "Shyam Hemamalini",
    title: "Computational Engineer",
    // Rendered as two fixed lines (not wrapped at whatever point the
    // viewport happens to break it), so this is an array of lines, not
    // a single string.
    subtitle: ["Energy & Heat Modelling", "Python · Fortran · C++"],
    photo: "/profile2.jpg",
    github: "https://github.com/shyam97",
    linkedin: "https://linkedin.com/in/shyamhemamalini",
    unsplash: "https://unsplash.com/@thezenoeffect",
    nationality: "Dutch",
    availability: "November 2026",
    cvPdf: "/SSHemamalini_CV.pdf",
  },
  // Array of paragraphs (rendered with a gap between each), not one block.
  summary: [
    "A computational engineer well-versed in Python, Fortran and C++, with a PhD in Mechanical Engineering from TU Eindhoven focused on numerical modelling of turbulent combustion of iron particles.",
    "Experienced in scientific communication and reporting, with 4 publications and 16 conference presentations. Passionate about programming in general, with hobbyist projects in homelabs, web dev and procedural art.",
    "Looking for a role catering to the energy transition, with a focus on building numerical tools and software solutions.",
  ],
  expertise: [
    {
      label: "Python Stack",
      items: ["NumPy", "SciPy", "pandas", "Polars", "Matplotlib", "h5py (HDF5)", "Jupyter"],
    },
    {
      label: "Modelling & Analysis",
      items: [
        "Heat & mass transfer",
        "Time series analysis",
        "Scenario & sensitivity analysis",
        "Model validation",
      ],
    },
    {
      label: "Scientific Computing",
      items: [
        "Numerical methods",
        "HPC",
        "Parallelization",
        "Data visualization",
        "Science communication",
      ],
    },
    {
      label: "Languages",
      items: ["Python", "HTML/CSS", "Fortran", "C/C++", "C#", "MATLAB", "CUDA", "OpenMP", "Bash"],
    },
    {
      label: "Tools",
      items: [
        "Git",
        "Linux",
        "VS Code",
        "Excel",
        "Agentic workflows",
        "OpenFOAM",
        "Ansys Fluent",
        "Ansys Workbench",
        "SolidWorks",
        "Simulink",
        "Blender",
        "ParaView",
      ],
    },
    {
      label: "Development Practices",
      items: [
        "Object-Oriented Design",
        "Unit & Integration Testing",
        "Agile/Scrum Workflows",
        "Agentic Workflows",
      ],
    },
    {
      label: "Research Areas",
      items: [
        "Multiphase flows",
        "Turbulent flows",
        "Species transport",
        "Chemically reacting flows",
        "Heat & mass transfer",
      ],
    },
  ],
  timeline: [
    {
      id: "tue-phd",
      role: "PhD in Mechanical Engineering",
      org: "Technische Universiteit Eindhoven",
      location: "Eindhoven, Netherlands",
      period: "Jul 2022 — Oct 2026",
      shortDesc:
        "Developed one of the first numerical frameworks, built with Python, Fortran and C++, to simulate turbulent iron powder combustion.",
      meta: [
        {
          label: "Dissertation",
          value:
            "Why do iron particles fail to burn? Numerical investigations into the interaction of turbulence and iron powder combustion.",
        },
        {
          label: "Advisors",
          value: "Dr. XiaoCheng Mi, prof.dr.ir. Jeroen van Oijen, Dr. Bénédicte Cuenot",
        },
      ],
      details: [
        "Developed one of the first numerical frameworks built with Python, Fortran and C++ to simulate turbulent iron powder combustion.",
        "Designed and executed simulations at a range of different scales and flow complexities, the results of which are well-cited in the research community.",
        "Kept the code modular and version-controlled with an Agile-like development process.",
        "Built a custom, parallel Python post-processing workflow to extract and analyze 500GB+ of output.",
        "Communicated findings across 16 conferences, gave 2 invited talks to audiences outside the immediate research group, and won the Best Poster Award at COMBURA 2024.",
      ],
      keywords: ["Python", "Fortran", "C++", "OpenFOAM", "DNS", "LES", "HPC", "Git"],
    },
    {
      id: "wur-ra",
      role: "Research Assistant",
      org: "Wageningen University & Research",
      location: "Wageningen, Netherlands",
      period: "Feb 2022 — Dec 2022",
      shortDesc:
        "Simulated indoor COVID-19 transmission to inform ventilation recommendations.",
      details: [
        "Simulated indoor COVID-19 transmission in Ansys Fluent, modelling turbulent airflow and particle transport in multiple configurations.",
        "Extended Ansys Fluent's solver with a custom, documented C UDF for the flow physics the standard models did not cover.",
        "Communicated findings on ventilation recommendations to non-technical stakeholders at the university.",
      ],
      keywords: ["Ansys Fluent", "C", "UDF", "Multiphase Flow"],
    },
    {
      id: "tud-msc",
      role: "Master of Science in Mechanical Engineering",
      org: "Technische Universiteit Delft",
      location: "Delft, Netherlands",
      period: "Aug 2019 — Dec 2021",
      shortDesc:
        "Specialization in Energy, Flow and Process; thesis on a Lagrangian passive scalar solver.",
      meta: [
        { label: "Specialization", value: "Energy, Flow and Process" },
        {
          label: "Thesis",
          value:
            "A Lagrangian passive scalar solver for mass transport in electrolytes and coupling to the particle-resolved solver Bluebottle (supervised by Dr. Lorenzo Botto).",
          href: "https://resolver.tudelft.nl/uuid:5adacfbf-71eb-42f6-b4fb-4f526e6c4bc4",
        },
      ],
      details: [
        "Master thesis: developed a novel C/CUDA/Python quantitative transport model, integrated it into Bluebottle, and validated predictions against experimental data.",
        "Focus on computational engineering for energy and flow & thermal (F&T) systems, with coursework in thermodynamics, heat and mass transfer, multiphase flow and numerical analysis.",
        "Teaching Assistant for the edX MOOC Technology for Intelligent and Integrated Energy Systems (2021–2023).",
      ],
      keywords: ["C", "CUDA", "Python", "Electrokinetics", "HPC"],
    },
    {
      id: "tno-intern",
      role: "Intern — MSc Internship",
      org: "TNO, Heat Transfer & Fluid Dynamics Group",
      location: "Delft, Netherlands",
      period: "Aug 2020 — Oct 2020",
      shortDesc:
        "Modelled multiphase liquid–gas flow and flow-induced vibration in flexible piping.",
      details: [
        "Modelled multiphase liquid–gas flow and flow-induced vibration in flexible piping.",
        "Built automated MATLAB pipelines for spectral (PSD) analysis of the time-series data, validated against in-house experiments.",
      ],
      keywords: ["Multiphase Flow", "MATLAB", "PSD", "Time Series"],
    },
    {
      id: "psg-jrf",
      role: "Junior Research Fellow",
      org: "PSG College of Technology",
      location: "Coimbatore, India",
      period: "Jul 2018 — Jun 2019",
      shortDesc:
        "First-principles models for closed-loop thermosiphon cooling, solar module heat losses and heat-sink natural convection.",
      details: [
        "Developed analytical multiphysics models from first principles to simulate closed-loop thermosiphon cooling, balancing buoyancy against viscous resistance.",
        "Built an iterative transient simulation model with 30-second time-step discretization to map daily solar irradiance profiles and quantify cumulative energy losses.",
        "Developed transient natural-convection models for a heat-sink manifold designed in SolidWorks.",
        "Optimized the design to 98.5% fin efficiency and validated it experimentally.",
      ],
      keywords: ["SolidWorks", "Thermal Design", "Natural Convection", "MATLAB"],
    },
    {
      id: "cit-beng",
      role: "Bachelor of Engineering in Mechanical Engineering",
      org: "Coimbatore Institute of Technology",
      location: "Coimbatore, India",
      period: "Aug 2014 — May 2018",
      shortDesc:
        "End-of-degree project on a geometrically optimized Y-frame folding bicycle; BAJA SAE India and eYantra robotics.",
      meta: [
        {
          label: "Specialization",
          value: "Mechanical design, thermodynamics, fluid mechanics and control systems",
        },
      ],
      details: [
        "End-of-degree project: geometrically optimized and fabricated a novel Y-frame folding bicycle, using nonlinear optimization and structural FEA to validate full-vehicle integrity under extreme loads.",
        "Led CAD/FEA structural validation of an all-terrain vehicle roll cage as Design Engineer, BAJA SAE India.",
        "Designed and simulated a naturally-convected passive cooling mechanism for photovoltaic panels in Ansys Fluent.",
        "Designed, assembled, and programmed an autonomous line-following and waste-sorting robot with a PID-controlled pick-and-place arm for the eYantra Robotics Competition (IIT Bombay).",
        "Developed embedded firmware in C# for ATmega microcontrollers, establishing low-level control loops for sensor processing and servo actuation.",
        "Used MATLAB/Simulink to model robot arm movements and grip control prior to hardware deployment.",
      ],
      keywords: ["SolidWorks", "FEA", "Optimization", "Ansys Workbench", "Ansys Fluent", "Robotics", "Simulink"],
    },
  ],
  publications: [
    {
      id: "pub1",
      title:
        "The influence of preferential concentration on the ignition and combustion of iron particles in a spherical suspension",
      authors: "Shyam Hemamalini, Lotte Meeuwsen, XiaoCheng Mi",
      venue: "In preparation",
      year: "2026",
    },
    {
      id: "pub2",
      title:
        "LES of iron-powder combustion in a jet-in-hot-coflow burner — Insights on flame structure and ignition characteristics",
      authors: "Shyam Hemamalini, XiaoCheng Mi",
      venue: "Proc. Combustion Symposium",
      year: "2026",
      href: "https://arxiv.org/abs/2608.28294",
      hrefLabel: "Preprint: arXiv:2608.28294",
    },
    {
      id: "pub3",
      title:
        "Effects of preferential concentration on the combustion of iron particles — A numerical study with homogeneous isotropic turbulence",
      authors: "Shyam Hemamalini, Bénédicte Cuenot, XiaoCheng Mi",
      venue: "Combustion & Flame",
      year: "2026",
      href: "https://doi.org/10.1016/j.combustflame.2026.115119",
      hrefLabel: "DOI:10.1016/j.combustflame.2026.115119",
    },
    {
      id: "pub4",
      title: "A theoretical analysis of timescales in preferential concentration of burning iron particles",
      authors: "Shyam Hemamalini, Bénédicte Cuenot, XiaoCheng Mi",
      venue: "Fuel — Short Communication (in review)",
      year: "2025",
      href: "https://dx.doi.org/10.2139/ssrn.5138232",
      hrefLabel: "Preprint: DOI:10.2139/ssrn.5138232",
    },
    {
      id: "pub5",
      title:
        "Numerical study probing the effects of preferential concentration on the combustion of iron particles in a mixing layer",
      authors: "Shyam Hemamalini, Bénédicte Cuenot, Jeroen van Oijen, XiaoCheng Mi",
      venue: "Proc. Combustion Symposium",
      year: "2024",
      href: "https://doi.org/10.1016/j.proci.2024.105617",
      hrefLabel: "DOI:10.1016/j.proci.2024.105617",
    },
  ],
  ancillary: [
    {
      id: "event-photographer",
      role: "Event Photographer",
      context: "Part-time professional photographer for various events at TU/e and outside",
      period: "2021 — Present",
    },
    {
      id: "ta1",
      role: "Teaching Assistant",
      context: "4RC30 — Introduction to Computational Fluid Dynamics, TU Eindhoven",
      period: "2023 — 2025",
    },
    {
      id: "ta2",
      role: "Teaching Assistant",
      context: '"Technology for Intelligent and Integrated Energy Systems" — MOOC on edX',
      period: "2021 — 2023",
      href: "https://www.edx.org/course/intelligent-integrated-energy-systems-1",
    },
    {
      id: "volunteer",
      role: "Volunteer Teacher",
      context: "High-school physics and chemistry, Abdul Kalam Institute for IIT-JEE, Coimbatore, India",
      period: "2018 — 2019",
    },
  ],
  languagesSpoken: [
    { language: "English", level: "Fluent" },
    { language: "Dutch", level: "Intermediate (A2+)" },
    { language: "German", level: "Intermediate (A2)" },
    { language: "French", level: "Beginner (A1)" },
    { language: "Tamil", level: "Native" },
  ],
};
