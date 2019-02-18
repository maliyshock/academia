const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const pug = require('./webpack/pug');
const extractCSS = require('./webpack/css.extract');
const uglifyJS = require('./webpack/js.uglify');
const CopyWebpackPlugin =   require('copy-webpack-plugin');

const PATHS = {
    source: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'build')
};

const common = merge([
    {
        entry: {
            'index': PATHS.source + '/src-js/index.js',
        },
        output: {
            path: PATHS.build,
            filename: '[name].js'
        },

        resolve: {
            modules: [path.resolve('src'), "node_modules"],
        },

        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: PATHS.source + '/src-pug/index.pug'
            }),
            // new webpack.ProvidePlugin({
            //     $: 'jquery',
            //     jQuery: 'jquery'
            // }),
            new CopyWebpackPlugin([
                { context: PATHS.source + '/images', from: '**/*', to: 'images' },
                { context: PATHS.source + '/fonts', from: '**/*', to: 'fonts' }
            ])
        ]
    },

    pug(),
]);

module.exports = function() {
    return merge([
        common,
        extractCSS(),
        uglifyJS()
    ]);
};
