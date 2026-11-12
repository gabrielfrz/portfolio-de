import { assetPath } from "@/lib/asset-path";
import { projectCases } from "@/content/project-cases";
import Image from "next/image";
import Link from "next/link";
import { AcademicProfile } from "@/components/academic-profile";
import { ArrowDown, ArrowUpRight, Database, Workflow, Layers, Users } from "lucide-react";
import { DataSculpture } from "@/components/data-sculpture";
import { Reveal } from "@/components/motion";
import { Achievements } from "@/components/achievements";
import { Footer } from "@/components/footer";
import { projects } from "@/content/portfolio";
export default function Home() {
  return (
    <>
      <main id="main">
        <div className="portfolio-opening">
        <section className="hero wrap" aria-labelledby="hero-title">
          <div className="hero-composition">
            <div className="hero-type">
              <p className="hero-kicker mono"><span className="status-dot" /> DATA ENGINEER · BASED IN BRAZIL</p>
              <h1 id="hero-title">Gabriel<br /><span>Aragão<span className="name-period">.</span></span></h1>
              <p className="hero-intro">I build the systems behind the decisions.</p>
              <a className="hero-projects-link" href="#work">
                Explore projects <ArrowDown size={16} aria-hidden="true" />
              </a>
            </div>
            <div className="hero-art">
              <DataSculpture />
            </div>
          </div>
        </section>
        <section id="work" className="work-section wrap">
          <Reveal className="section-intro">
            <h2>Selected projects.</h2>
          </Reveal>
          <div className="project-grid">
            {projects.map((project) => (
              <Reveal key={project.slug}>
                <Link href={`/work/${project.slug}`} className="project-link">
                  <div className={`project-brand-cover project-brand-${project.variant}`}>
                    {project.variant === "cloud" ? (
                      <Image src={assetPath("/brands/ford-oval.svg")} alt="" width={240} height={90} />
                    ) : (
                      <Image src={assetPath("/brands/act.png")} alt="" width={176} height={24} unoptimized />
                    )}
                  </div>
                  <div className="project-card-content">
                  <div className="project-heading">
                    <div>
                      <span className="mono project-number">
                        {project.organization} · {project.sector}
                      </span>
                      <h3>{projectCases[project.slug === "ford" ? "ford" : "act-investimentos"].title}</h3>
                    </div>
                    <span className="project-arrow">
                      <ArrowUpRight size={25} strokeWidth={1.2} />
                    </span>
                  </div>
                  {project.variant === "finance" ? (
                    <>
                      <p className="project-company-context">Brazilian investment advisory firm affiliated with XP Investimentos, serving individuals and businesses with investment and financial planning services.</p>
                      <div className="project-scale">
                        <div><strong>R$ 9bn+</strong><span>Assets under advisory</span></div>
                        <div><strong>8,000+</strong><span>Clients</span></div>
                      </div>
                    </>
                  ) : (
                    <p className="project-company-context">Ford Motor Company is a global automaker that designs, manufactures and sells cars and commercial vehicles. This project supported its vehicle engineering teams.</p>
                  )}
                  <p className="project-summary">{projectCases[project.slug === "ford" ? "ford" : "act-investimentos"].brief}</p>
                  <div className="project-meta">
                    <div className="tags">
                      {project.technologies.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                  </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
        </div>
        <section id="about" className="about-section wrap">
          <div className="section-label mono">
            <span>About me</span>
          </div>
          <div className="about-layout">
            <div>
              <h2>Gabriel Aragão</h2>
              <p className="about-experience"><strong>3+ years</strong> of experience across global projects and financial markets</p>
            </div>
            <div className="about-copy">
              <p className="large-copy">I’m a data engineer who enjoys working with people as much as working with systems.</p>
              <p>I ask questions early, explain technical decisions clearly and work with people across disciplines to turn requirements into practical solutions.</p>
              <p>At Ford, I collaborated in English with engineers from different countries. In financial services, I work with teams that rely on accurate data and dependable internal tools in their daily decisions.</p>
            </div>
          </div>
          <AcademicProfile />
        </section>
        <section id="expertise" className="expertise-section wrap">
          <h2 className="practice-title">Core expertise</h2>
          <div className="practice-grid">
            {[
              { icon: Database, title: "Data engineering", description: "Build and maintain pipelines, model warehouse data and validate the datasets that teams use for reporting.", stack: "Python · SQL · BigQuery · MySQL" },
              { icon: Workflow, title: "Cloud and automation", description: "Automate recurring data updates and connect cloud services with operational workflows.", stack: "GCP · Azure / Entra ID · Microsoft Graph" },
              { icon: Layers, title: "Application development", description: "Build services and interfaces that make data accessible in internal applications.", stack: "FastAPI · Go · Spring Boot · Angular" },
              { icon: Users, title: "Technical collaboration", description: "Define requirements with engineering and business teams, document decisions and communicate across disciplines in English and Portuguese.", stack: "Requirements · Documentation · International teams" },
            ].map(({ icon: Icon, title, description, stack }, index) => (
              <Reveal className="practice-card" key={title} delay={index * 0.08}>
                <Icon size={27} strokeWidth={1.5} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{description}</p>
                <span>{stack}</span>
              </Reveal>
            ))}
          </div>
        </section>
        <Achievements />
      </main>
      <Footer />
    </>
  );
}
