import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand"><span className="footer-logo" aria-hidden="true" /><div><strong>SenpaiS1lva</strong><p>Anime isn’t the limit. It’s the lens.</p></div></div>
        <div className="footer-column"><span>Explore</span><Link href="/watch">Watch</Link><Link href="/#summer-coverage">Summer Coverage</Link><Link href="/recommendations">Recommendations</Link><Link href="/senpai-notes">Senpai Notes</Link><Link href="/about">About</Link></div>
        <div className="footer-column"><span>Projects</span><Link href="/courplay">Courplay</Link><Link href="/silvas-circle">Silva’s Circle</Link><Link href="/work-with-me">Work With Me</Link><a href="mailto:animejay89@gmail.com">Contact</a></div>
        <div className="footer-socials"><span>Follow the conversation</span><div><a href="https://m.youtube.com/@SenpaiS1lva" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><FaYoutube /></a><a href="https://www.tiktok.com/@senpais1lva" aria-label="TikTok" target="_blank" rel="noopener noreferrer"><FaTiktok /></a><a href="https://www.instagram.com/senpais1lva" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a><a href="https://www.facebook.com/share/17zHw4CU8B/" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a></div></div>
      </div>
      <div className="container footer-bottom"><span>© 2026 SenpaiS1lva</span><span>Orlando, Florida</span><Link href="/">Back home ↑</Link></div>
    </footer>
  );
}
