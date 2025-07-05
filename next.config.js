/** @type {import('next').NextConfig} */
const nextConfig = {
    // Performance optimizations
    experimental: {
        optimizeCss: true,
        optimizePackageImports: ['framer-motion', 'lucide-react'],
    },

    // Image optimization
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '/**',
            }
        ],
        formats: ['image/webp', 'image/avif'],
        minimumCacheTTL: 31536000, // 1 year
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },

    // Compression and caching
    compress: true,

    // Bundle optimization
    webpack: (config, { isServer }) => {
        // Ensure proper module resolution
        config.resolve.extensions = ['.ts', '.tsx', '.js', '.jsx', '.json']
        config.resolve.fallback = {
            ...config.resolve.fallback,
            fs: false,
        }

        // Add explicit path resolution
        config.resolve.alias = {
            ...config.resolve.alias,
            '@': require('path').resolve(__dirname, 'src'),
            '@/components': require('path').resolve(__dirname, 'src/components'),
            '@/lib': require('path').resolve(__dirname, 'src/lib'),
            '@/types': require('path').resolve(__dirname, 'src/types'),
            '@/app': require('path').resolve(__dirname, 'src/app'),
        }

        // Optimize bundle splitting
        if (!isServer) {
            config.optimization.splitChunks = {
                chunks: 'all',
                cacheGroups: {
                    default: false,
                    vendors: false,
                    // Vendor chunk
                    vendor: {
                        name: 'vendor',
                        chunks: 'all',
                        test: /node_modules/,
                        priority: 20,
                    },
                    // Common chunk
                    common: {
                        name: 'common',
                        minChunks: 2,
                        chunks: 'all',
                        priority: 10,
                        reuseExistingChunk: true,
                        enforce: true,
                    },
                    // Framer Motion separate chunk
                    framerMotion: {
                        name: 'framer-motion',
                        test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
                        chunks: 'all',
                        priority: 30,
                    },
                },
            };
        }

        return config;
    },

    // Headers for caching
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-DNS-Prefetch-Control',
                        value: 'on'
                    },
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block'
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'SAMEORIGIN'
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff'
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'origin-when-cross-origin'
                    },
                ],
            },
            {
                source: '/favicon.ico',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, immutable, max-age=31536000',
                    },
                ],
            },
            {
                source: '/_next/static/(.*)',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, immutable, max-age=31536000',
                    },
                ],
            },
        ];
    },
};

module.exports = nextConfig; 