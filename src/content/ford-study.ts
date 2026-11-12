import type { PipelineStage } from "./portfolio";
export type TechnicalStudy = {
  repository: string;
  disclaimer: string;
  context: string;
  architectureIntro: string;
  stages: PipelineStage[];
  architectureNote: string;
  decisions: { title: string; implementation: string; tradeoff: string }[];
  modules: { name: string; description: string }[];
  evidence: string;
  limitations: string[];
  sources: { label: string; path: string }[];
};
export const fordStudy: TechnicalStudy = {
  repository: "https://github.com/gabrielfrz/ford-mockado",
  disclaimer:
    "Based on preserved source code. The public demonstration uses synthetic records and does not connect to Ford systems.",
  context:
    "The D&R Engineering Dashboard brings vehicle-program context, engineering assessments, design rules, compliance and costs into one interface. Its data layer prepares and queries engineering datasets; FastAPI delivers metrics to Angular charts, tables and Excel exports. The repository preserves the original query and refresh code alongside a separate local demonstration.",
  architectureIntro:
    "Data preparation and presentation are separate layers. Python refresh scripts materialize source views in BigQuery. Query services calculate metrics and deliver HTTP responses to the dashboard. Select a layer to inspect its role in the preserved code.",
  stages: [
    {
      name: "Source views",
      subtitle: "VPP / FEDE",
      description:
        "VPP views supply vehicle-program, timing and plant context; FEDE views supply engineering status, assessments and design rules. The repository does not document ingestion upstream of these views. DPA5 has a separate direct query and snapshot path.",
    },
    {
      name: "Refresh",
      subtitle: "Python",
      description:
        "The refresh runner executes eight jobs sequentially. The jobs use CREATE OR REPLACE TABLE AS SELECT. It logs individual failures, completes a summary, and returns a failure status if a job or subsequent readiness check fails.",
    },
    {
      name: "Warehouse",
      subtitle: "BigQuery",
      description:
        "Materialized tables support query services. Vehicle Line combines four source views with joins and COALESCE. Row-count and table-modification-age checks run after successful refreshes. Some consumed tables have no producer in the included refresh jobs.",
    },
    {
      name: "History",
      subtitle: "Snapshots",
      description:
        "A separate script captures DPA5 and DVP aggregates in tables partitioned by snapshot_date. History is an optional query branch, not a mandatory step for every request. The script name suggests weekly capture; its deployed schedule is not evidenced.",
    },
    {
      name: "Services",
      subtitle: "FastAPI",
      description:
        "HTTP routes delegate to Python services for SQL, filtering, aggregation and response normalization. Context includes program, GI, PMT, commodity, team and snapshot where supported. The local demo entry point uses a synthetic adapter instead.",
    },
    {
      name: "Dashboard",
      subtitle: "Angular / Excel",
      description:
        "Angular services consume HTTP responses and share selected program context across panels. Charts and tables cover CAE, DVP, Design Rules, HIR, DPA5 and Costs. Export endpoints generate Excel workbooks; demo exports contain only synthetic records.",
    },
  ],
  architectureNote:
    "SIMPLIFIED LAYER MAP — HISTORY IS OPTIONAL; DPA5 ALSO FEEDS SERVICES AND SNAPSHOTS DIRECTLY.",
  decisions: [
    {
      title: "Materialize before serving.",
      implementation:
        "The refresh scripts rebuild tables from source views, while API services query the prepared datasets. The runner documents Cloud Run Job / Cloud Scheduler usage.",
      tradeoff:
        "Full replacement is straightforward, but freshness depends on refresh completion. The repository does not establish the deployed schedule, scan cost, or production SLA.",
    },
    {
      title: "Keep a dated view of assessments.",
      implementation:
        "DPA5 and DVP snapshots are stored with date partitions, allowing services to expose snapshot selection alongside current-state queries.",
      tradeoff:
        "The snapshot inserts are not idempotent: rerunning on the same day can duplicate data. Some historical queries expect fields that differ from the included aggregate schema.",
    },
    {
      title: "Separate the public demo from the data source.",
      implementation:
        "The local FastAPI entry point registers a mock adapter. Deterministic records are filtered and aggregated in Python, preserving an explorable dashboard without a warehouse connection.",
      tradeoff:
        "The demo demonstrates interaction and contracts. Its milestone projections, totals and exports do not establish production performance or business impact.",
    },
  ],
  modules: [
    {
      name: "Program context",
      description:
        "Model year, program name and program code resolve vehicle-line context. Shared Angular state carries selections into the engineering panels.",
    },
    {
      name: "CAE & DVP",
      description:
        "Assessment states are counted and grouped by engineering context. Classification uses a different grain: unique requirements rather than assessment rows.",
    },
    {
      name: "Design Rules & HIR",
      description:
        "Rule classification and evidence coverage use parsed keys, joins and grouped counts. HIR completion relates evidence-bearing rows to the total selected set.",
    },
    {
      name: "DPA5 compliance",
      description:
        "Program mapping and filters select issues. K-PAC identifiers are normalized before aggregation and association with milestone targets.",
    },
    {
      name: "Costs",
      description:
        "Piece and tooling cost services filter by Effective Point and engineering dimensions, then expose actual values, targets and gaps for tables and exports.",
    },
    {
      name: "Readiness & exports",
      description:
        "Readiness combines engineering metrics by milestone. Excel endpoints make the selected records available beyond the dashboard.",
    },
  ],
  evidence:
    "The code documents a complete presentation path from prepared engineering datasets to filtered metrics, visualizations and exports. The local demo makes these interactions inspectable with synthetic data. Production improvements, adoption, runtime volumes and financial outcomes are not established by this repository.",
  limitations: [
    "Some consumed tables are not produced by the eight included refresh jobs; the missing transformations are not inferred.",
    "Snapshot reruns and historical schema compatibility need validation against the actual environment.",
    "Deployment configuration, operating dates and individual contribution boundaries require additional context before they can be described precisely.",
  ],
  sources: [
    { label: "Repository overview & demo boundary", path: "README.md" },
    {
      label: "Data lineage, queries & known gaps",
      path: "docs/PANORAMA-DADOS.md",
    },
    {
      label: "Refresh orchestration",
      path: "back/scripts/run_daily_refresh.py",
    },
    {
      label: "Snapshot capture",
      path: "back/scripts/capture_weekly_snapshots.py",
    },
    { label: "Local API entry point", path: "back/app/main.py" },
    {
      label: "Synthetic data & aggregations",
      path: "back/app/services/demo_service.py",
    },
    {
      label: "Demo routes & Excel exports",
      path: "back/app/routes/demo_routes.py",
    },
  ],
};
