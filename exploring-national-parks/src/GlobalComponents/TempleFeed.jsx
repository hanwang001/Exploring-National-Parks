import { useEffect } from "react";

export default function TempleFeed() {
  useEffect(() => {
    // Ensure Twitter (X) widgets script is present, then trigger render
    const ensureTwitterScript = () =>
      new Promise((resolve) => {
        if (window.twttr?.widgets) return resolve();
        const existing = document.querySelector(
          'script[src*="platform.twitter.com/widgets.js"]'
        );
        if (existing) {
          existing.addEventListener("load", () => resolve());
          return;
        }
        const s = document.createElement("script");
        s.src = "https://platform.twitter.com/widgets.js";
        s.async = true;
        s.charset = "utf-8";
        s.onload = () => resolve();
        document.body.appendChild(s);
      });

    ensureTwitterScript().then(() => {
      try {
        window.twttr.widgets.load();
      } catch {}
    });
  }, []);

  const card = {
    maxWidth: 600,
    margin: "0 auto",
    padding: "16px",
    borderRadius: "16px",
    background: "white",
    boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
  };

  return (
    <section style={card} aria-label="Temple Latest News / Alerts">
      <h2 style={{ textAlign: "center", marginBottom: 8 }}>
        Temple Latest News / Alerts
      </h2>

      {/* TUalert: show only the latest post */}
      <a
        className="twitter-timeline"
        data-chrome="noheader nofooter noborders noscrollbar"
        data-tweet-limit="1"
        data-height="220"
        href="https://x.com/TempleAlert"
        title="Latest from @TempleAlert"
      >
        Latest from @TempleAlert
      </a>

      <div style={{ height: 12 }} />

      {/* Temple University official: show only the latest post */}
      <a
        className="twitter-timeline"
        data-chrome="noheader nofooter noborders"
        data-tweet-limit="1"
        data-height="320"
        href="https://x.com/TempleUniv"
        title="Latest from @TempleUniv"
      >
        Latest from @TempleUniv
      </a>
    </section>
  );
}
