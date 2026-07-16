import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6";
import { FiArrowRight, FiArrowUpRight, FiBookOpen, FiBriefcase, FiDownload, FiMail, FiPlay, FiSearch } from "react-icons/fi";
import { audienceSnapshot, mediaKitUrl } from "./audience";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import { notes } from "./senpai-notes/data";

const partnershipEmail = "animejay89@gmail.com";

const socialLinks = [
  { name: "YouTube", handle: "@SenpaiS1lva", description: "Longer reactions, recommendations, and conversations that need room to breathe.", href: "https://m.youtube.com/@SenpaiS1lva", icon: FaYoutube, priority: true },
  { name: "TikTok", handle: "@senpais1lva", description: "Sharp anime takes, quick reactions, and the moments we need to talk about right now.", href: "https://www.tiktok.com/@senpais1lva", icon: FaTiktok, priority: true },
  { name: "Instagram", handle: "@senpais1lva", description: "Carousels, artwork, and conversations built to keep going in the comments.", href: "https://www.instagram.com/senpais1lva?igsh=Z3YzMnU5bXFyNHdv&utm_source=qr", icon: FaInstagram, priority: false },
  { name: "Facebook", handle: "SenpaiS1lva", description: "Clips, community discussion, and a little organized anime chaos.", href: "https://www.facebook.com/share/17zHw4CU8B/?mibextid=wwXIfr", icon: FaFacebookF, priority: false },
];

const topics = ["Anime", "Donghua", "Philosophy", "Culture"];

const featuredSlots = [
  { number: "01", type: "Anime culture · Video essay", title: "Anime has more to say", note: "A fast, thoughtful take built for the conversation that starts after the credits roll.", href: "https://www.instagram.com/reel/DaQZXg2NcXB/?igsh=MWQ5YzF0aGNyY291eA==", art: "feature-art--logo" },
  { number: "02", type: "Creator perspective · Reel", title: "The conversation after the credits", note: "Where reaction gives way to interpretation, context, and the question worth debating.", href: "https://www.instagram.com/reel/DadRSn7tibw/?igsh=MTF3MWNjZ3NmNms4cQ==", art: "feature-art--city" },
];

const partnerships = ["Sponsored short-form", "Streaming campaigns", "Product integrations", "Events & conventions", "Creator collaborations", "Brand ambassadorships"];

const commandLinks = [
  { label: "Latest take", meta: "Watch", href: "/watch" },
  { label: "Start watching", meta: "Discover", href: "/recommendations" },
  { label: "Read Senpai Notes", meta: "Think", href: "/senpai-notes" },
  { label: "Work with me", meta: "Partner", href: "/work-with-me" },
];

const fanPaths = [
  { kicker: "Find your next obsession", title: "Give me something to watch", copy: "Mood-first picks for anime and donghua fans who want a real answer, not another recycled top ten.", href: "/recommendations", cta: "Open recommendations", icon: FiSearch },
  { kicker: "Go beneath the animation", title: "I want the deeper anime talk", copy: "Psychology, philosophy, culture, production, and the ideas that keep echoing after an episode ends.", href: "/senpai-notes", cta: "Enter Senpai Notes", icon: FiBookOpen },
  { kicker: "Build something worth watching", title: "I’m a brand or collaborator", copy: "Creator-led partnerships for anime, gaming, entertainment, technology, and culture-forward teams.", href: "/work-with-me", cta: "See partnership options", icon: FiBriefcase },
];

const trustProof = [
  { label: "Content lanes", value: "Reactions, recommendations, culture, psychology & philosophy" },
  { label: "Platform presence", value: "YouTube, TikTok, Instagram & Facebook" },
  { label: "Audience fit", value: "Curious anime and donghua fans who want more than surface-level takes" },
  { label: "Partnership style", value: "Creator-led integrations, campaigns, events & collaborations" },
];

