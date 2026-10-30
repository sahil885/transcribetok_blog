import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // /bulk-tiktok-transcripts was briefly live before we corrected the
      // product claims (TranscribeTok handles one video at a time, not bulk).
      // 301 rather than 404 in case anything crawled or linked it.
      {
        source: "/bulk-tiktok-transcripts",
        destination: "/best-tiktok-transcript-tools-2026",
        permanent: true,
      },
      // 2026-10-30 consolidation: 21 blog pages were splitting impressions for
      // "tiktok transcript". Pages duplicating a transcribetok.com landing page
      // now point there; the generic "transcribe" guide was merged into
      // how-to-get-a-tiktok-transcript.
      {
        source: "/tiktok-transcript-generator",
        destination: "https://transcribetok.com/tiktok-transcript-generator",
        permanent: true,
      },
      {
        source: "/tiktok-to-text",
        destination: "https://transcribetok.com/tiktok-to-text",
        permanent: true,
      },
      {
        source: "/download-tiktok-transcript",
        destination: "https://transcribetok.com/download-tiktok-transcript",
        permanent: true,
      },
      {
        source: "/transcribe-tiktok-video",
        destination: "/how-to-get-a-tiktok-transcript",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
