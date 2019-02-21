const path =                require('path');
const webpack =             require('webpack');
const autoprefixer =        require('autoprefixer');

const HtmlWebpackplugin =   require('html-webpack-plugin');
const ExtractTextPlugin =   require("extract-text-webpack-plugin");
const CopyWebpackPlugin =   require('copy-webpack-plugin');


const PATHS = {
    source:  __dirname + '/src',
    dev:  __dirname + '/dev',
}

module.exports = {
    devtool: 'cheap-module-eval-source-map',

    entry: [
        'babel-polyfill',
        PATHS.source + '/src-js/index.js',
    ],

    devServer: {
     contentBase:  PATHS.dev,
    },

    resolve: {
        modules: [path.resolve('src'), "node_modules"],
    },

    output: {
        path:  PATHS.dev,
        publicPath:   PATHS.dev,
        filename: '[name].js',
    },

    watch: true,
    watchOptions: {
        aggregateTimeout: 100
    },

    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
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
        new ExtractTextPlugin("app.css"),
        new webpack.ProvidePlugin({ // inject ES5 modules as global vars
            $: 'jquery',
            jQuery: 'jquery',
            "window.jQuery": "jquery"
        }),
        new CopyWebpackPlugin([
            { context: PATHS.source + '/images', from: '**/*', to: 'images' },
            { context: PATHS.source + '/fonts', from: '**/*', to: 'fonts' }
        ])
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel-loader', 'eslint-loader']
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: 'css-loader',
                            options: { importLoaders: 1, url: false}
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: [
                                    autoprefixer({
                                        browsers:['IE 11', 'last 2 version'],
                                        grid: true
                                    })
                                ],
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                        }
                    ]
                })
            },
            {
                test: /\.css$/,
                use:  ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: 'css-loader',
                            options: {importLoaders: 1, url: false}
                        }
                    ]
                })
            },
            {
                test: /\.pug$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'pug-loader',
                        options: {
                            pretty: true
                        }
                    }
                ],
            }
        ]
    }
}
