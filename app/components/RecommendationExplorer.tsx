"use client";

import { useMemo, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { donghuaCoverage } from "../donghua";

const picks = [
  { title: "Code Geass", type: "Anime", mood: "Strategy · Rebellion", tags: ["Political", "Gateway"], reason: "For the viewer who wants impossible decisions, theatrical genius, and consequences that actually land." },
  { title: "Hunter × Hunter", type: "Anime", mood: "Adventure · Growth", tags: ["Gateway", "Long watch"], reason: "A colorful adventure that slowly reveals one of the sharpest power systems and darkest moral worlds in shōnen." },
  { title: "Attack on Titan", type: "Anime", mood: "Political · Tragic", tags: ["Political", "Gateway"], reason: "For conversations about freedom, history, inherited hatred, propaganda, and what survival can turn people into." },
  { title: "Odd Taxi", type: "Anime", mood: "Mystery · Character", tags: ["Hidden gem", "Short watch"], reason: "A tightly written urban mystery where throwaway conversations become the machinery of the entire plot." },
  { title: "Akudama Drive", type: "Anime", mood: "Cyberpunk · Action", tags: ["Short watch", "Hidden gem"], reason: "Stylish chaos with a class-conscious core and one of the cleanest single-season rides in modern anime." },
  { title: "Dorohedoro", type: "Anime", mood: "Weird · Violent", tags: ["Hidden gem"], reason: "A filthy, funny, strangely warm world where monsters feel human and humans rarely behave like it." },
  { title: "Link Click", type: "Donghua", mood: "Thriller · Emotion", tags: ["Gateway", "Mystery"], reason: "Time-bending suspense built around empathy, grief, and the danger of believing one small change stays small." },
  { title: "Lord of Mysteries", type: "Donghua", mood: "Occult · Mystery", tags: ["Worldbuilding", "Long watch"], reason: "Dense supernatural worldbuilding for viewers who enjoy piecing together systems, factions, rituals, and hidden history." },
  ...donghuaCoverage.map((show) => ({
    title: show.title,
    type: "Donghua",
    mood: show.tags.slice(0, 2).join(" · "),
    tags: ["Covered by SenpaiS1lva", ...show.tags],
    reason: show.description,
  })),
];

const filters = ["All", "Anime", "Donghua", "Covered by SenpaiS1lva", "Hidden gem", "Gateway", "Short watch"];

export default function RecommendationExplorer() {
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");
  const results = useMemo(() => picks.filter((pick) => {
    const matchesFilter = filter === "All" || pick.type === filter || pick.tags.includes(filter);
    const haystack = `${pick.title} ${pick.type} ${pick.mood} ${pick.tags.join(" ")} ${pick.reason}`.toLowerCase();
    return matchesFilter && haystack.includes(query.toLowerCase().trim());
  }), [filter, query]);

  return <>
    <section className="container recommendation-tools" aria-label="Recommendation filters">
      <label><FiSearch aria-hidden="true" /><span className="sr-only">Search recommendations</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search titles, moods, or themes" /></label>
      <div>{filters.map((item) => <button className={filter === item ? "active" : ""} type="button" key={item} onClick={() => setFilter(item)}>{item}</button>)}</div>
    </section>
    <section className="container recommendation-grid" aria-live="polite">
      {results.map((pick, index) => <article className="recommendation-card" key={pick.title}><span className="recommendation-number">{String(index + 1).padStart(2, "0")}</span><div><small>{pick.type}</small><h2>{pick.title}</h2><p>{pick.reason}</p><strong>{pick.mood}</strong><div className="recommendation-tags">{pick.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></article>)}
      {!results.length && <p className="empty-state">No picks match that combination yet. Try a broader search.</p>}
    </section>
  </>;
}