export default function Home() {
  return (
    <main id="main-content" className="site-shell">
      <div className="city-backdrop" aria-hidden="true" />
      <div className="rain" aria-hidden="true" />

      <SiteHeader />

      <header className="masthead" aria-label="SenpaiS1lva creator banner">
        <div className="container masthead-inner">
          <span className="masthead-kicker">Creator headquarters</span>
          <div className="masthead-name"><span>Senpai</span><strong>S1lva</strong></div>
          <span className="masthead-meta">Anime · Donghua · Culture</span>
        </div>
      </header>

      <section id="top" className="hero container">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> Anime, culture & conversation</p>
          <h1>Anime has<br /><em>more to say.</em></h1>
          <p className="hero-intro">Welcome to the world of <strong>SenpaiS1lva</strong>, where anime, donghua, and the ideas hiding underneath them get the conversation they deserve.</p>
          <div className="hero-actions">
            <a className="primary-button" href="https://m.youtube.com/@SenpaiS1lva" target="_blank" rel="noopener noreferrer">Watch on YouTube <FiPlay aria-hidden="true" /></a>
            <a className="text-link" href="#about">Meet Silva <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <div className="identity-stage">
          <div className="logo-halo" aria-hidden="true" />
          <Image className="hero-logo" src="/senpais1lva-logo.jpeg" alt="SenpaiS1lva illustrated creator logo" width={1280} height={1280} priority unoptimized />
          <div className="identity-caption"><span>ANIME CREATOR</span><span>ORLANDO, FL</span></div>
        </div>
        <nav className="command-strip" aria-label="Creator command center">
          <span className="command-status"><i aria-hidden="true" /> On air</span>
          <div className="command-track">
            {commandLinks.map((item, index) => <Link href={item.href} key={item.label}><small>0{index + 1} · {item.meta}</small><strong>{item.label}</strong><FiArrowUpRight aria-hidden="true" /></Link>)}
          </div>
        </nav>
      </section>

      <section id="topics" className="topic-rail" aria-label="Topics covered">
        <div className="container topic-inner">
          <span className="topic-label">What I cover</span>
          <div className="topic-list">{topics.map((topic, index) => <span key={topic}>{topic}{index < topics.length - 1 && <i aria-hidden="true">✦</i>}</span>)}</div>
        </div>
      </section>

      <section className="fan-section container reveal-section" aria-labelledby="fan-heading">
        <div className="section-heading">
          <div><p className="eyebrow">Choose your doorway</p><h2 id="fan-heading">What kind of fan are you?</h2></div>
          <p className="section-note">No wrong answer. Just a better place to start.</p>
        </div>
        <div className="fan-grid">
          {fanPaths.map((path, index) => { const Icon = path.icon; return <Link className="fan-card" href={path.href} key={path.title}>
            <span className="fan-number">0{index + 1}</span><Icon aria-hidden="true" /><small>{path.kicker}</small><h3>{path.title}</h3><p>{path.copy}</p><strong>{path.cta} <FiArrowRight aria-hidden="true" /></strong>
          </Link>; })}
        </div>
      </section>

      <section className="audience-section container reveal-section" aria-labelledby="audience-heading">
        <div className="audience-intro">
          <p className="eyebrow">Audience snapshot</p>
          <h2 id="audience-heading">Thoughtful anime creator with proof.</h2>
          <p>{audienceSnapshot.headline}</p>
          <div className="audience-meta">
            <span>{audienceSnapshot.verifiedLabel}</span>
            <span>{audienceSnapshot.lastUpdated}</span>
          </div>
          <a className="editorial-link" href={mediaKitUrl} target="_blank" rel="noopener noreferrer">View media kit <FiArrowUpRight aria-hidden="true" /></a>
        </div>
        <div className="audience-grid" aria-label="Verified SenpaiS1lva audience numbers">
          {audienceSnapshot.metrics.map((metric) => (
            <article className="audience-card" key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="start-section container reveal-section">
        <div className="start-visual">
          <Image className="about-photo" src="/about-silva.webp" alt="SenpaiS1lva smiling at a restaurant" fill sizes="(max-width: 800px) 100vw, 50vw" unoptimized />
          <div className="start-stamp"><span>MEET</span><strong>SILVA</strong></div>
        </div>
        <div className="start-copy">
          <p className="eyebrow">Creator · Host · Your anime senpai</p>
          <h2>Thoughtful anime talk without losing the fun.</h2>
          <p>SenpaiS1lva creates entertaining, human conversations around anime, donghua, culture, psychology, and the ideas beneath the animation. The goal is simple: help longtime fans see more in the stories they love and give curious newcomers a reason to step inside.</p>
          <a className="editorial-link" href="https://m.youtube.com/@SenpaiS1lva" target="_blank" rel="noopener noreferrer">Explore the YouTube channel <FiArrowUpRight aria-hidden="true" /></a>
        </div>
      </section>

      <section id="featured" className="featured-section container reveal-section">
        <div className="section-heading">
          <div><p className="eyebrow">Selected work</p><h2>What brands and followers should watch.</h2></div>
          <p className="section-note">Two hand-picked pieces from<br />the SenpaiS1lva feed.</p>
        </div>
        <div className="featured-grid">
          {featuredSlots.map((item) => (
            <a className="feature-card" key={item.number} href={item.href} target="_blank" rel="noopener noreferrer" aria-label={`Watch selected Instagram reel ${item.number}`}>
              <div className={`feature-placeholder ${item.art}`}><span>{item.number}</span><FaInstagram aria-hidden="true" /><strong>WATCH REEL</strong></div>
              <p>{item.type}</p><h3>{item.title}</h3><small>{item.note}</small><FiArrowUpRight className="feature-arrow" aria-hidden="true" />
            </a>
          ))}
        </div>
      </section>

      <section className="notes-teaser reveal-section" aria-labelledby="notes-teaser-heading">
        <div className="container">
          <div className="section-heading">
            <div><p className="eyebrow">From Senpai Notes</p><h2 id="notes-teaser-heading">Keep following the thought.</h2></div>
            <Link className="editorial-link" href="/senpai-notes">Read every note <FiArrowUpRight aria-hidden="true" /></Link>
          </div>
          <div className="notes-scroller" aria-label="Featured Senpai Notes">
            {notes.map((note, index) => <Link className="note-teaser-card" href={`/senpai-notes/${note.slug}`} key={note.slug}>
              <span>0{index + 1}</span><small>{note.lens}</small><h3>{note.title}</h3><p>{note.excerpt}</p><strong>Read the note <FiArrowUpRight aria-hidden="true" /></strong>
            </Link>)}
          </div>
        </div>
      </section>

      <section id="partnerships" className="partner-section reveal-section">
        <div className="container partner-inner">
          <div className="partner-copy"><p className="eyebrow">For brands & collaborators</p><h2>Make something the audience actually wants to watch.</h2><p>SenpaiS1lva partners best with anime, entertainment, gaming, technology, lifestyle, and culture-forward brands that respect the audience and want an authentic creator voice.</p><div className="trust-grid">{trustProof.map((item) => <div key={item.label}><span>{item.label}</span><strong>{item.value}</strong></div>)}</div></div>
          <div className="partner-panel">
            <div className="partner-panel-heading"><FiBriefcase aria-hidden="true" /><span>Partnership formats</span></div>
            <ul>{partnerships.map((item) => <li key={item}>{item}</li>)}</ul>
            <div className="partner-actions">
              <a className="primary-button" href={`mailto:${partnershipEmail}?subject=Partnership%20Inquiry%20for%20SenpaiS1lva`}><FiMail aria-hidden="true" /> Partnership inquiry</a>
              <a className="media-kit-link" href={mediaKitUrl} target="_blank" rel="noopener noreferrer"><FiDownload aria-hidden="true" /> View media kit</a>
            </div>
            <a className="partner-email" href={`mailto:${partnershipEmail}`}>{partnershipEmail}</a>
          </div>
        </div>
      </section>

      <section id="socials" className="social-section container reveal-section">
        <div className="section-heading"><div><p className="eyebrow">Find SenpaiS1lva</p><h2>Choose your platform.</h2></div><p className="section-note">Same Senpai. Different flavor.<br />Pick the feed that fits you.</p></div>
        <div className="social-grid">
          {socialLinks.map((social, index) => { const Icon = social.icon; return (
            <a className={`social-card ${social.priority ? "social-card--primary" : "social-card--secondary"}`} key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={`Open SenpaiS1lva on ${social.name}`}>
              <span className="social-index">0{index + 1}</span><Icon className="social-icon" aria-hidden="true" /><span className="social-info"><strong>{social.name}</strong><small>{social.handle}</small><span>{social.description}</span></span><FiArrowUpRight className="arrow" aria-hidden="true" />
            </a>
          ); })}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
