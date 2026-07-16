import type { Metadata } from "next";
import Link from "next/link";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import PageHero from "../components/PageHero";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = { title: "Watch", description: "Watch selected anime and donghua commentary from SenpaiS1lva." };

const reels = [
  { label: "Instagram Reel 01", href: "https://www.instagram.com/reel/DaQZXg2NcXB/?igsh=MWQ5YzF0aGNyY291eA==", art: "watch-art--logo" },
  { label: "Instagram Reel 02", href: "https://www.instagram.com/reel/DadRSn7tibw/?igsh=MTF3MWNjZ3NmNms4cQ==", art: "watch-art--city" },
];

export default function WatchPage() {
  return <main id="main-content" className="inner-page watch-page"><SiteHeader /><PageHero eyebrow="Senpai Sayz" title={<>Watch the <em>conversation.</em></>} intro="Reactions, recommendations, deep dives, and the anime moments that deserve more than a passing take." />
    <section className="container page-section"><div className="page-section-heading"><div><p className="eyebrow">Watch first</p><h2>Selected from the feed.</h2></div><p>Start with two hand-picked reels, then follow the platform that matches how you like to watch.</p></div>
      <div className="watch-grid">{reels.map((reel, index) => <a className={`watch-card ${reel.art}`} href={reel.href} target="_blank" rel="noopener noreferrer" key={reel.href}><span>0{index + 1}</span><FaInstagram aria-hidden="true" /><div><small>Selected work</small><h3>{reel.label}</h3><p>Watch on Instagram and join the discussion.</p></div><FiArrowUpRight /></a>)}</div>
    </section>
    <section className="container platform-section"><p className="eyebrow">Choose your format</p><div className="platform-grid"><a href="https://m.youtube.com/@SenpaiS1lva" target="_blank" rel="noopener noreferrer"><FaYoutube /><strong>YouTube</strong><span>Longer conversations</span></a><a href="https://www.tiktok.com/@senpais1lva" target="_blank" rel="noopener noreferrer"><FaTiktok /><strong>TikTok</strong><span>Fast reactions and takes</span></a><a href="https://www.instagram.com/senpais1lva" target="_blank" rel="noopener noreferrer"><FaInstagram /><strong>Instagram</strong><span>Reels, carousels, and art</span></a></div></section>
    <section className="page-cta"><div className="container"><p>Looking for the deeper written side?</p><Link className="primary-button" href="/senpai-notes">Read Senpai Notes <FiArrowUpRight /></Link></div></section><SiteFooter /></main>;
}
