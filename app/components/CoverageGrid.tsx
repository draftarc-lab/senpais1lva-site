import Link from "next/link";
import type { CSSProperties } from "react";
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

function hasVerifiedProgress(entry: CoverageEntry): entry is CoverageEntry & { currentEpisode: number; totalEpisodes: number } {
  return typeof entry.currentEpisode === "number" && typeof entry.totalEpisodes === "number";
}

export default function CoverageGrid({ entries, variant = "home" }: CoverageGridProps) {
  return (
      <div className={variant === "watch" ? "watch-donghua-grid" : "donghua-grid"}>
        {entries.map((entry, index) => (
          <article className={variant === "watch" ? "watch-donghua-card" : "donghua-card"} id={entry.slug} key={entry.slug}>
            <div className="donghua-card-top">
              <span>0{index + 1}</span>
              <small>{entry.alternateTitles.join(" · ")}</small>
            </div>
            <div className="coverage-type-row">
              <span>{contentTypeLabels[entry.contentType]}</span>
              <span>{entry.status}</span>
            </div>
            <h3>{entry.canonicalTitle}</h3>
            <p>{entry.description}</p>
            {hasVerifiedProgress(entry) ? (
              <div className="coverage-progress" aria-label={`${entry.canonicalTitle} verified episode progress`}>
                <span>
                  Episode {entry.currentEpisode} of {entry.totalEpisodes}
                </span>
                <i style={{ "--progress": `${Math.round((entry.currentEpisode / entry.totalEpisodes) * 100)}%` } as CSSProperties} />
              </div>
            ) : (
              <p className="coverage-status">{entry.status}</p>
            )}
            <div className="donghua-tags">
              {entry.genres.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
              <span>{contentTypeLabels[entry.contentType]}</span>
            </div>
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
