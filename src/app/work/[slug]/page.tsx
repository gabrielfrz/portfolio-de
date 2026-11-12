import { assetPath } from "@/lib/asset-path";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { ActStudy } from "@/components/act-study";
import { DashboardExplorer } from "@/components/dashboard-explorer";
import { ProjectStack } from "@/components/project-stack";
import { Footer } from "@/components/footer";
import { projects } from "@/content/portfolio";
import { fordStudy } from "@/content/ford-study";
import { projectCases } from "@/content/project-cases";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return { title: project ? `${project.organization} · ${slug === "ford" ? "Case study" : "Engineering experience"}` : "Not found" };
}

export default async function CaseStudy({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project || (slug !== "ford" && slug !== "act-investimentos")) notFound();

  const study = projectCases[slug];
  const isFord = slug === "ford";
  const next = projects.find((item) => item.slug !== slug);

  return (
    <>
      <main id="main" className="project-study wrap">
        <Link href="/#work" className="study-back"><ArrowLeft size={18} /> All projects</Link>
        <header className={`study-opening ${isFord ? "study-opening-ford" : "study-opening-act"}`}>
          <div className="study-brand">
            <Image
              src={assetPath(isFord ? "/brands/ford-oval.svg" : "/brands/act.png")}
              alt={project.organization}
              width={isFord ? 112 : 176}
              height={isFord ? 42 : 24}
              unoptimized
            />
            <span className="mono">{isFord ? "International engineering project" : "Engineering experience"}</span>
          </div>
          <h1>{study.title}</h1>
          <p className="study-brief">{study.brief}</p>
          {isFord && <p className="study-international">I collaborated in English with engineers from different countries to define requirements and business rules for vehicle engineering data.</p>}
          <nav aria-label="On this page" className="study-jump">
            <a href="#context">Overview</a>
            <a href="#contributions">My contributions</a>
            <a href="#project-stack">Technology stack</a>
            {isFord ? (
              <><a href="#architecture">Architecture</a><a href="#dashboard">Dashboard</a></>
            ) : (
              <a href="#automation">Selected work</a>
            )}
          </nav>
        </header>
        <div className="study-reading">
          <section aria-labelledby="context">
            <h2 id="context">{isFord ? "The problem" : "Scope of work"}</h2>
            <p>{study.context}</p>
          </section>
          <section aria-labelledby="contributions">
            <h2 id="contributions">{isFord ? "What I did" : "Areas of contribution"}</h2>
            <div className="study-contributions">
              {study.work.map(({ title, stack, detail }) => (
                <article key={title}>
                  <h3>{title}</h3>
                  <p className="study-stack">{stack}</p>
                  <p>{detail}</p>
                </article>
              ))}
            </div>
          </section>
          <ProjectStack isFord={isFord} />
          {isFord ? (
            <>
            <section aria-labelledby="architecture">
              <h2 id="architecture">Architecture and engineering decisions</h2>
              <p>Engineering source views feed the BigQuery warehouse. Python refreshes the tables, FastAPI serves program metrics, and Angular presents the selected results.</p>
              <ol className="study-flow" aria-label="Data flow">
                <li>VPP / FEDE</li><li>Python refresh</li><li>BigQuery</li><li>FastAPI</li><li>Angular / Excel</li>
              </ol>
              <div className="study-stack-list">
                {fordStudy.decisions.map(({ title, implementation, tradeoff }) => (
                  <details key={title}>
                    <summary><strong>{title}</strong><span>Implementation and trade-off</span></summary>
                    <p>{implementation}</p>
                    <p>{tradeoff}</p>
                  </details>
                ))}
              </div>
            </section>
            <section aria-labelledby="dashboard">
              <h2 id="dashboard">Explore the dashboard</h2>
              <p>Choose a panel to see how the dashboard displays engineering data. The public demo uses synthetic records.</p>
              <DashboardExplorer />
              <div className="study-stack-list">
                {fordStudy.modules.map(({ name, description }) => (
                  <details key={name}>
                    <summary><strong>{name}</strong></summary>
                    <p>{description}</p>
                  </details>
                ))}
              </div>
              <a className="study-source-link" href={fordStudy.repository} target="_blank" rel="noreferrer">View the demo source <ArrowUpRight size={17} /></a>
            </section>
            </>
          ) : (
            <div className="act-selected-work">
              <h2 className="act-selected-heading">Selected projects and results</h2>
              <ActStudy />
            </div>
          )}
        </div>
        {next && <Link className="study-next" href={`/work/${next.slug}`}>Next project: {next.organization} <ArrowUpRight size={20} /></Link>}
      </main>
      <Footer />
    </>
  );
}
