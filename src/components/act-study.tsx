import { assetPath } from "@/lib/asset-path";
import Image from "next/image";

export function ActStudy() {
  return (
    <>
      <section aria-labelledby="automation">
        <h3 id="automation">Calendar reporting automation</h3>
        <p>I used Microsoft Entra ID for authentication and Microsoft Graph to retrieve calendar events. The Python script normalizes participant addresses, filters events by participation, removes duplicates across calendars and exports counts and event subjects per advisor to Excel with openpyxl.</p>
        <ol className="study-flow" aria-label="Automation steps">
          <li>Entra ID</li><li>Microsoft Graph</li><li>Python</li><li>Excel</li>
        </ol>
      </section>
      <section aria-labelledby="dashboard">
        <h3 id="dashboard">Internal reporting interface</h3>
        <figure className="act-interface">
          <Image src={assetPath("/work/act/dashboard-redacted.png")} alt="ACT dashboard illustration showing portfolio and financial indicators" width={1920} height={819} sizes="(max-width: 760px) 90vw, 72vw" />
          <figcaption>Illustrative view with sensitive values and identifiers removed.</figcaption>
        </figure>
      </section>
    </>
  );
}
