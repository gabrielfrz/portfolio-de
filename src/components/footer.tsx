import { ArrowUpRight, ArrowUp } from "lucide-react";
import { profile } from "@/content/portfolio";
export function Footer() {
  const contacts = [
    { label: "Email", href: profile.email ? `mailto:${profile.email}` : null },
    { label: "LinkedIn", href: profile.linkedin },
    { label: "GitHub", href: profile.github },
    { label: "WhatsApp", href: "https://wa.me/5571986046586" },
  ];
  return (
    <footer id="contact" className="contact-section wrap">
      <div className="section-label mono">
        <span>05 / CONTACT</span>
        <span>THE NEXT CONNECTION</span>
      </div>
      <div className="contact-heading">
        <h2>
          Great things start
          <br />
          with a <em>conversation.</em>
        </h2>
        <ArrowUpRight strokeWidth={0.8} aria-hidden="true" />
      </div>
      <div className="contact-bottom">
        <p>
          Have an interesting problem?
          <br />
          Let’s find a thoughtful way forward.
        </p>
        <div className="contact-channels">
          {contacts.map((c) =>
            c.href ? (
              <a
                key={c.label}
                href={c.href}
                target={c.label === "Email" ? undefined : "_blank"}
                rel="noreferrer"
              >
                {c.label}
                <ArrowUpRight size={16} />
              </a>
            ) : (
              <span key={c.label} className="contact-pending">
                {c.label}
                <span className="mono">COMING SOON</span>
              </span>
            ),
          )}
        </div>
      </div>
      <div className="footer-bottom mono">
        <span>© {new Date().getFullYear()} GABRIEL ARAGÃO</span>
        <span>BUILT WITH INTENTION. BASED IN BRAZIL.</span>
        <a href="#top">
          BACK TO TOP <ArrowUp size={12} />
        </a>
      </div>
    </footer>
  );
}
