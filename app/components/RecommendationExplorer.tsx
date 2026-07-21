"use client";

import { useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FiArrowUpRight, FiRefreshCw, FiSearch } from "react-icons/fi";
import { recommendationGroups, recommendations, type Recommendation } from "../recommendations/data";

const typeFilters = ["All", "Anime", "Donghua"] as const;
const commitmentFilters = ["Any length", "Short watch", "Weekend watch", "Long watch", "Currently airing"] as const;

function titleCaseType(type: Recommendation["type"]) {
  return type === "donghua" ? "Donghua" : "Anime";
}

function getFrequentValues(values: string[], minimumCount = 2) {
  const counts = values.reduce<Record<string, number>>((acc, value) => {
    acc[value] = (acc[value] ?? 0) + 1;
    return acc;
  }, {});

  return Object.entries(counts)
    .filter(([, count]) => count >= minimumCount)
    .map(([value]) => value)
    .sort((a, b) => a.localeCompare(b));
}

const moodFilters = ["Any mood", ...getFrequentValues(recommendations.flatMap((item) => item.moodGroups))];
const genreFilters = ["Any genre", ...getFrequentValues(recommendations.flatMap((item) => item.genres))];

export default function RecommendationExplorer() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const typeParam = searchParams.get("type");
  const moodParam = searchParams.get("mood");
  const genreParam = searchParams.get("genre");
  const commitmentParam = searchParams.get("length");
  const query = searchParams.get("q") ?? "";
  const typeFilter: (typeof typeFilters)[number] = typeParam === "Anime" || typeParam === "Donghua" ? typeParam : "All";
  const moodFilter = moodParam && moodFilters.includes(moodParam) ? moodParam : "Any mood";
  const genreFilter = genreParam && genreFilters.includes(genreParam) ? genreParam : "Any genre";
  const commitmentFilter: (typeof commitmentFilters)[number] = commitmentParam && commitmentFilters.includes(commitmentParam as (typeof commitmentFilters)[number])
    ? commitmentParam as (typeof commitmentFilters)[number]
    : "Any length";

  function updateParam(key: string, value: string, emptyValue: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value === emptyValue || !value.trim()) params.delete(key);
    else params.set(key, value);
    const queryString = params.toString();
    router.replace(queryString ? `${pathname}?${queryString}` : pathname, { scroll: false });
  }

  const filteredRecommendations = useMemo(() => recommendations.filter((item) => {
    const matchesType = typeFilter === "All" || titleCaseType(item.type) === typeFilter;
    const matchesMood = moodFilter === "Any mood" || item.moodGroups.includes(moodFilter);
    const matchesGenre = genreFilter === "Any genre" || item.genres.includes(genreFilter);
    const matchesCommitment = commitmentFilter === "Any length" || item.commitment === commitmentFilter;
    const haystack = [
      item.canonicalTitle,
      item.alternateTitle,
      item.type,
      item.genres.join(" "),
      item.mood,
      item.whySilvaRecommends,
      item.bestFitViewer,
      item.groups.join(" "),
    ].filter(Boolean).join(" ").toLowerCase();

    return matchesType && matchesMood && matchesGenre && matchesCommitment && haystack.includes(query.toLowerCase().trim());
  }), [commitmentFilter, genreFilter, moodFilter, query, typeFilter]);

  const groupedRecommendations = useMemo(() => recommendationGroups
    .map((group) => ({
      group,
      items: filteredRecommendations.filter((item) => item.groups.includes(group)),
    }))
    .filter((shelf) => shelf.items.length > 0), [filteredRecommendations]);

  function resetFilters() {
    router.replace(pathname, { scroll: false });
  }

  return <>
    <section className="container recommendation-tools" aria-label="Recommendation filters">
      <label><FiSearch aria-hidden="true" /><span className="sr-only">Search recommendations</span><input value={query} onChange={(event) => updateParam("q", event.target.value, "")} placeholder="Search titles, moods, or themes" /></label>
      <div className="recommendation-filter-groups">
        <div aria-label="Filter by anime or donghua">
          {typeFilters.map((item) => <button aria-pressed={typeFilter === item} className={typeFilter === item ? "active" : ""} type="button" key={item} onClick={() => updateParam("type", item, "All")}>{item}</button>)}
        </div>
        <div aria-label="Filter by mood">
          {moodFilters.map((item) => <button aria-pressed={moodFilter === item} className={moodFilter === item ? "active" : ""} type="button" key={item} onClick={() => updateParam("mood", item, "Any mood")}>{item}</button>)}
        </div>
        <div aria-label="Filter by genre">
          {genreFilters.map((item) => <button aria-pressed={genreFilter === item} className={genreFilter === item ? "active" : ""} type="button" key={item} onClick={() => updateParam("genre", item, "Any genre")}>{item}</button>)}
        </div>
        <div aria-label="Filter by watch commitment">
          {commitmentFilters.map((item) => <button aria-pressed={commitmentFilter === item} className={commitmentFilter === item ? "active" : ""} type="button" key={item} onClick={() => updateParam("length", item, "Any length")}>{item}</button>)}
        </div>
      </div>
    </section>
    <section className="container recommendation-results" aria-live="polite">
      {groupedRecommendations.map((shelf) => (
        <section className="recommendation-shelf" aria-labelledby={`recommendation-${shelf.group.toLowerCase().replaceAll(" ", "-")}`} key={shelf.group}>
          <div className="recommendation-shelf-heading">
            <h2 id={`recommendation-${shelf.group.toLowerCase().replaceAll(" ", "-")}`}>{shelf.group}</h2>
            <span>{shelf.items.length} pick{shelf.items.length === 1 ? "" : "s"}</span>
          </div>
          <div className="recommendation-grid">
            {shelf.items.map((pick, index) => (
              <article className="recommendation-card" key={`${shelf.group}-${pick.slug}`}>
                <span className="recommendation-number">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <small>{titleCaseType(pick.type)} · {pick.commitment}</small>
                  <h3>{pick.canonicalTitle}</h3>
                  {pick.alternateTitle && <span className="recommendation-alt-title">Also known as {pick.alternateTitle}</span>}
                  <p>{pick.whySilvaRecommends}</p>
                  <strong>{pick.mood}</strong>
                  <span className="recommendation-fit">Best fit: {pick.bestFitViewer}</span>
                  {pick.contentWarning && <span className="recommendation-warning">Content note: {pick.contentWarning}</span>}
                  <div className="recommendation-tags">{pick.genres.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <div className="recommendation-links">
                    {pick.relatedNoteSlug && <a href={`/senpai-notes/${pick.relatedNoteSlug}`}>Related note <FiArrowUpRight aria-hidden="true" /></a>}
                    {pick.relatedCoverageSlug && <a href={`/watch#${pick.relatedCoverageSlug}`}>Coverage <FiArrowUpRight aria-hidden="true" /></a>}
                    {pick.externalAvailability && <a href={pick.externalAvailability.url} target="_blank" rel="noopener noreferrer">{pick.externalAvailability.label} <FiArrowUpRight aria-hidden="true" /></a>}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
      {!filteredRecommendations.length && (
        <div className="empty-state empty-state--action">
          <p>No current recommendation matches those filters.</p>
          <button type="button" onClick={resetFilters}><FiRefreshCw aria-hidden="true" /> Reset filters</button>
        </div>
      )}
    </section>
  </>;
}