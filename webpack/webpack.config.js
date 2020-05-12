'use strict';
var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin;

var isProd = require('../app/constants').isProd;
/* var prodStyleLoader = ExtractTextWebpackPlugin.extract({
    use: 'css-loader!sass-loader'
});
var devStyleLoader = 'style-loader!css-loader!sass-loader'; */
var WebpackCleanupPlugin = require('webpack-cleanup-plugin');
var DIST_FOLDER = '/';
var APP_FOLDER = path.join(__dirname, '../app/');
// var PrettierPlugin = require('./prettierConfig');
const REQUEST_TIMEOUT = parseInt(process.env.REQUEST_TIMEOUT || '5') * 10000;
let saveBundleAnalysis = false;

/* function is_server() {
    return !(typeof window != 'undefined' && window.document);
} */

function createConfig() {
    var config = {
        devtool: isProd ? false : 'cheap-module-source-map',
        entry: ['@babel/polyfill', path.join(APP_FOLDER + '/App.js')],
        output: {
            path: path.join(__dirname, '../public', DIST_FOLDER),
            filename: isProd ? '[name]-[hash].min.js' : '[name].dev.js',
            publicPath: DIST_FOLDER
        },
        plugins: [
            new webpack.NoEmitOnErrorsPlugin(),
            new webpack.optimize.OccurrenceOrderPlugin(true),
            new htmlWebpackPlugin({
                inject: false,
                template: 'app/templates/index.hbs',
                filename: 'index.html',
                // newrelicApplicationKey: process.env.NEWRELIC_APPLICATION_KEY,
                //newrelicLicenseKey: process.env.NEWRELIC_LICENSE_KEY,
                minify: {
                    removeComments: true,
                    collapseWhitespace: true,
                    removeAttributeQuotes: true
                }
            }),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
                REQUEST_TIMEOUT: REQUEST_TIMEOUT
            }),
            new CopyWebpackPlugin([
                {
                    from: path.join(__dirname, '..', '/app/fonts'),
                    to: path.join(__dirname, '../public', DIST_FOLDER, 'fonts')
                },
                // {
                //     from: path.join(__dirname, '..', '/app/images'),
                //     to: path.join(__dirname, '../public', DIST_FOLDER, 'images')
                // }
            ]),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                filename: isProd ? '[name]-[hash].min.js' : '[name].dev.js',
                minChunks: function(module, count) {
                    // any required modules inside node_modules are extracted to vendor
                    return (
                        module.resource &&
                        /\.js$/.test(module.resource) &&
                        module.resource.indexOf(
                            path.join(__dirname, '../node_modules')
                        ) === 0
                    );
                }
            }),
            // extract webpack runtime and module manifest to its own file in order to
            // prevent vendor hash from being updated whenever app bundle is updated
            new webpack.optimize.CommonsChunkPlugin({
                name: 'manifest',
                chunks: ['vendor']
            }),
            /* new PrettierPlugin({
				tabWidth: 4,
				useTabs: true,
				printWidth: 80
			}), */
            new ExtractTextWebpackPlugin('[name].min.css')
        ],
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /(node_modules|bower_components)/,
                    loader: 'babel-loader'
                }
            ]
        }
    };
    if (saveBundleAnalysis) {
        config.plugins.push(
            new BundleAnalyzerPlugin({
                analyzerMode: 'static',
                reportFilename: 'nurturelabs.html',
                openAnalyzer: true,
                // If `true`, Webpack Stats JSON file will be generated in bundles output directory
                generateStatsFile: true,
                // Name of Webpack Stats JSON file that will be generated if `generateStatsFile` is `true`.
                // Relative to bundles output directory.
                statsFilename: 'nurturelabs.json',
                // Options for `stats.toJson()` method.
                // For example you can exclude sources of your modules from stats file with `source: false` option.
                // See more options here: https://github.com/webpack/webpack/blob/webpack-1/lib/Stats.js#L21
                statsOptions: null,
                // Log level. Can be 'info', 'warn', 'error' or 'silent'.
                logLevel: 'info'
            })
        );
        saveBundleAnalysis = false;
    }
    if (isProd) {
        config.plugins.push(
            new ExtractTextWebpackPlugin('[name]-[hash].min.css'),
            new WebpackCleanupPlugin({
                output: {
                    path: path.join(__dirname, '../public', DIST_FOLDER)
                }
            }),
            new webpack.optimize.UglifyJsPlugin({
                minimize: true,
                compress: {
                    warnings: false,
                    screw_ie8: true,
                    drop_console: false
                },
                output: {
                    comments: false
                },
                mangle: true,
                sourceMap: false
            }),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('production')
            })
        );
    }
    return config;
}
module.exports = createConfig;
