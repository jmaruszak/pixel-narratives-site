import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: "/intelligence-layer",
        destination: "/automation",
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
        destination: "/serving-the-south",
        permanent: true,
      },
      {
        source: "/birmingham-ai-studio",
        destination: "/serving-the-south",
        permanent: true,
      },
      {
        source: "/gulf-coast-ai-studio",
        destination: "/serving-the-south",
        permanent: true,
      },
      {
        source: "/jacksonville-ai-studio",
        destination: "/serving-the-south",
        permanent: true,
      },
      {
        source: "/memphis-ai-studio",
        destination: "/serving-the-south",
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
