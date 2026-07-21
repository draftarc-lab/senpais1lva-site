import Link from "next/link";
import { FiArrowUpRight, FiHome } from "react-icons/fi";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";

export default function NotFound() {
  return (
    <main id="main-content" className="inner-page error-page">
      <SiteHeader />
      <section className="container error-state" aria-labelledby="not-found-heading">
        <p className="eyebrow">404 · Lost episode</p>
        <h1 id="not-found-heading">This page drifted off schedule.</h1>
        <p>The link may have moved, but the creator hub is still running. Start from a known doorway and keep exploring.</p>
        <div className="error-actions">
          <Link className="primary-button" href="/"><FiHome aria-hidden="true" /> Back home</Link>
          <Link className="editorial-link" href="/watch">Go to Watch <FiArrowUpRight aria-hidden="true" /></Link>
          <Link className="editorial-link" href="/recommendations">Explore Recommendations <FiArrowUpRight aria-hidden="true" /></Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
