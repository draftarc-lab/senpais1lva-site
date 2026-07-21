"use client";

import Link from "next/link";
import { FiRefreshCw } from "react-icons/fi";

export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="en">
      <body>
        <main id="main-content" className="inner-page error-page">
          <section className="container error-state" aria-labelledby="error-heading">
            <p className="eyebrow">Something slipped</p>
            <h1 id="error-heading">The page needs a quick reset.</h1>
            <p>Try reloading this view, or head back to the creator hub and choose another path.</p>
            <div className="error-actions">
              <button className="primary-button" type="button" onClick={reset}><FiRefreshCw aria-hidden="true" /> Try again</button>
              <Link className="editorial-link" href="/">Back home</Link>
            </div>
          </section>
        </main>
      </body>
    </html>
  );
}
