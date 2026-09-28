import { useState } from "react";

export default function Media({ src, alt, eager = false }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return <div className="media missing">No GIF available</div>;
  }

  return (
    <div className="media">
      <img
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "low"}
        decoding="async"
        onError={() => setFailed(true)}
      />
    </div>
  );
}
