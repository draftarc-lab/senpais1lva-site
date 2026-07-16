import type { Metadata } from "next";
import { FiArrowUpRight, FiBriefcase, FiDownload, FiMail } from "react-icons/fi";
import PageHero from "../components/PageHero";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = { title: "Work With Me", description: "Partner with SenpaiS1lva on anime, entertainment, gaming, and culture-forward campaigns." };
const services = ["Sponsored short-form videos", "Streaming and entertainment campaigns", "Product integrations", "Event and convention coverage", "Creator collaborations", "Long-term ambassadorships"];

export default function WorkWithMePage() {
  return <main id="main-content" className="inner-page work-page"><SiteHeader /><PageHero eyebrow="For brands & collaborators" title={<>Make something people <em>want to watch.</em></>} intro="Authentic creator partnerships built around anime, donghua, entertainment, culture, and an audience that can smell a forced advertisement from three arcs away." action={<a className="primary-button" href="mailto:animejay89@gmail.com?subject=Partnership%20Inquiry%20for%20SenpaiS1lva"><FiMail /> Start a conversation</a>} />
    <section className="container page-section"><div className="brand-fit-grid"><article><FiBriefcase /><p className="eyebrow">Best fit</p><h2>Respect the audience. Keep the creator voice.</h2><p>SenpaiS1lva works best with brands that want a natural place inside the conversation, not a commercial awkwardly taped to the front of it.</p></article><div className="service-list">{services.map((service, index) => <div key={service}><span>0{index + 1}</span><strong>{service}</strong></div>)}</div></div></section>
    <section className="container process-section"><div className="page-section-heading"><div><p className="eyebrow">How it works</p><h2>Clear from pitch to post.</h2></div></div><div className="process-grid"><article><span>01</span><h3>Fit</h3><p>We confirm the campaign genuinely belongs in the SenpaiS1lva universe.</p></article><article><span>02</span><h3>Concept</h3><p>The brand goal becomes a creator-led idea the audience will actually care about.</p></article><article><span>03</span><h3>Delivery</h3><p>Clear expectations, platform-ready creative, and direct communication throughout.</p></article></div></section>
    <section className="contact-panel"><div className="container contact-panel-inner"><div><p className="eyebrow">Partnership inquiries</p><h2>Let’s build the right thing.</h2><a href="mailto:animejay89@gmail.com">animejay89@gmail.com</a></div><div className="contact-actions"><a className="primary-button" href="mailto:animejay89@gmail.com?subject=Partnership%20Inquiry%20for%20SenpaiS1lva"><FiMail /> Discuss a partnership</a><a className="editorial-link" href="mailto:animejay89@gmail.com?subject=SenpaiS1lva%20Media%20Kit%20Request"><FiDownload /> Request media kit <FiArrowUpRight /></a></div></div></section><SiteFooter /></main>;
}
