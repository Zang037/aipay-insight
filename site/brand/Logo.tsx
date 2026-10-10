// 站点的字标和圆环标记：页面用 Wordmark 画站名（size 是高度，单位像素），RingMark 是小标记，转起来就是加载动画。
// 这里用站名排字；有自己的 Logo 时，把 Wordmark 换成你的 SVG（保持同样的参数）。
import { SITE } from "../site.ts";

export function Wordmark({ size = 24, className = "", title = SITE.name }: { size?: number; className?: string; title?: string }) {
  return (
    <span className={`inline-flex items-center font-black leading-none tracking-[-0.03em] ${className}`} style={{ fontSize: Math.round(size * 0.92) }} aria-label={title} role="img">
      <svg aria-hidden="true" viewBox="0 0 28 28" className="mr-[0.34em] size-[0.92em] shrink-0">
        <path d="M4 8h9.5A7.5 7.5 0 0 1 21 15.5V19" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" />
        <path d="m17 16 4 4 4-4" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="4" cy="8" r="3.2" fill="currentColor" />
        <path d="M4 20h8" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" />
      </svg>
      <span aria-hidden="true">{SITE.name}</span>
    </span>
  );
}

/** A payment path with a confirmation arrow; spinning, it is the loader. */
export function RingMark({ className = "", spinning = false }: { className?: string; spinning?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <g style={spinning ? { transformOrigin: "12px 12px", animation: "spin-slow 1.1s linear infinite" } : undefined}>
        <path d="M4 7h7a7 7 0 0 1 7 7v3" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
        <path d="m15 14 3 3 3-3" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="4" cy="7" r="2.4" fill="currentColor" />
      </g>
      <path d="M4 17h6" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  );
}
