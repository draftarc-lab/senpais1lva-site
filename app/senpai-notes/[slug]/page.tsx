import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import { featuredVideos } from "../../coverage";
import { getRecommendationBySlug } from "../../recommendations/data";
import { getNoteBySlug, notes } from "../data";

export function generateStaticParams() { return notes.map((note) => ({ slug: note.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const note = getNoteBySlug(slug);
  return note ? {
    title: note.title,
    description: note.summary,
    openGraph: {
      title: note.title,
      description: note.summary,
      images: [{ url: note.socialImage, width: 1200, height: 630, alt: `${note.title} by SenpaiS1lva` }],
    },
  } : {};
}

export default async function NotePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const note = getNoteBySlug(slug);
  if (!note) notFound();
  const relatedNotes = note.relatedNoteSlugs.map((relatedSlug) => getNoteBySlug(relatedSlug)).filter((item) => item !== undefined);
  const relatedRecommendation = getRecommendationBySlug(note.relatedRecommendationSlug);
  const relatedVideo = featuredVideos.find((video) => video.slug === note.relatedVideoSlug);

  return <main id="main-content" className="inner-page article-page"><SiteHeader />
    <article><header className="article-header container"><Link href="/senpai-notes"><FiArrowLeft /> All Senpai Notes</Link><p className="eyebrow">{note.category} · {note.lens}</p><h1>{note.title}</h1><p>{note.excerpt}</p><div><span>SenpaiS1lva</span><time dateTime={note.publishDate}>{note.publishDate}</time>{note.updatedDate && <time dateTime={note.updatedDate}>Updated {note.updatedDate}</time>}<span>{note.readingTime}</span></div>{note.relatedAnimeOrDonghua.length > 0 && <div className="article-topic-list" aria-label="Related anime or donghua">{note.relatedAnimeOrDonghua.map((item) => <span key={item}>{item}</span>)}</div>}</header>
      <div className="article-body container">{note.paragraphs.map((paragraph, index) => <p className={index === 0 ? "article-lede" : ""} key={paragraph}>{paragraph}</p>)}<aside><span>Question for the circle</span><blockquote>{note.question}</blockquote></aside></div>
    </article>
    <section className="container related-content-section" aria-labelledby="related-content-heading">
      <div className="page-section-heading"><div><p className="eyebrow">Keep exploring</p><h2 id="related-content-heading">Follow the thread.</h2></div></div>
      <div className="related-content-grid">
        {relatedRecommendation && <Link href="/recommendations" className="related-content-card"><span>Recommendation</span><h3>{relatedRecommendation.canonicalTitle}</h3><p>{relatedRecommendation.whySilvaRecommends}</p><strong>Find your next watch <FiArrowUpRight aria-hidden="true" /></strong></Link>}
        {relatedVideo && <a href={relatedVideo.url} target={relatedVideo.url.startsWith("/") ? undefined : "_blank"} rel={relatedVideo.url.startsWith("/") ? undefined : "noopener noreferrer"} className="related-content-card"><span>{relatedVideo.category}</span><h3>{relatedVideo.title}</h3><p>{relatedVideo.description}</p><strong>Watch the related video <FiArrowUpRight aria-hidden="true" /></strong></a>}
        {relatedNotes.map((relatedNote) => <Link href={`/senpai-notes/${relatedNote.slug}`} className="related-content-card" key={relatedNote.slug}><span>Related note</span><h3>{relatedNote.title}</h3><p>{relatedNote.summary}</p><strong>Continue the thought <FiArrowUpRight aria-hidden="true" /></strong></Link>)}
      </div>
    </section>
    <section className="page-cta"><div className="container"><p>Keep the conversation moving.</p><Link className="primary-button" href="/senpai-notes">Read another note <FiArrowUpRight /></Link></div></section><SiteFooter />
  </main>;
}