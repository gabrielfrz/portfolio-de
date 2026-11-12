const fordLayers = [
  {
    name: "Google Cloud Platform",
    role: "Run warehouse refreshes",
    detail: "The Python runner groups eight BigQuery refresh jobs. Its documented GCP setup pairs Cloud Scheduler with Cloud Run Jobs. Each run reports failed jobs and checks row counts and table freshness so stale or incomplete data is easier to detect.",
  },
  {
    name: "BigQuery & SQL",
    role: "Turn source records into engineering metrics",
    detail: "The project handles a workload involving thousands of queries. My SQL work integrated vehicle and engineering datasets, reshaped source views into tables, and optimized transformations with clustering and date partitioning. Snapshot queries let teams compare assessment status across dates.",
  },
  {
    name: "Python",
    role: "Build the data pipelines",
    detail: "I used Python to run SQL transformations, check schemas and validate consistency and refresh status. The refresh code materializes data used by the API, while separate snapshot scripts capture historical aggregates for DPA5 and DVP.",
  },
  {
    name: "FastAPI",
    role: "Expose metrics for a selected vehicle program",
    detail: "I integrated datasets into API endpoints. Python services apply the selected program and engineering filters, aggregate results and return consistent responses for the dashboard. Export endpoints provide Excel files for analysis outside the application.",
  },
  {
    name: "Angular",
    role: "Give engineering teams a shared dashboard",
    detail: "The frontend uses API results to update charts and tables as users choose a program, milestone or engineering category. Teams can review assessment coverage, validation progress, design rule evidence, compliance and costs in the same product.",
  },
];

const actLayers = [
  {
    name: "Microsoft Entra ID & Microsoft Graph",
    role: "Connect Microsoft 365 to reporting",
    detail: "I used application authentication through Microsoft Entra ID, part of the Azure ecosystem, and queried Microsoft Graph for calendar events. This gave the Python workflow structured access to the event and participant data it needed for reporting.",
  },
  {
    name: "Python & openpyxl",
    role: "Automate reporting and data checks",
    detail: "The calendar workflow filters events, deduplicates them across calendars and writes the results to Excel. I also used Python for daily financial data updates, ETL/ELT, reconciliation, consistency checks and an internal GAV automation.",
  },
  {
    name: "MySQL & advanced SQL",
    role: "Build and speed up financial reporting queries",
    detail: "I structured transformations with CTEs, relational models, views and stored procedures. I reviewed execution plans and adjusted composite indexes around common filters and joins.",
  },
  {
    name: "Go, Protobuf & Spring Boot",
    role: "Build and maintain REST integrations",
    detail: "I developed backend services and maintained REST APIs that connect financial and operational systems. I worked with Protobuf message definitions in Go and developed backend integrations with Java and Spring Boot.",
  },
  {
    name: "Angular",
    role: "Develop the internal reporting interface",
    detail: "I contributed to the Angular frontend used to present financial and operational information.",
  },
  {
    name: "Redis, containers & version control",
    role: "Support application development and delivery",
    detail: "The work also included Redis for fast data access, containerization to package application components and version control to track code changes.",
  },
];

export function ProjectStack({ isFord }: { isFord: boolean }) {
  const layers = isFord ? fordLayers : actLayers;

  return (
    <section aria-labelledby="project-stack">
      <h2 id="project-stack">How the stack fits together</h2>
      <p>{isFord
        ? "Python prepares the data in BigQuery, FastAPI serves the metrics, and Angular makes them usable by engineering teams."
        : "Python and MySQL refresh financial data daily. Go and Spring Boot support backend integrations, and Angular is used for the internal interface. The Microsoft 365 workflow uses Entra ID and Microsoft Graph."}</p>
      <div className="study-stack-list">
        {layers.map(({ name, role, detail }) => (
          <details key={name}>
            <summary>
              <strong>{name}</strong>
              <span>{role}</span>
            </summary>
            <p>{detail}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
