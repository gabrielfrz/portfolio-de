const sqlExample = `WITH scoped_events AS (
  SELECT advisor_id, customer_id, amount
  FROM reporting_events
  WHERE occurred_at >= :start_date
    AND occurred_at < :end_date
),
customer_totals AS (
  SELECT advisor_id, customer_id,
         SUM(amount) AS total
  FROM scoped_events
  GROUP BY advisor_id, customer_id
)
SELECT advisor_id,
       COUNT(*) AS customers,
       SUM(total) AS total
FROM customer_totals
GROUP BY advisor_id;`;
export function ActEngineering(){return <>
<div className="company-scale"><div><span className="mono">ACT INVESTIMENTOS</span><strong>R$ 9bn+</strong><p>Assets under advisory · 8,000+ clients</p></div><div><span className="mono">XP PLATFORM / 2Q26</span><strong>R$ 1.534tn</strong><p>Client assets across XP’s platform</p></div><p className="scale-source">Company context, not project impact. <a href="https://www.linkedin.com/company/actinvestimentos/" target="_blank" rel="noreferrer">ACT public profile</a> · <a href="https://investors.xpinc.com/en/" target="_blank" rel="noreferrer">XP investor relations</a>. ACT is an investment advisory firm connected to XP; the figures refer to different scopes.</p></div>
<div className="act-deep-dive"><span className="mono eyebrow">SQL / FROM BUSINESS RULE TO RESULT</span><h3>Make the grain explicit.</h3><p>My SQL work includes customer and lead pipelines, advisor-level aggregation, distinct counts and time-dependent assignment rules. CTEs separate those concerns before the final result is assembled.</p><div className="query-process"><article><b>01</b><h4>Scope & grain</h4><p>Define the reporting period and the entity being counted: event, customer, product or advisor.</p></article><article><b>02</b><h4>Compose the logic</h4><p>Separate customer and lead sources, aggregate deliberately, and handle missing matches with COALESCE.</p></article><article><b>03</b><h4>Inspect the plan</h4><p>Review joins, correlated lookups and filtering paths. Match composite indexes to access patterns.</p></article><article><b>04</b><h4>Validate & measure</h4><p>Compare totals and distinct counts, then record before-and-after timings for the same reporting scope.</p></article></div><details className="sql-example"><summary>Explore an illustrative CTE structure</summary><p>Generic example with fictional table and column names. This is an explanation of query structure, not production code or the exact optimization benchmark.</p><pre translate="no"><code>{sqlExample}</code></pre></details></div>
<div className="act-deep-dive"><span className="mono eyebrow">PYTHON / MICROSOFT CLOUD INTEGRATION</span><h3>Calendar activity into structured reporting.</h3><p>A Python automation authenticates through Microsoft Entra ID, reads calendar events through Microsoft Graph, applies participant rules and produces an Excel report. This illustrates identity and API integration in the Microsoft cloud ecosystem.</p><ol className="azure-flow"><li><span>01</span><b>Entra ID</b><small>OAuth 2.0 · client credentials</small></li><li><span>02</span><b>Microsoft Graph</b><small>CalendarView · date range</small></li><li><span>03</span><b>Python</b><small>Normalize · filter · deduplicate</small></li><li><span>04</span><b>Excel</b><small>openpyxl · structured output</small></li></ol><p>Advisor addresses are loaded from a spreadsheet. Organizer and attendee addresses are normalized, events are filtered against a reference group, and a composite event key prevents repeated counting across calendars. Counts and event subjects are exported by advisor.</p><details className="foundation-details"><summary>Implementation boundaries <span>+</span></summary><p>The supplied excerpt shows application authentication, calendar retrieval and report generation. It does not establish Azure hosting, Data Factory orchestration or a production deployment. Pagination, retries and credential storage require separate review before claiming production robustness.</p></details></div>
<div className="act-deep-dive gav-summary"><span className="mono eyebrow">PYTHON / INTERNAL AUTOMATION</span><h3>GAV automation.</h3><p>Development of an internal Python automation for the GAV workflow, alongside financial data processing and operational reporting.</p></div>
</>}
