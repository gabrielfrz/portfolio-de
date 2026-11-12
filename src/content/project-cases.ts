export const projectCases = {
  ford: {
    title: "Engineering data for vehicle programs",
    brief: "I built Python and SQL pipelines on BigQuery and helped expose engineering indicators through FastAPI.",
    outcome: "One dashboard for program readiness, assessments and costs",
    context: "Ford’s vehicle engineering teams needed to review assessments, compliance and costs for a selected program. The D&R dashboard brings those views together with program, milestone and engineering filters.",
    work: [
      { title: "Prepare engineering data", stack: "Python · SQL · BigQuery", detail: "I integrated automotive engineering data into the warehouse, wrote transformations and optimized queries. The preserved code shows eight refresh jobs that materialize source views and check row counts and table freshness." },
      { title: "Track changes over time", stack: "BigQuery · Date partitioning", detail: "I worked with clustered tables and date-partitioned snapshots. The DPA5 and DVP snapshots retain historical assessment aggregates for comparison with current status." },
      { title: "Serve indicators to the dashboard", stack: "Python · FastAPI · Angular", detail: "I integrated data into FastAPI endpoints and validated schema, consistency and refresh status. Angular consumed the API for filters, charts and tables, and the project also supported Excel exports." },
    ],
  },
  "act-investimentos": {
    title: "Engineering across investment operations",
    brief: "I work across multiple internal projects at ACT, covering data engineering, backend services, system integrations and frontend development.",
    outcome: "Data engineering, software development and automation",
    context: "ACT Investimentos is a Brazilian investment advisory firm affiliated with XP. My projects span internal applications, financial data workflows and operational reporting.",
    work: [
      {
        title: "Data engineering",
        stack: "Python · SQL · MySQL",
        detail: "I maintain daily data updates, automate operational workflows and improve query performance for financial reporting.",
      },
      {
        title: "Application development",
        stack: "Go · Protobuf · Java / Spring Boot · Angular",
        detail: "I build and maintain backend services, integrations and frontend features for internal applications.",
      },
      {
        title: "Infrastructure and delivery",
        stack: "Azure / Entra ID · Redis · Containers · Version control",
        detail: "I work with cloud integrations, application infrastructure and version control as part of maintaining and evolving the product.",
      },
    ],
  },
} as const;
