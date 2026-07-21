import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import PageHero from "../components/PageHero";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { pageMetadata } from "../seo";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description: "Meet Jonathan, the Orlando creator behind SenpaiS1lva and the anime, donghua, culture, psychology, and philosophy conversations behind the brand.",
  path: "/about",
  image: "/about-silva.webp",
});

export default function AboutPage() {
  return <main id="main-content" className="inner-page about-page"><SiteHeader /><PageHero eyebrow="Behind the name" title={<>Meet the creator behind <em>SenpaiS1lva.</em></>} intro="A longtime anime fan, an isekai guy, and the friend who never stops at ‘that episode was fire.’" />
    <section className="container about-story"><div className="about-portrait"><Image src="/about-silva.webp" alt="Jonathan, the creator behind SenpaiS1lva" fill sizes="(max-width: 800px) 100vw, 46vw" priority unoptimized /></div><article><p className="eyebrow">Jonathan · Orlando, Florida</p><h2>The senpai part is a responsibility.</h2><p>SenpaiS1lva was built around a simple idea: anime deserves conversations with personality and substance. Jonathan brings the enthusiasm of a fan, the curiosity of a researcher, and just enough sarcasm to keep the seminar from feeling like homework.</p><p>The content moves between reactions, recommendations, donghua discovery, and deeper questions about psychology, philosophy, culture, history, and why certain stories stay with us long after the credits.</p><blockquote>“I want longtime fans to see something new, and newcomers to understand why this medium matters.”</blockquote></article></section>
    <section className="container values-section"><div className="page-section-heading"><div><p className="eyebrow">The approach</p><h2>What guides the work.</h2></div></div><div className="values-grid"><article><span>01</span><h3>Curiosity first</h3><p>The best content opens a conversation instead of pretending to finish it.</p></article><article><span>02</span><h3>No gatekeeping</h3><p>Knowledge should make anime more inviting, not become a weapon against newer fans.</p></article><article><span>03</span><h3>Human over polished</h3><p>Real opinions, real enthusiasm, and room for the audience to disagree.</p></article></div></section>
    <section className="page-cta"><div className="container"><p>Ready to see what that looks like?</p><Link className="primary-button" href="/watch">Watch Senpai Sayz <FiArrowUpRight /></Link></div></section><SiteFooter /></main>;
}
