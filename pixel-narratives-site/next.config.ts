import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  allowedDevOrigins: ["127.0.0.1"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        pathname: "/vi/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/intelligence-layer",
        destination: "/implementation",
        permanent: true,
      },
      {
        source: "/automation",
        destination: "/implementation",
        permanent: true,
      },
      {
        source: "/web-intelligence",
        destination: "/websites",
        permanent: true,
      },
      {
        source: "/narrative-intelligence",
        destination: "/marketing",
        permanent: true,
      },
      {
        source: "/projects",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/sample-intelligence-layer-blueprint",
        destination: "/sample-implementation-assessment",
        permanent: true,
      },
      {
        source: "/sample/sample-intelligence-layer-blueprint.pdf",
        destination: "/sample/sample-implementation-assessment.pdf",
        permanent: true,
      },
      {
        source: "/mississippi-ai-studio",
        destination: "/locations/mississippi",
        statusCode: 301,
      },
      {
        source: "/birmingham-ai-studio",
        destination: "/locations/birmingham",
        statusCode: 301,
      },
      {
        source: "/memphis-ai-studio",
        destination: "/locations/memphis",
        statusCode: 301,
      },
      {
        source: "/locations",
        destination: "/serving-the-south",
        statusCode: 301,
      },
      {
        source: "/starting-small",
        destination: "/work-with-us",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
