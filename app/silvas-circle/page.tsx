import type { Metadata } from "next";
import { FaInstagram } from "react-icons/fa6";
import { FiBookOpen, FiMessageCircle, FiRadio } from "react-icons/fi";
import PageHero from "../components/PageHero";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = { title: "Silva’s Circle", description: "A closer community around anime, donghua, and the work behind SenpaiS1lva." };

export default function SilvasCirclePage() {
  return <main id="main-content" className="inner-page circle-page"><SiteHeader /><PageHero eyebrow="The closer circle" title={<>More than a feed. <em>A community.</em></>} intro="Silva’s Circle is the home for the people who want to go deeper, stay closer to the creative process, and keep the conversation moving after the post ends." action={<a className="primary-button" href="https://www.instagram.com/senpais1lva" target="_blank" rel="noopener noreferrer"><FaInstagram /> Follow for updates</a>} />
    <section className="container circle-pillars"><article><FiBookOpen /><h2>Deeper recommendations</h2><p>More context, more hidden gems, and more of the reasoning behind each pick.</p></article><article><FiMessageCircle /><h2>Closer conversation</h2><p>A space designed around discussion rather than whatever the algorithm rewards today.</p></article><article><FiRadio /><h2>Behind the work</h2><p>Ideas, experiments, and a clearer look at how SenpaiS1lva content comes together.</p></article></section>
    <section className="circle-manifesto"><div className="container"><span>SILVA’S CIRCLE</span><blockquote>The best part of anime culture has always been finding your people and arguing respectfully about fictional decisions like the fate of civilization depends on it.</blockquote><a className="editorial-link" href="https://www.instagram.com/senpais1lva" target="_blank" rel="noopener noreferrer">Follow the build on Instagram</a></div></section><SiteFooter /></main>;
}
