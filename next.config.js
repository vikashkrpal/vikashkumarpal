const withFonts = require('next-fonts');
const webpack = require("webpack");

const nextConfig = {
    reactStrictMode: false,
    trailingSlash: true,
    i18n: {
        locales: ["en"],
        defaultLocale: "en",
    },
};

module.exports = withFonts({
    ...nextConfig,
    webpack: (config, { webpack }) => {
        config.plugins.push(
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
            })
        );
        return config;
    },
    images: {
        domains: [
            'admin.improvefx.com',
            'assets-global.website-files.com',
            'admin.vikashkumarpal.com'
        ],
        ...nextConfig.images,
    },
});
