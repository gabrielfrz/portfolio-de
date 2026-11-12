import { assetPath } from "@/lib/asset-path";
import Image from "next/image";
import type { Project } from "@/content/portfolio";
export function ProjectArt({ variant }: { variant: Project["variant"] }) {
  if (variant === "cloud") return <div className="ford-project-cover"><div className="project-brand-bar"><Image src={assetPath("/brands/ford.png")} alt="Ford" width={140} height={60} /><span className="mono">ENGINEERING DASHBOARD</span></div><div className="ford-cover-screen"><Image src={assetPath("/work/ford/cae.png")} alt="Ford engineering dashboard showing CAE assessment metrics and charts with synthetic demonstration data" width={1280} height={1344} sizes="(max-width:760px) 90vw, 50vw" /></div><div className="ford-cover-caption mono"><span>PYTHON → FASTAPI → ANGULAR</span><span>DEMO / SYNTHETIC DATA</span></div></div>;
  return <div className="act-logo-cover"><Image src={assetPath("/brands/act.png")} alt="ACT Investimentos" width={176} height={24} unoptimized /></div>;
}
