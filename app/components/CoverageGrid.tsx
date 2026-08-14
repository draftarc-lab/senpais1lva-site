import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import type { CoverageContentType, CoverageEntry } from "../coverage";

type CoverageGridProps = {
  entries: CoverageEntry[];
  variant?: "home" | "watch";
};

const contentTypeLabels: Record<CoverageContentType, string> = {
  anime: "Anime",
  donghua: "Donghua",
};

export default function CoverageGrid({ entries, variant = "home" }: CoverageGridProps) {
  return (
      <div className={variant === "watch" ? "watch-donghua-grid" : "donghua-grid"}>
        {entries.map((entry) => (
          <article className={`${variant === "watch" ? "watch-donghua-card" : "donghua-card"} ${entry.featured ? "donghua-card--featured" : ""}`} id={entry.slug} key={entry.slug}>
            <div className="coverage-title-row">
              <h3>{entry.canonicalTitle}</h3>
              {entry.pickLabel && <span className="senpai-pick-badge">{entry.pickLabel}</span>}
            </div>
            <div className="donghua-tags" aria-label={`${entry.canonicalTitle} genres`}>
              {entry.genres.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
              <span>{contentTypeLabels[entry.contentType]}</span>
            </div>
            <p>{variant === "home" ? entry.homepageDescription ?? entry.description : entry.description}</p>
            <div className="coverage-card-actions">
              <Link className="donghua-card-cta" href={entry.coverageUrl}>
                {entry.cta} <FiArrowUpRight aria-hidden="true" />
              </Link>
              {entry.streaming && (
                <a className="coverage-stream-link" href={entry.streaming.url} rel="noopener noreferrer" target="_blank">
                  {entry.streaming.label} <FiArrowUpRight aria-hidden="true" />
                </a>
              )}
            </div>
            <span className="coverage-updated">Updated {entry.lastUpdated}</span>
          </article>
        ))}
      </div>
  );
}
