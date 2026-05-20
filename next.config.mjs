/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },

  // ── Image Optimization ─────────────────────────────────────────────────────
  images: {
    unoptimized: false,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'plus.unsplash.com' },
    ],
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // ── Core Flags ─────────────────────────────────────────────────────────────
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,

  // ── Redirects ──────────────────────────────────────────────────────────────
  async redirects() {
    return [
      {
        source: '/event-details',
        destination: '/hackathon',
        permanent: true,
      },
      {
        source: '/events',
        destination: '/hackathon',
        permanent: true,
      },
    ];
  },

  // ── Security & Caching Headers ─────────────────────────────────────────────
  async headers() {
    return [
      {
        // Apply to all routes
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
      {
        // Cache public images, fonts and icons (path-to-regexp compatible)
        source: '/:path*.(jpg|jpeg|png|gif|webp|avif|svg|ico|woff|woff2|ttf|otf)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
};

export default nextConfig;
