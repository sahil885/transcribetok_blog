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
    ];
  },
};

export default nextConfig;
