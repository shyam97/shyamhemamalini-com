/**
 * CV content, transcribed from info/SSHemamalini_CV.tex.
 * Edit this file to update the site — no component code needs to change.
 */
export const RESUME_DATA = {
  profile: {
    name: "Shyam Hemamalini",
    title: "Computational Mechanical Engineer",
    subtitle: "CFD · Flow & Thermal · Mechanical Design · Code Development",
    photo: "/profile2.jpg",
    github: "https://github.com/shyam97",
    linkedin: "https://linkedin.com/in/shyamhemamalini",
    unsplash: "https://unsplash.com/@thezenoeffect",
    nationality: "Nationality: Dutch",
    availability: "Available immediately",
    cvPdf: "/Shyam_Hemamalini_CV.pdf",
  },
  summary:
    "Highly skilled computational engineer and high-impact R&D engineer with a strong foundation in first-principles physics and extensive experience developing end-to-end mechanical, flow & thermal, and energy systems. A dedicated researcher with a distinct industrial outlook, adept at leveraging high-performance computing (HPC) alongside a robust suite of commercial and open-source software packages to drive product innovation from concept to validation across mechanical engineering.",
  expertise: [
    {
      label: "Research Interests",
      items: [
        "Multiphysics Modelling & Simulation",
        "High-Performance Computing",
        "Mechanical Design & Control Systems",
      ],
    },
    { label: "Languages", items: ["Python", "Fortran", "MATLAB", "C/C++", "C#", "CUDA", "Bash"] },
    {
      label: "Tools",
      items: [
        "Ansys Fluent",
        "OpenFOAM",
        "SolidWorks",
        "Blender",
        "ParaView",
        "Adobe Suite",
        "Git",
        "VS Code",
        "Simulink",
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
        "Mechanical design",
        "Solid dynamics",
      ],
    },
  ],
  timeline: [
    {
      id: "tue-phd",
      role: "PhD Candidate in Mechanical Engineering",
      org: "Technische Universiteit Eindhoven",
      location: "Eindhoven, Netherlands",
      period: "Jul 2022 — Jul 2026 (expected)",
      shortDesc:
        "Numerical investigations into why iron particles fail to burn — turbulence–iron powder combustion interaction.",
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
        "Developed a hybrid multiphysics solver for turbulent iron powder flame simulations with a high-fidelity Fortran DNS framework (NTMIX-CHEMKIN) and a custom-built C++ OpenFOAM LES solver using a four-way Euler–Lagrange approach.",
        "Engineered a scalable Python post-processing framework with scipy, h5py, and pandas, optimizing memory management and parallel execution to handle 500GB+ datasets.",
        "Designed and executed research-level simulations yielding analytical insights on flow–particle interactions in large-scale burners.",
        "Submitted 5 papers to top journals (PROCI, CnF, Fuel), presented at over 10 conferences, and won the Best Poster Award at COMBURA 2024.",
      ],
      keywords: ["C++", "Fortran", "OpenFOAM", "DNS", "LES", "Euler-Lagrange", "HPC", "Python"],
    },
    {
      id: "wur-ra",
      role: "Research Assistant",
      org: "Wageningen University & Research",
      location: "Wageningen, Netherlands",
      period: "Feb 2022 — Dec 2022",
      shortDesc:
        "Modeled indoor airborne virus transmission dynamics to quantify COVID-19 infection risk.",
      details: [
        "Modeled transient indoor airborne virus transmission dynamics using Ansys Fluent to evaluate and quantify COVID-19 infection risks across various architectural scenarios.",
        "Developed and implemented a custom User-Defined Function (UDF) plugin in C to simulate the multiphase, high-velocity fluid dynamics of human coughing and sneezing events.",
        "Translated complex CFD data into actionable epidemiological insights, providing a quantitative framework to optimize indoor safety protocols and ventilation design.",
      ],
      keywords: ["Ansys Fluent", "C", "UDF", "Multiphase Flow", "Epidemiology"],
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
        "Developed a novel C/CUDA-based Lagrangian solver based on the Nernst–Planck equation to model multi-physics ionic flux, integrating it into the open-source multiphase solver Bluebottle.",
        "Utilized high-performance parallelized computing to simulate electrokinetic transport in water electrolyzers, isolating the impact of gas bubble impedance on current density.",
        "Performed rigorous validation against physical experimental data, proving the framework's efficacy as an industrial-grade predictive modeling tool.",
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
        "Modeled multiphase liquid–gas flows through curved piping geometries in OpenFOAM and Ansys Fluent.",
      details: [
        "Modeled complex multiphase liquid-gas flows through flexible and curved piping geometries in OpenFOAM and Ansys Fluent; generated meshes optimized for boundary layer resolution and phase-interface tracking.",
        "Developed automated MATLAB post-processing pipelines to analyze transient hydrodynamic force magnitudes and compute Power Spectral Density (PSD) data, identifying flow-induced vibration frequencies.",
        "Validated CFD models against in-house experimental data, performing error-quantification and spectral analysis across varying pipe configurations.",
      ],
      keywords: ["OpenFOAM", "Ansys Fluent", "MATLAB", "PSD", "Multiphase Flow"],
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
        "Engineered and optimized a parallel-plate fin heat sink manifold using SolidWorks, applying Teertstra's analytical equations to achieve 98.5% fin efficiency.",
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
        "Engineered custom hardware mechanisms, including telescoping forks and notch-key sliding locks, validated through real-time endurance testing.",
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
        "Utilized MATLAB/Simulink to model robot arm movements and grip control prior to hardware deployment.",
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
