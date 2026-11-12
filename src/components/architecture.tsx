"use client";
import { useId, useState } from "react";
import {
  ArrowRight,
  Database,
  Radio,
  Workflow,
  HardDrive,
  Braces,
  ChartNoAxesCombined,
} from "lucide-react";
import { pipeline, type PipelineStage } from "@/content/portfolio";
const icons = [
  Database,
  Radio,
  Workflow,
  HardDrive,
  Braces,
  ChartNoAxesCombined,
];
export function Architecture({
  stages = pipeline,
  label = "DATA PIPELINE",
  caption,
}: {
  stages?: PipelineStage[];
  label?: string;
  caption?: string;
}) {
  const descriptionId = useId();
  const [active, setActive] = useState(Math.min(2, stages.length - 1));
  const current = stages[active] ?? stages[0];
  if (!current) return null;
  return (
    <div className="architecture">
      <div className="architecture-toolbar">
        <span className="mono">
          <span className="status-dot" /> {label}
        </span>
      </div>
      <div className="pipeline" aria-label="Explore pipeline stages">
        {stages.map((stage, index) => {
          const Icon = icons[index % icons.length];
          return (
            <div className="pipeline-item" key={stage.name}>
              <button
                className={`pipeline-node ${active === index ? "active" : ""}`}
                onClick={() => setActive(index)}
                aria-pressed={active === index}
                aria-controls={descriptionId}
              >
                <span className="mono stage-index">0{index + 1}</span>
                <Icon size={26} strokeWidth={1} />
                <strong>{stage.name}</strong>
                <span className="mono node-subtitle">{stage.subtitle}</span>
              </button>
              {index < stages.length - 1 && (
                <div className="pipeline-connector" aria-hidden="true">
                  <span />
                  <ArrowRight size={12} />
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div id={descriptionId} className="stage-description" aria-live="polite">
        <div>
          <span className="mono">SELECTED LAYER / 0{active + 1}</span>
          <h3>{current.name}</h3>
        </div>
        <p>{current.description}</p>
      </div>
      {caption && <div className="diagram-caption mono">{caption}</div>}
    </div>
  );
}
