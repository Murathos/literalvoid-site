import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/still",
        destination: "https://itunes.apple.com/app/id6752446871",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
