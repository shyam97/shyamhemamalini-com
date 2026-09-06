/**
 * CV content. Synthesized from info/SSHemamalini_CV.tex plus several
 * job-tailored resume variants, positioned toward scientific software
 * development for CFD/thermal engineering while staying open to process
 * engineering, physics modelling, R&D, and mechanical design roles.
 * Edit this file to update the site — no component code needs to change.
 */
export const RESUME_DATA = {
  profile: {
    name: "Shyam Hemamalini",
    title: "Scientific Software Engineer",
    subtitle: "CFD · Thermal & Flow Engineering · Numerical Modelling · HPC",
    photo: "/profile2.jpg",
    github: "https://github.com/shyam97",
    linkedin: "https://linkedin.com/in/shyamhemamalini",
    unsplash: "https://unsplash.com/@thezenoeffect",
    nationality: "Nationality: Dutch",
    availability: "Availability: September 2026",
    cvPdf: "/Shyam_Hemamalini_CV.pdf",
  },
  summary:
    "A computational engineer specializing in scientific software development for fluid and thermal systems — designing, testing, and validating high-performance numerical solvers from first-principles physics through to production-quality, version-controlled code. Equally comfortable applying that same foundation to mechanical design, process engineering, and industrial R&D. Adept at owning a problem end-to-end: solver architecture, HPC implementation, data analysis, and clear technical communication.",
  expertise: [
    {
      label: "Research Interests",
      items: [
        "Scientific Software Development",
        "CFD & Numerical Modelling",
        "Thermal & Flow Engineering",
        "Mechanical Design & R&D",
      ],
    },
    {
      label: "Languages",
      items: ["Python", "Fortran", "MATLAB", "C/C++", "C#", "CUDA", "OpenMP", "Bash"],
    },
    {
      label: "Tools",
      items: [
        "Ansys Fluent",
        "OpenFOAM",
        "Ansys Workbench",
        "SolidWorks",
        "Simulink",
        "Blender",
        "ParaView",
        "Git",
        "VS Code",
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
      period: "Jul 2022 — Aug 2026",
      shortDesc:
        "Building and validating a hybrid multiphysics solver — DNS and LES — for turbulent iron powder combustion, developed as tested, version-controlled software with international collaborators.",
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
        "Designed and implemented a hybrid multiphysics solver — a high-fidelity Fortran DNS framework (NTMIX-CHEMKIN) and a custom object-oriented C++ OpenFOAM LES solver — using four-way Euler–Lagrange coupling and modular, testable code components.",
        "Worked in an iterative, agile-style development cycle with international collaborators (CERFACS, France), maintaining code via Git version control and validating changes against reference simulations.",
        "Designed and executed DNS/LES of turbulent iron powder flames across scales — Kolmogorov-scale forced HIT, mesoscale mixing layers, and lab-scale jet-in-hot-coflow burners — translating results into actionable conclusions for burner-scale operation.",
        "Built a parallel Python post-processing and visualization framework for 500GB+ CFD datasets; published 5 papers, presented at 14 conferences and 2 invited seminar talks, and won the Best Poster Award at COMBURA 2024.",
      ],
      keywords: [
        "C++",
        "Fortran",
        "OpenFOAM",
        "DNS",
        "LES",
        "Euler-Lagrange",
        "OOP",
        "Git",
        "HPC",
        "Python",
      ],
    },
    {
      id: "wur-ra",
      role: "Research Assistant",
      org: "Wageningen University & Research",
      location: "Wageningen, Netherlands",
      period: "Feb 2022 — Dec 2022",
      shortDesc:
        "Modelled indoor airborne virus transmission dynamics to translate CFD results into ventilation recommendations.",
      details: [
        "Modelled transient multiphase airflow in Ansys Fluent to evaluate and quantify COVID-19 infection risk across architectural scenarios.",
        "Developed a modular User-Defined Function (UDF) plugin in C for high-velocity, multiphase cough/sneeze flow physics.",
        "Translated complex CFD data into actionable ventilation and indoor safety recommendations for non-technical stakeholders.",
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
        "Specialization in Energy, Flow, and Process Engineering; thesis on a Lagrangian passive scalar solver.",
      meta: [
        { label: "Specialization", value: "Energy, Flow, and Process Engineering" },
        {
          label: "Thesis",
          value:
            "A Lagrangian passive scalar solver for mass transport in electrolytes and coupling to the particle-resolved solver Bluebottle (supervised by Dr. Lorenzo Botto).",
          href: "https://resolver.tudelft.nl/uuid:5adacfbf-71eb-42f6-b4fb-4f526e6c4bc4",
        },
      ],
      details: [
        "Developed an object-oriented C/CUDA Lagrangian transport solver based on the Nernst–Planck equation, built from scratch and integrated into the open-source multiphase solver Bluebottle.",
        "Used the tool to estimate current density in water electrolyzers where ionic flow is impeded by gas bubbles, validating predictions against experimental data.",
      ],
      keywords: ["C", "CUDA", "Nernst-Planck", "Electrokinetics", "HPC"],
    },
    {
      id: "tno-intern",
      role: "Intern — MSc Internship",
      org: "TNO, Heat Transfer & Fluid Dynamics Group",
      location: "Delft, Netherlands",
      period: "Aug 2020 — Oct 2020",
      shortDesc:
        "Modelled multiphase liquid–gas flows through curved piping geometries in OpenFOAM and Ansys Fluent.",
      details: [
        "Modelled multiphase liquid–gas flows through flexible and curved piping in OpenFOAM and Ansys Fluent.",
        "Developed automated MATLAB post-processing pipelines, validating Power Spectral Density (PSD) and flow-induced vibration results against in-house experiments.",
      ],
      keywords: ["OpenFOAM", "Ansys Fluent", "MATLAB", "PSD"],
    },
    {
      id: "psg-jrf",
      role: "Junior Research Fellow",
      org: "PSG College of Technology",
      location: "Coimbatore, India",
      period: "Jul 2018 — Jun 2019",
      shortDesc:
        "First-principles models for closed-loop thermosiphon cooling and solar module heat losses.",
      details: [
        "Developed analytical multiphysics models from first principles to simulate closed-loop thermosiphon cooling, balancing buoyancy against viscous resistance.",
        "Built an iterative transient simulation model with 30-second time-step discretization to map daily solar irradiance profiles and quantify cumulative energy losses.",
        "Engineered and optimized a parallel-plate fin heat sink manifold in SolidWorks, achieving 98.5% fin efficiency and validating the design experimentally.",
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
        "End project: fabrication of a foldable portable cycle for optimized frame design.",
      meta: [
        {
          label: "Specialization",
          value: "Mechanical design, thermodynamics, fluid mechanics and control systems",
        },
      ],
      details: [
        "Geometrically optimized and fabricated a novel Y-frame folding bicycle, formulating a multivariate non-linear objective function to establish an optimal 72° head angle.",
        "Developed 3D CAD models and executed structural finite element analysis (FEA), validating full-vehicle integrity under 120 kg loads with factors of safety of 2–3.",
        "Designed and simulated a naturally-convected passive cooling mechanism for photovoltaic panels in Ansys Fluent.",
      ],
      keywords: ["SolidWorks", "FEA", "Structural Design", "Optimization"],
    },
    {
      id: "baja-design",
      role: "Design Engineer",
      org: "Team Drifting Dragons",
      location: "Coimbatore, India",
      period: "May 2016 — Feb 2017",
      shortDesc:
        "Led the design department for a BAJA SAE India all-terrain racing vehicle.",
      details: [
        "Led the design department for a multidisciplinary BAJA SAE India team, overseeing CAD engineering, full-vehicle system integration, and assembly of an all-terrain racing vehicle.",
        "Engineered and optimized the structural roll cage using SolidWorks, ensuring driver safety and seamless tolerance stack-up during assembly.",
        "Executed structural solid dynamics simulations (FEA) in Ansys Workbench, conducting static, impact, and torsional stiffness analyses.",
      ],
      keywords: ["SolidWorks", "Ansys Workbench", "FEA", "Vehicle Design"],
    },
    {
      id: "eyantra",
      role: "Participant, eYantra Robotics Competition",
      org: "Coimbatore Institute of Technology",
      location: "Coimbatore, India",
      period: "Jun 2015 — Apr 2016",
      shortDesc:
        "Designed and programmed an autonomous line-following and waste-sorting robot.",
      details: [
        "Designed, assembled, and programmed an autonomous line-following and waste-sorting robot for an IIT Bombay national competition.",
        "Developed embedded firmware in C# for ATmega microcontrollers, establishing low-level control loops for sensor processing and servo actuation.",
        "Used MATLAB/Simulink to model robot arm movements and grip control prior to hardware deployment.",
      ],
      keywords: ["C#", "Embedded Systems", "MATLAB", "Simulink", "Robotics"],
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
      venue: "Proc. Combustion Symposium (accepted)",
      year: "2026",
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
      year: "2026",
      href: "https://dx.doi.org/10.2139/ssrn.5138232",
      hrefLabel: "Preprint DOI:10.2139/ssrn.5138232",
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
};
