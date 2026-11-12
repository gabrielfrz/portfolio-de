import { assetPath } from "@/lib/asset-path";
import Image from "next/image";
import { ArrowUpRight, Atom, Medal, Sigma, Waves } from "lucide-react";

export function AcademicProfile() {
  return (
    <div className="academic-profile">
      <div className="academic-heading"><span className="mono eyebrow">EDUCATION / RESEARCH / RECOGNITION</span><h3>Built on curiosity.<br /><em>Backed by practice.</em></h3></div>
      <div className="foundation-layout">
        <div className="degree-panel">
          <span className="mono foundation-label">01 / ACADEMIC PATH</span>
          <article className="degree-row"><span className="university-logo"><Image src={assetPath("/brands/cimatec.png")} alt="SENAI CIMATEC" width={171} height={54} /></span><div><span className="mono">SENAI CIMATEC</span><h4>Computer<br />Engineering</h4><span className="degree-date">2022 — 2027</span></div><ArrowUpRight size={20} aria-hidden="true" /></article>
          <article className="degree-row"><span className="university-logo"><Image src={assetPath("/brands/ufba.png")} alt="UFBA" width={188} height={100} /></span><div><span className="mono">FEDERAL UNIVERSITY OF BAHIA</span><h4>Science &<br />Technology</h4><span className="degree-date">Interdisciplinary Bachelor’s · 2022 — 2027</span></div><ArrowUpRight size={20} aria-hidden="true" /></article>
        </div>
        <article className="quantum-panel"><span className="mono foundation-label">02 / UNDERGRADUATE RESEARCH</span><Atom className="quantum-symbol" size={132} strokeWidth={.6} aria-hidden="true" /><div><span className="mono">SENAI CIMATEC</span><h4>Quantum<br /><em>computing.</em></h4><p>Turning optimization problems into quantum algorithms.</p><div className="tags"><span>Python</span><span>Qiskit</span><span>QAOA</span></div></div><details className="foundation-details"><summary>Explore the research <span>+</span></summary><p>Combinatorial optimization, cost-function modeling and the intersection of quantum computing and machine learning. Preprocessing, feature engineering and model evaluation.</p></details></article>
        <div className="honors-panel"><span className="mono foundation-label">03 / ACADEMIC HONORS</span><div className="honors-strip"><article><Medal className="bronze-medal" size={42} strokeWidth={1.2} aria-hidden="true" /><h4>Bronze</h4><span className="mono">NATIONAL</span><p>Brazilian Mathematics Olympiad</p></article><article><Medal className="silver-medal" size={42} strokeWidth={1.2} aria-hidden="true" /><h4>Silver</h4><span className="mono">REGIONAL</span><p>Brazilian Mathematics Olympiad</p></article><article><span className="honor-star" aria-hidden="true">✳</span><h4>Honorable mention</h4><span className="mono">ONC</span><p>National Science Olympiad</p></article></div></div>
        <article className="teaching-panel"><span className="mono foundation-label">04 / MATHEMATICS & PHYSICS</span><h4>Teaching Assistant<br /><em>2022 — 2024</em></h4><p className="teaching-intro">Academic support, mathematical modeling and preparation of in-depth learning materials.</p><div className="teaching-subjects"><span><Sigma size={20} aria-hidden="true" /> Calculus</span><span><Waves size={20} aria-hidden="true" /> Physics</span></div><div className="teaching-topics"><div><span className="mono">CALCULUS</span><p>Limits & continuity · derivatives · integration · vector calculus</p></div><div><span className="mono">PHYSICS / ELECTROMAGNETISM</span><p>Electric fields & circuits · magnetism · Faraday’s law · Maxwell’s equations</p></div></div><details className="foundation-details"><summary>Subject references <span>+</span></summary><p>Topic summaries follow standard course coverage. <a href="https://ime.ufba.br/ementas.html" target="_blank" rel="noreferrer">UFBA mathematics syllabi</a> · <a href="https://cceq.ufba.br/docs/4o_semestre/Programa_FIS_123_FISICA_GERAL_EXP_3_E.pdf" target="_blank" rel="noreferrer">UFBA Physics III syllabus</a>.</p></details></article>
      </div>
    </div>
  );
}
