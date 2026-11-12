"use client";
import { assetPath } from "@/lib/asset-path";
import { useState } from "react";
import Image from "next/image";
const views = [
  {id:"cae",name:"CAE",title:"Engineering assessments",description:"Assessment totals and compliance distribution, organized by commodity and vehicle program."},
  {id:"costs",name:"Costs",title:"Costs against targets",description:"Piece and tooling costs, with commodity-level drill-down and gaps against engineering targets."},
  {id:"design-rules",name:"Design Rules",title:"Evidence behind compliance",description:"Meet, does-not-meet and unassessed evidence across design rules and commodities."},
  {id:"dpa5",name:"DPA5",title:"Compliance over time",description:"Snapshot selection and a glidepath combining compliance, assessment goals and predictions."},
  {id:"dvp",name:"DVP",title:"Validation progress",description:"Team assessment status and scheduled versus actual completion across the program timeline."},
  {id:"hir",name:"HIR",title:"Evidence completeness",description:"Items with and without evidence, completion rates and key engineering milestones."},
];
export function DashboardExplorer(){
 const [active,setActive]=useState(0);const view=views[active];
 return <div className="dashboard-explorer">
  <div className="dashboard-toolbar"><span className="mono">INTERACTIVE PROJECT TOUR</span><span className="mono">{String(active+1).padStart(2,"0")} / 06</span></div>
  <div className="dashboard-menu" aria-label="Dashboard screenshots">{views.map((item,i)=><button key={item.id} aria-pressed={i===active} onClick={()=>setActive(i)}>{item.name}</button>)}</div>
  <div className="dashboard-screen"><Image key={view.id} src={assetPath(`/work/ford/${view.id}.png`)} alt={`Ford demonstration dashboard: ${view.title}`} width={1280} height={720} sizes="(max-width:760px) 90vw, 75vw" className="dashboard-capture" /></div>
  <div className="dashboard-caption" aria-live="polite"><div><h3>{view.title}</h3><p>{view.description}</p></div><a href={assetPath(`/work/ford/${view.id}.png`)} target="_blank" rel="noreferrer">Open full screenshot ↗</a></div>
  <p className="dashboard-disclosure mono">ACTUAL APPLICATION SCREENS · LOCAL DEMO · SYNTHETIC DATA</p>
 </div>
}
