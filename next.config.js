/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ['avatars.githubusercontent.com'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.githubusercontent.com",
      },
    ],
  },
  rewrites: () => {
    const rewrites = [];

    rewrites.push({
      source: "/siteb{/}?",
      destination: "https://rrv7.vercel.app",
    });
    rewrites.push({
      source: "/siteb/:path*",
      destination: "https://rrv7.vercel.app/office",
    });
    rewrites.push({
      source: "/testing{/}?",
      destination: `https://www.google.com`,
    });

    return {
      beforeFiles: rewrites,
    };
  },
};

module.exports = nextConfig;
