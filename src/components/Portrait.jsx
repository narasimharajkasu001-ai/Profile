import { useState } from "react";

export function Portrait({ src, alt, mark, className = "", eager = false }) {
  const [failed, setFailed] = useState(false);
  const classes = ["portrait", className].filter(Boolean).join(" ");

  return (
    <div className={classes}>
      {!failed && src ? (
        <img
          src={src}
          alt={alt}
          draggable="false"
          loading={eager ? "eager" : "lazy"}
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="portrait-fallback" role="img" aria-label={alt}>
          <span>{mark}</span>
        </div>
      )}
    </div>
  );
}
