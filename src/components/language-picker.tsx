"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Globe2 } from "lucide-react";
import { usePathname } from "next/navigation";
import { translations } from "@/content/translations";

type Language = "en" | "pt-BR" | "es";
const originalText = new WeakMap<Text, { source: string; rendered: string }>();

export function LanguagePicker() {
  const [language, setLanguage] = useState<Language>("en");
  const pathname = usePathname();

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-language");
    if (saved === "pt-BR" || saved === "es") setLanguage(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    const observer = new MutationObserver(applyLanguage);

    function applyLanguage() {
      observer.disconnect();
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      for (let node = walker.nextNode(); node; node = walker.nextNode()) {
        const leaf = node as Text;
        if (leaf.parentElement?.closest("script, style, svg, pre, [translate=no]")) continue;
        const old = originalText.get(leaf);
        const source = old?.rendered === leaf.data ? old.source : leaf.data;
        const translated = language === "en" ? undefined : translations[source.trim().replace(/\s+/g, " ")]?.[language === "pt-BR" ? 0 : 1];
        const rendered = translated ? source.replace(source.trim(), translated) : source;
        if (rendered !== leaf.data) leaf.data = rendered;
        originalText.set(leaf, { source, rendered });
      }
      observer.observe(document.body, { subtree: true, characterData: true, childList: true });
    }

    applyLanguage();
    return () => observer.disconnect();
  }, [language, pathname]);

  return (
    <label className="language-picker" translate="no">
      <Globe2 className="language-globe" size={18} aria-hidden="true" />
      <select aria-label="Language / Idioma" value={language} onChange={(event) => {
        const next = event.target.value as Language;
        localStorage.setItem("portfolio-language", next);
        setLanguage(next);
      }}>
        <option value="en" lang="en">English</option>
        <option value="pt-BR" lang="pt-BR">Português</option>
        <option value="es" lang="es">Español</option>
      </select>
      <ChevronDown className="language-chevron" size={15} aria-hidden="true" />
    </label>
  );
}
