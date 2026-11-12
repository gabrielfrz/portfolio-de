import { fordStudy, type TechnicalStudy } from "./ford-study";
export type PipelineStage = {
  name: string;
  subtitle: string;
  description: string;
};
export type StudySection = { id: string; title: string; body: string };
export type ProjectImage = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};
export type Project = {
  slug: string;
  number: string;
  organization: string;
  sector: string;
  title: string;
  summary: string;
  technologies: string[];
  role: string;
  period: string | null;
  variant: "cloud" | "finance";
  sections: StudySection[];
  gallery?: ProjectImage[];
  architecture?: PipelineStage[];
  study?: TechnicalStudy;
};
export const profile = {
  name: "Gabriel Aragão",
  title: "Data Engineer",
  location: "Brazil",
  introduction:
    "Working at the intersection of data infrastructure, thoughtful architecture, and the systems that connect them.",
  email: "gabrielmbaragao@gmail.com",
  linkedin: "https://www.linkedin.com/in/gabriel-aragaoeng/",
  github: "https://github.com/gabrielfrz",
};
export const pipeline: PipelineStage[] = [
  {
    name: "Sources",
    subtitle: "Collect",
    description:
      "The origin of a dataset. This illustrative stage can hold source systems, files, databases, and external services.",
  },
  {
    name: "Ingestion",
    subtitle: "Receive",
    description:
      "The entry point. Future documentation can describe batch schedules, event handling, validation, and recovery.",
  },
  {
    name: "Processing",
    subtitle: "Transform",
    description:
      "The transformation layer. Add real business rules, orchestration, quality checks, and implementation details here.",
  },
  {
    name: "Storage",
    subtitle: "Persist",
    description:
      "The persistence layer. Add the actual data model, partitioning strategy, retention, and storage decisions.",
  },
  {
    name: "APIs",
    subtitle: "Serve",
    description:
      "The service boundary. Document real interfaces, contracts, access patterns, and integration choices.",
  },
  {
    name: "Consumption",
    subtitle: "Use",
    description:
      "Where data becomes usable. Replace this example with the actual reporting, application, or analytics consumers.",
  },
];
const sections: StudySection[] = [
  {
    id: "context",
    title: "The context behind the system.",
    body: "Space for the project context, the problem being addressed, and the constraints that shaped the work. The detailed account will be added with verified project information.",
  },
  {
    id: "decisions",
    title: "Good systems are a series of considered decisions.",
    body: "This section will document a technical decision, the alternatives considered, and the trade-offs involved. No architectural choices are attributed to this experience yet.",
  },
  {
    id: "implementation",
    title: "From architecture to implementation.",
    body: "A place for selected implementation details, annotated code, processing flows, and approved project screenshots.",
  },
  {
    id: "impact",
    title: "What changed. What was learned.",
    body: "Verified outcomes, engineering lessons, and further improvements will be added here. No performance metrics or business results have been assumed.",
  },
];
export const projects: Project[] = [
  {
    slug: "ford",
    number: "01",
    organization: "Ford",
    sector: "Automotive · Cloud infrastructure",
    title: "D&R Engineering\nDashboard.",
    summary:
      "Python data pipelines, BigQuery query services, and an Angular dashboard for engineering assessments and program readiness.",
    technologies: ["GCP", "BigQuery", "Python", "SQL", "FastAPI", "Angular"],
    role: "Data Engineering",
    period: null,
    variant: "cloud",
    study: fordStudy,
    sections,
  },
  {
    slug: "act-investimentos",
    number: "02",
    organization: "ACT Investimentos",
    sector: "Finance · Data operations",
    title: "Connecting the\nfinancial picture.",
    summary:
      "Advanced SQL, faster dashboards, and financial APIs built with Go and Java / Spring Boot.",
    technologies: ["Azure / Entra ID", "Microsoft Graph", "SQL / CTEs", "MySQL", "Go", "Protobuf", "Java / Spring Boot", "Python", "Angular", "Redis", "Containers", "Version control"],
    role: "Data Engineering",
    period: "Aug 2025 — Present",
    variant: "finance",
    sections,
  },
];
export const expertise = [
  {
    title: "Data systems",
    number: "01",
    description:
      "Pipelines, processing, and the architecture that holds them together.",
    skills: "Data engineering / ETL & ELT / Data architecture",
  },
  {
    title: "Cloud & storage",
    number: "02",
    description: "The foundations for accessible, well-structured data.",
    skills: "Cloud platforms / BigQuery / SQL & databases",
  },
  {
    title: "Code & connections",
    number: "03",
    description: "Automation and services that connect one system to the next.",
    skills: "Python / Backend development / Integrations",
  },
];

export type Achievement = {
  id: string;
  category: string;
  organization: string;
  title: string;
  detail: string;
  photo: ProjectImage | null;
  description: string;
  href?: string;
};
export const achievements: Achievement[] = [
  {
    id: "nasa-space-apps",
    category: "HACKATHON / AWARD",
    organization: "NASA Space Apps",
    title: "People’s Choice Award",
    detail: "BrazilianStorm · NASA Space Apps 2024",
    description:
      "With BrazilianStorm, I processed, explored and visualized climate data using Python, pandas and Matplotlib. We connected analytical findings with an interactive story about Alice, a teenager in Roraima affected by wildfires — turning environmental data into an accessible narrative. Recognized with the People’s Choice Award in Brazil.",
    href: "https://www.spaceappschallenge.org/nasa-space-apps-2024/find-a-team/brazilianstorm/?tab=project",
    photo: null,
  },
  {
    id: "harvard-mun",
    category: "INTERNATIONAL EXPERIENCE",
    organization: "Harvard Model United Nations",
    title: "Harvard Model\nUnited Nations",
    detail: "Boston, Massachusetts · 2020",
    description:
      "I represented Brazil as a Brazilian student at Harvard Model United Nations in Boston, taking part in the Disarmament and International Security Committee. An experience in international dialogue, negotiation and exchanging perspectives across cultures.",
    photo: {
      src: "/achievements/harvard-widener.jpg",
      alt: "Widener Library at Harvard University, with crimson Harvard banners",
      caption: "Widener Library, Harvard · Campus photograph",
      width: 1600,
      height: 1068,
    },
  },
];
