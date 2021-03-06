const path = require('path');
const HtmlWebpackplugin = require('html-webpack-plugin');
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
            new HtmlWebpackplugin({
                filename: 'articles.html',
                template: PATHS.source + '/src-pug/articles.pug'
            }),
            new HtmlWebpackplugin({
                filename: 'reviews.html',
                template: PATHS.source + '/src-pug/reviews.pug'
            }),
            new HtmlWebpackplugin({
                filename: 'history.html',
                template: PATHS.source + '/src-pug/history.pug'
            }),
            new HtmlWebpackplugin({
                filename: 'story.html',
                template: PATHS.source + '/src-pug/story.pug'
            }),
            new HtmlWebpackplugin({
                filename: 'main.html',
                template: PATHS.source + '/src-pug/main.pug'
            }),
            new HtmlWebpackplugin({
                filename: 'about-us.html',
                template: PATHS.source + '/src-pug/about-us.pug'
            }),
            new HtmlWebpackplugin({
                filename: 'course.html',
                template: PATHS.source + '/src-pug/course.pug'
            }),
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
