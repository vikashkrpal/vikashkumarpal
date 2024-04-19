const withFonts = require('next-fonts');
const webpack = require("webpack");

module.exports = withFonts({
    images: {
        domains: [
            'admin.improvefx.com',
            'assets-global.website-files.com',
            'admin.vikashkumarpal.com'
        ],
    },
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // Add the webpack configuration here
        config.plugins.push(
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
            })
        );
        return config;
    },
});
