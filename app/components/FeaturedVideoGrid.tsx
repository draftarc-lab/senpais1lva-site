import type { CSSProperties } from "react";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6";
import { FiArrowUpRight, FiPlay } from "react-icons/fi";
import type { FeaturedVideo } from "../coverage";

type FeaturedVideoGridProps = {
  videos: FeaturedVideo[];
  limit?: number;
  variant?: "home" | "watch";
};

const platformIcons = {
  Instagram: FaInstagram,
  TikTok: FaTiktok,
  YouTube: FaYoutube,
  Site: FiPlay,
};

export default function FeaturedVideoGrid({ videos, limit, variant = "watch" }: FeaturedVideoGridProps) {
  const visibleVideos = typeof limit === "number" ? videos.slice(0, limit) : videos;

  return (
    <div className={variant === "home" ? "featured-grid featured-video-grid" : "watch-grid video-discovery-grid"}>
      {visibleVideos.map((video, index) => {
        const Icon = platformIcons[video.platform];
        const isInternal = video.url.startsWith("/");
        const imageStyle = video.thumbnail ? ({ "--video-thumb": `url("${video.thumbnail}")` } as CSSProperties) : undefined;

        return (
          <a
            aria-label={`${video.cta}: ${video.title}`}
            className={variant === "home" ? "feature-card video-discovery-card" : "watch-card video-discovery-card"}
            href={video.url}
            key={video.slug}
            rel={isInternal ? undefined : "noopener noreferrer"}
            style={imageStyle}
            target={isInternal ? undefined : "_blank"}
          >
            <div className={variant === "home" ? "feature-placeholder video-thumb" : "video-thumb"}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <Icon aria-hidden="true" />
              <strong>{video.platform}</strong>
            </div>
            <p>{video.category}</p>
            <h3>{video.title}</h3>
            <small>{video.animeOrDonghuaTitle}</small>
            <small className="video-description">{video.description}</small>
            {(video.publishDate || video.duration) && (
              <span className="video-meta-line">
                {video.publishDate && <span>{video.publishDate}</span>}
                {video.duration && <span>{video.duration}</span>}
              </span>
            )}
            <strong className="video-card-cta">
              {video.cta} <FiArrowUpRight aria-hidden="true" />
            </strong>
            <FiArrowUpRight className="feature-arrow" aria-hidden="true" />
          </a>
        );
      })}
    </div>
  );
}
