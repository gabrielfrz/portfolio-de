import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import "./globals.css";
export const metadata: Metadata = {
  title: {
    default: "Gabriel Aragão — Data Engineer",
    template: "%s — Gabriel Aragão",
  },
  description:
    "The selected experience and engineering practice of Gabriel Aragão. Data infrastructure, architecture, and connected systems. Based in Brazil.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <div id="top" />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
