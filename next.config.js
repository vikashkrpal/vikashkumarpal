const withFonts = require('next-fonts');

module.exports = withFonts({
    images: {
        domains: ['admin.improvefx.com','assets-global.website-files.com'],
    },
    webpack(config, options) {
        return config;
    },
});
