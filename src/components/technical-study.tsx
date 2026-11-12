import { DashboardExplorer } from "./dashboard-explorer";
import { ArrowUpRight } from "lucide-react";
import { Architecture } from "./architecture";
import type { TechnicalStudy as Study } from "@/content/ford-study";
export function TechnicalStudy({ study }: { study: Study }) {
  return (
    <>
      <section id="context" className="story-section">
        <span className="mono eyebrow">01 / CONTEXT</span>
        <h2>
          Engineering data.
          <br />
          One shared context.
        </h2>
        <p>{study.context}</p>
        <a
          className="study-source-link"
          href={study.repository}
          target="_blank"
          rel="noreferrer"
        >
          Explore the source repository <ArrowUpRight size={16} />
        </a>
      </section>
      <section id="architecture" className="story-section">
        <span className="mono eyebrow">02 / ARCHITECTURE</span>
        <h2>
          From source views
          <br />
          to engineering decisions.
        </h2>
        <p>{study.architectureIntro}</p>
        <Architecture
          stages={study.stages}
          label="PRESERVED CODE / ARCHITECTURE"
          caption={study.architectureNote}
        />
        <div className="study-demo-boundary">
          <span className="mono">LOCAL DEMONSTRATION</span>
          <p>
            Angular → local FastAPI → synthetic records → aggregations → JSON &
            Excel
          </p>
          <p>
            The original BigQuery queries are preserved for inspection. They do
            not feed the local demo.
          </p>
        </div>
      </section>
      <section id="decisions" className="story-section">
        <span className="mono eyebrow">03 / IMPLEMENTATION & TRADE-OFFS</span>
        <h2>
          The choices visible
          <br />
          in the code.
        </h2>
        <p>
          Implementation patterns observed in the repository, with their
          implications. These are not a reconstruction of undocumented team
          decisions.
        </p>
        <div className="study-decisions">
          {study.decisions.map((decision, i) => (
            <article className="decision-block" key={decision.title}>
              <span className="mono">0{i + 1} / ENGINEERING PATTERN</span>
              <h3>{decision.title}</h3>
              <dl>
                <div>
                  <dt>IMPLEMENTED</dt>
                  <dd>{decision.implementation}</dd>
                </div>
                <div>
                  <dt>TRADE-OFF</dt>
                  <dd>{decision.tradeoff}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>
      <section id="implementation" className="story-section">
        <span className="mono eyebrow">04 / THE DASHBOARD</span>
        <h2>
          Different questions.
          <br />
          Connected data.
        </h2>
        <DashboardExplorer />
        <div className="study-modules">
          {study.modules.map((module, i) => (
            <article key={module.name}>
              <span className="mono">0{i + 1}</span>
              <div>
                <h3>{module.name}</h3>
                <p>{module.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section id="impact" className="story-section">
        <span className="mono eyebrow">05 / EVIDENCE & NEXT STEPS</span>
        <h2>
          What the repository
          <br />
          can demonstrate.
        </h2>
        <p>{study.evidence}</p>
        <div className="placeholder-note">
          <span className="mono">OPEN TECHNICAL QUESTIONS</span>
          <ul>
            {study.limitations.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="study-sources">
          <span className="mono eyebrow">SOURCE NOTES</span>
          {study.sources.map((source) => (
            <a
              href={`${study.repository}/blob/main/${source.path}`}
              key={source.path}
              target="_blank"
              rel="noreferrer"
            >
              <span>{source.label}</span>
              <ArrowUpRight size={14} />
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
