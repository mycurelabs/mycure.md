/** @type {import('next').NextConfig} */
const nextConfig = {
  // Build checks enabled for production quality
  eslint: {
    ignoreDuringBuilds: process.env.NODE_ENV !== 'production',
  },
  typescript: {
    ignoreBuildErrors: process.env.NODE_ENV !== 'production',
  },
  // Image optimization enabled (Next.js default)
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  productionBrowserSourceMaps: false,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' https://www.youtube.com https://www.youtube-nocookie.com https://www.googletagmanager.com https://va.vercel-scripts.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: https:",
              "frame-src https://www.youtube.com https://www.youtube-nocookie.com",
              "frame-ancestors 'none'",
              "connect-src 'self' https://www.google-analytics.com https://vitals.vercel-insights.com https://va.vercel-scripts.com",
              "worker-src 'self' blob:",
            ].join('; '),
          },
        ],
      },
    ]
  },
}

export default nextConfig
