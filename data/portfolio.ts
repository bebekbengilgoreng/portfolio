export const portfolio = {
  person: {
    name: "Michiel Aelis Wijaya",
    pronouns: "She/Her",
    email: "michielaelisw@gmail.com",
    title: "Medical student working across software engineering, research, and digital systems.",
    introduction:
      "I study medicine at the University of Indonesia and work on projects where clinical questions meet software. My interests span medical technology, research, and the digital systems that support international health organizations.",
    profileFacts: [
      ["Education", "MD candidate, University of Indonesia · 2024–2030"],
      ["Focus", "Clinical AI, medical imaging, and digital health"],
    ],
    links: [
      { label: "GitHub", href: "https://github.com/", status: "View GitHub" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/michiel-aelis/", status: "View LinkedIn profile" },
      { label: "Email", href: "mailto:michielaelisw@gmail.com", status: "Write an email" },
    ],
  },
  navigation: [
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Research", href: "#research" },
    { label: "Contact", href: "#contact" },
  ],
  projects: [
    {
      number: "01",
      title: "Cross-Platform AI-Integrated DICOM Viewer",
      role: "Research Project",
      organization: "Medical Imaging",
      period: "Year to be added",
      href: "https://dicom.michielaelis.site/",
      description:
        "Developed a high-performance, production-grade cross-platform DICOM viewer for desktop-native and mobile-native platforms, with integrated AI-assisted segmentation.",
      metadata: [
        ["Role", "Research project"],
        ["Stack", "Tauri · VT · macOS · iOS"],
        ["Platform", "Web, iOS, iPadOS, macOS"],
        ["Research area", "AI-assisted medical imaging"],
      ],
      featured: true,
    },
    {
      number: "02",
      title: "IndoMedScribe",
      role: "Researcher",
      organization: "Clinical AI",
      period: "2026–present",
      href: null,
      description: "Contributed to the development and clinical validation of an AI-based medical documentation system.",
      metadata: [],
      featured: false,
    },
    {
      number: "03",
      title: "Kyno",
      role: "Co-founder",
      organization: "Medtech",
      period: "2026–present",
      href: null,
      description: "Led research and development for medtech devices as part of the founding team.",
      metadata: [],
      featured: false,
    },
    {
      number: "04",
      title: "Medical Student International 45 Website",
      role: "Website Developer",
      organization: "IFMSA",
      period: "Year to be added",
      href: null,
      description:
        "Developed and maintained the MSI 45 webpage within IFMSA's existing website architecture, integrating modern web development while maintaining compatibility with the federation's platform, content structure, branding, usability, and performance.",
      metadata: [],
      featured: false,
    },
  ],
  experience: [
    {
      group: "Software Engineering & Research",
      items: [
        ["Cross-Platform AI-Integrated DICOM Viewer", "Research project", "Designed and developed a production-grade DICOM viewer for web, iOS, iPadOS, and macOS with integrated AI-assisted segmentation."],
        ["Researcher, IndoMedScribe", "2026–present", "Supports the development and clinical validation of an AI-based medical documentation system."],
        ["Co-founder, Kyno", "2026–present", "Leads research and development for medtech devices as part of the founding team."],
      ],
    },
    {
      group: "IFMSA",
      items: [
        ["IFMSA Medical Student International 45 Website Developer", "IFMSA", "Built and maintained the responsive MSI 45 webpage within IFMSA's existing platform, aligning its structure, branding, usability, and performance."],
        ["Exchange Trainer of TNET Pre-Asia Pacific Regional Meeting 2026", "Hong Kong, HKSAR", "Co-facilitated structured peer-education sessions and worked with the training team to shape the learning experience."],
        ["SCOPE Session Team for Asia Pacific Regional Meeting 2026", "Hong Kong, HKSAR", "Helped prepare and deliver regional SCOPE sessions, including materials, participant engagement, and team coordination."],
        ["General Delegate of March Meeting 2026", "Copenhagen, Denmark", "Represented CIMSA Indonesia at IFMSA's General Assembly through plenary discussions, global health sessions, and international collaboration."],
        ["IFMSA Training New Exchange Trainers (TNET) Certified Trainer", "Ioannina, Greece", "Developed facilitation, peer-education, and capacity-building skills for IFMSA exchange programs."],
        ["General Delegate of Asia-Pacific Regional Meeting 2025", "Osaka, Japan", "Represented CIMSA Indonesia in regional policy discussions, skill-building sessions, and cross-cultural collaboration."],
      ],
    },
    {
      group: "CIMSA-Indonesia",
      items: [
        ["Research and Development Coordinator of SCOPE CIMSA Indonesia", "2026–2027", "Coordinates assessment design and evidence synthesis to guide program quality and sustainable national development."],
        ["Media and Communication Team of SCOPE CIMSA Indonesia", "2025–2026", "Designed exchange-focused publications and campaigns in line with CIMSA and IFMSA visual identity guidance."],
        ["Research and Development Team of CIMSA Indonesia", "2025–2026", "Supported program evaluation, evidence-based activity development, and resources for local chapter capacity."],
      ],
    },
  ],
  research: {
    types: ["Publications", "Manuscripts", "Conference abstracts", "Ongoing research", "Technical research projects"],
    fields: ["Title", "Authors", "Venue", "Year", "Status", "DOI / link"],
  },
  education: {
    period: "2024–2030",
    degree: "Doctor of Medicine (MD)",
    school: "University of Indonesia",
    location: "Depok, Indonesia",
  },
  skills: [
    ["Software Engineering", ["iOS Development", "AI/ML Engineering", "Web Design and Development"]],
    ["Research & Development", ["Survey Design", "Data Synthesis", "AI/ML Research", "Systematic Review", "Meta-Analysis", "Scientific Writing"]],
    ["Workspace & Administration", ["Google Workspace", "Microsoft Office"]],
    ["Project Management", ["Trello", "Jira", "Todoist"]],
    ["Languages", ["Bahasa Indonesia — Native speaker", "English — Full professional", "Chinese — Elementary"]],
  ],
} as const;

export type Portfolio = typeof portfolio;
