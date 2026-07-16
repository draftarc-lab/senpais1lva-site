import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import PageHero from "../components/PageHero";
import RecommendationExplorer from "../components/RecommendationExplorer";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = { title: "Recommendations", description: "Anime and donghua recommendations curated by SenpaiS1lva." };
export default function RecommendationsPage() {
  return <main id="main-content" className="inner-page recommendations-page"><SiteHeader /><PageHero eyebrow="Silva’s Picks" title={<>Find your next <em>obsession.</em></>} intro="No giant ranking pretending taste is objective. Just thoughtful anime and donghua picks, what they do well, and who should watch them." />
    <section className="container recommendation-intro"><p>Start with the feeling you want, not the score somebody gave it.</p></section>
    <RecommendationExplorer />
    <section className="page-cta"><div className="container"><p>Want the ideas behind the stories?</p><Link className="primary-button" href="/senpai-notes">Read Senpai Notes <FiArrowUpRight /></Link></div></section><SiteFooter /></main>;
}
