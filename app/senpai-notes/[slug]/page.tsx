import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import { notes } from "../data";

export function generateStaticParams() { return notes.map((note) => ({ slug: note.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const note = notes.find((item) => item.slug === slug);
  return note ? { title: note.title, description: note.excerpt } : {};
}

export default async function NotePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const note = notes.find((item) => item.slug === slug);
  if (!note) notFound();
  return <main id="main-content" className="inner-page article-page"><SiteHeader />
    <article><header className="article-header container"><Link href="/senpai-notes"><FiArrowLeft /> All Senpai Notes</Link><p className="eyebrow">{note.lens}</p><h1>{note.title}</h1><p>{note.excerpt}</p><div><span>SenpaiS1lva</span><span>5 min read</span></div></header>
      <div className="article-body container">{note.paragraphs.map((paragraph, index) => <p className={index === 0 ? "article-lede" : ""} key={paragraph}>{paragraph}</p>)}<aside><span>Question for the circle</span><blockquote>{note.question}</blockquote></aside></div>
    </article>
    <section className="page-cta"><div className="container"><p>Keep the conversation moving.</p><Link className="primary-button" href="/senpai-notes">Read another note <FiArrowUpRight /></Link></div></section><SiteFooter />
  </main>;
}
