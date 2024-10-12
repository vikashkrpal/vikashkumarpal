const withFonts = require('next-fonts');
const webpack = require('webpack');

const nextConfig = {
    reactStrictMode: false,
    trailingSlash: true,
    i18n: {
        locales: ['en'],
        defaultLocale: 'en',
    },
    compiler: {
        styledComponents: true,
    },
    images: {
        domains: [
            'admin.improvefx.com',
            'assets-global.website-files.com',
            'ncmaz-nextjs.vercel.app',
            'admin.vikashkumarpal.com',
            'secure.gravatar.com',
        ],
    },
    webpack: (config, { isServer }) => {
        config.plugins.push(
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
            })
        );

        if (!isServer) {
            config.resolve.fallback = {
                ...config.resolve.fallback,
                fs: false,
                module: false,
            };
        }

        return config;
    },
    async rewrites() {
        return [
            {
                source: '/:slug.xml', // Capture any slug ending with .xml
                destination: '/api/sitemap?slug=:slug', // Forward slug as query parameter
            },
        ];
    },
};

module.exports = withFonts(nextConfig);
