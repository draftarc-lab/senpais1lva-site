import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import PageHero from "../components/PageHero";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { notes } from "./data";

export const metadata: Metadata = { title: "Senpai Notes", description: "Anime analysis through psychology, philosophy, sociology, history, and culture." };

export default function SenpaiNotesPage() {
  return <main id="main-content" className="inner-page notes-page"><SiteHeader /><PageHero eyebrow="From the Anime Lab" title={<>The ideas beneath the <em>animation.</em></>} intro="Psychology, philosophy, sociology, history, politics, economics, religion, and the stories that make those subjects feel alive." />
    <section className="container notes-index-intro"><p>Concise editorial commentary for fans who want to keep thinking after the episode ends.</p><div>{Array.from(new Set(notes.map((note) => note.category))).map((category) => <span key={category}>{category}</span>)}</div></section>
    <section className="container notes-grid">{notes.map((note, index) => <Link className="note-card" href={`/senpai-notes/${note.slug}`} key={note.slug}><span>{String(index + 1).padStart(2, "0")}</span><small>{note.category} · {note.readingTime}</small><h2>{note.title}</h2><p>{note.summary}</p><div className="note-card-meta"><time dateTime={note.publishDate}>{note.publishDate}</time>{note.updatedDate && <time dateTime={note.updatedDate}>Updated {note.updatedDate}</time>}</div><strong>{note.question}</strong><FiArrowUpRight aria-hidden="true" /></Link>)}</section>
    <section className="notes-manifesto"><div className="container"><p className="eyebrow">The point</p><blockquote>Anime does not need to become “serious” to deserve serious thought. It already carries history, identity, fear, belief, economics, and social life inside the entertainment.</blockquote><Link className="editorial-link" href="/watch">See the video side <FiArrowUpRight /></Link></div></section><SiteFooter /></main>;
}