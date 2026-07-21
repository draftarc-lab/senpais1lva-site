import type { Metadata } from "next";
import Link from "next/link";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import CoverageGrid from "../components/CoverageGrid";
import FeaturedVideoGrid from "../components/FeaturedVideoGrid";
import PageHero from "../components/PageHero";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { coverageLastUpdated, coverageSeason, creatorActivitySignals, featuredVideos, summerCoverage } from "../coverage";

export const metadata: Metadata = { title: "Watch", description: "Watch selected anime and donghua commentary from SenpaiS1lva." };

export default function WatchPage() {
  return <main id="main-content" className="inner-page watch-page"><SiteHeader /><PageHero eyebrow="Senpai Sayz" title={<>Watch the <em>conversation.</em></>} intro="Reactions, recommendations, deep dives, and the anime moments that deserve more than a passing take." />
    <section className="container page-section"><div className="page-section-heading"><div><p className="eyebrow">Watch first</p><h2>Find the right doorway into the feed.</h2></div><p>Latest uploads, anime analysis, donghua coverage, recommendations, and reactions without loading a wall of heavy embeds.</p></div>
      <FeaturedVideoGrid videos={featuredVideos.filter((video) => video.featured)} />
    </section>
    <section id="summer-coverage" className="container watch-donghua-section"><div className="page-section-heading"><div><p className="eyebrow">Summer 2026 Coverage</p><h2>{coverageSeason} on the watchlist.</h2></div><p>Series I’m actively watching, reacting to, and using as a bridge for fans discovering story-forward anime and donghua. <span>{coverageLastUpdated}</span></p></div>
      <div className="activity-signal-grid activity-signal-grid--watch" aria-label="Current creator activity signals">{creatorActivitySignals.map((item) => <article key={item.label}><span>{item.label}</span><strong>{item.value}</strong></article>)}</div>
      <CoverageGrid entries={summerCoverage} variant="watch" />
    </section>
    <section className="container platform-section"><p className="eyebrow">Choose your format</p><div className="platform-grid"><a href="https://m.youtube.com/@SenpaiS1lva" target="_blank" rel="noopener noreferrer"><FaYoutube /><strong>YouTube</strong><span>Longer conversations</span></a><a href="https://www.tiktok.com/@senpais1lva" target="_blank" rel="noopener noreferrer"><FaTiktok /><strong>TikTok</strong><span>Fast reactions and takes</span></a><a href="https://www.instagram.com/senpais1lva" target="_blank" rel="noopener noreferrer"><FaInstagram /><strong>Instagram</strong><span>Reels, carousels, and art</span></a></div></section>
    <section className="page-cta"><div className="container"><p>Looking for the deeper written side?</p><Link className="primary-button" href="/senpai-notes">Read Senpai Notes <FiArrowUpRight /></Link></div></section><SiteFooter /></main>;
}
