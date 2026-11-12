import { assetPath } from "@/lib/asset-path";
import Image from "next/image";
import { Globe2, Award, ArrowUpRight } from "lucide-react";
import { achievements } from "@/content/portfolio";

export function Achievements() {
  return (
    <section id="achievements" className="achievements-section wrap">
      <div className="section-label mono">
        <span>04 / ACHIEVEMENTS</span>
        <span>HACKATHONS & INTERNATIONAL EXPERIENCES</span>
      </div>
      <div className="achievements-heading">
        <h2>
          Beyond
          <br />
          <em>the code.</em>
        </h2>
        <p>
          NASA Space Apps. Harvard Model United Nations.
          <br />
          Climate storytelling. International dialogue.
        </p>
      </div>
      <div className="achievement-grid">
        {achievements.map((item, index) => (
          <article
            className={`achievement-entry achievement-${item.id}`}
            key={item.id}
          >
            <div className="achievement-photo">
              {item.photo ? (
                <Image
                  src={assetPath(item.photo.src)}
                  alt={item.photo.alt}
                  width={item.photo.width}
                  height={item.photo.height}
                  className="harvard-campus-photo"
                  sizes="(max-width: 760px) 90vw, 44vw"
                />
              ) : (
                <div className="nasa-poster">
                  <span className="mono">NASA INTERNATIONAL SPACE APPS CHALLENGE</span>
                  <Image src={assetPath("/achievements/nasa-logo.svg")} alt="NASA insignia" width={110} height={92} className="nasa-insignia" />
                  <div><span className="mono">BRAZILIANSTORM / 2024</span><strong>Data. Climate.<br />Human stories.</strong></div>
                  <span className="mono nasa-award"><Award size={16} /> PEOPLE’S CHOICE · BRAZIL</span>
                </div>
              )}
              {index === 1 && <a className="hmun-logo-badge" href="https://www.harvardmun.org/" target="_blank" rel="noreferrer" aria-label="Harvard Model United Nations official website"><Image src={assetPath("/achievements/hmun-logo.png")} alt="Harvard Model United Nations" width={400} height={160} /></a>}
              <span className="achievement-photo-index mono">0{index + 1}</span>
            </div>
            <div className="achievement-category mono">
              {index === 0 ? <Award size={15} /> : <Globe2 size={15} />}{" "}
              {item.category}
            </div>
            {index === 0 && (
              <p className="achievement-organization">{item.organization}</p>
            )}
            <h3>{item.title}</h3>
            <p className="achievement-detail">{item.detail}</p>
            <p className="achievement-description">{item.description}</p>
            {index === 0 && <div className="tags achievement-skills"><span>Python</span><span>pandas</span><span>Matplotlib</span><span>Data storytelling</span></div>}
            {item.href && (
              <a
                className="study-source-link"
                href={item.href}
                target="_blank"
                rel="noreferrer"
              >
                Explore BrazilianStorm <ArrowUpRight size={16} />
              </a>
            )}
            {index === 1 && <p className="photo-credit">Campus photo: <a href="https://commons.wikimedia.org/wiki/File:Harvard_University_Widener_Library.jpg" target="_blank" rel="noreferrer">Joseph Williams</a> · <a href="https://creativecommons.org/licenses/by/2.0/" target="_blank" rel="noreferrer">CC BY 2.0</a></p>}
            {item.photo?.caption && (
              <p className="achievement-caption">{item.photo.caption}</p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
