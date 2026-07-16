import type { Metadata } from "next";
import Image from "next/image";
import { FiArrowUpRight, FiBarChart2, FiClock, FiUsers } from "react-icons/fi";
import PageHero from "../components/PageHero";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = { title: "Courplay", description: "Draft anime, predict breakouts, and win the week with Courplay." };

export default function CourplayPage() {
  return <main id="main-content" className="inner-page courplay-page"><SiteHeader /><PageHero eyebrow="A SenpaiS1lva project" title={<>Fantasy sports energy. <em>Anime rules.</em></>} intro="Courplay turns the currently airing season into a weekly fantasy draft. Build a lineup, predict the breakout shows, and see who really understands the slate." action={<a className="primary-button" href="https://courplay.com" target="_blank" rel="noopener noreferrer">Visit Courplay <FiArrowUpRight /></a>} />
    <section className="container courplay-product"><div className="courplay-product-copy"><Image src="/courplay-logo.webp" alt="Courplay" width={620} height={620} unoptimized /><p className="eyebrow">Live product preview</p><h2>Draft the season. Beat the field.</h2><p>These screens show the actual mobile experience, from the opening pitch to the skill-based scoring system and weekly draft loop.</p></div><div className="courplay-screens"><figure><Image src="/courplay-home.webp" alt="Courplay mobile homepage" width={620} height={1240} unoptimized /><figcaption>Start your slate</figcaption></figure><figure><Image src="/courplay-edge.webp" alt="Courplay weekly momentum explanation" width={620} height={1240} unoptimized /><figcaption>Find the edge</figcaption></figure><figure><Image src="/courplay-how.webp" alt="Courplay gameplay explanation" width={620} height={1240} unoptimized /><figcaption>How it works</figcaption></figure></div></section>
    <section className="container courplay-features"><article><FiUsers /><span>01</span><h2>Draft your slate</h2><p>Build a weekly lineup from currently airing anime and donghua.</p></article><article><FiClock /><span>02</span><h2>Lock the week</h2><p>Make your choices before the slate locks and the conversation begins.</p></article><article><FiBarChart2 /><span>03</span><h2>Track the breakout</h2><p>See which shows outperform expectations and where your instincts rank.</p></article></section>
    <section className="courplay-banner"><div className="container"><p className="eyebrow">Draft · Anime · Predict</p><h2>Think you know what will own the week?</h2><a className="primary-button" href="https://courplay.com" target="_blank" rel="noopener noreferrer">Play Courplay <FiArrowUpRight /></a></div></section><SiteFooter /></main>;
}
