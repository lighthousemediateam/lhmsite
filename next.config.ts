import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/book-session",
        destination: "/contact", // or another page if you'd prefer
        permanent: true,
      },
      {
        source: "/book-session/",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/home",
        destination: "/", // root homepage
        permanent: true,
      },
      {
        source: "/home/",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
