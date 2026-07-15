import { asset } from "../lib/assets";
import { demoImage } from "../lib/demoImages";

/**
 * Image resolution order:
 *   1. Asli file src/assets me   (client ki final image)
 *   2. Demo image (Unsplash)     (jab tak final na aaye)
 *   3. Light branded placeholder (client logos etc. jinki demo nahi)
 */
export default function Img({ file, alt = "", className = "", imgClassName = "", ...rest }) {
  const src = asset(file) || demoImage(file);

  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={`${className} ${imgClassName}`.trim()}
        {...rest}
      />
    );
  }

  return (
    <div
      className={`flex items-center justify-center bg-mist text-muted ring-1 ring-navy-900/5 ${className}`}
      role="img"
      aria-label={alt || file}
      {...rest}
    >
      <span className="px-3 text-center text-[11px] font-medium tracking-wide">{alt || file}</span>
    </div>
  );
}
