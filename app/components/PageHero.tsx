import type { ReactNode } from "react";

export default function PageHero({ eyebrow, title, intro, action }: { eyebrow: string; title: ReactNode; intro: string; action?: ReactNode }) {
  return <header className="inner-hero"><div className="container inner-hero-content"><p className="eyebrow"><span className="eyebrow-line" />{eyebrow}</p><h1>{title}</h1><p>{intro}</p>{action && <div className="inner-hero-action">{action}</div>}</div></header>;
}
