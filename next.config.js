/** @type {import('next').NextConfig} */
const nextConfig = {
    
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: [{loader: '@svgr/webpack', options: { icon: true}}]
        });

        return config;
    }
}
// webpack(config) {
//     config.module.rules.push({
//         test: /\.svg$/,
//         use: ['@svgr/webpack', 'url-loader']
//     });

//     return config;
// },
module.exports = nextConfig
