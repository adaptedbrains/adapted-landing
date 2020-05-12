'use strict';
var path = require('path');
var webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin;
const StatsWriterPlugin = require('webpack-stats-plugin').StatsWriterPlugin;
const TerserPlugin = require('terser-webpack-plugin');
const isProd = require('../app/constants').isProd;
/* var prodStyleLoader = ExtractTextWebpackPlugin.extract({
    use: 'css-loader!sass-loader'
});
var devStyleLoader = 'style-loader!css-loader!sass-loader';*/
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var DIST_FOLDER = '/nurturelabs';
var APP_FOLDER = path.join(__dirname, '../app/');
const REQUEST_TIMEOUT = parseInt(process.env.REQUEST_TIMEOUT || '5') * 10000;
let saveBundleAnalysis = false;

/* function is_server() {
    return !(typeof window != 'undefined' && window.document);
} */

console.log('CWD: ', process.cwd());
const config = {
    entry: [path.join(APP_FOLDER + '/App.js')],
    output: {
        path: path.join(__dirname, '../public', DIST_FOLDER),
        filename: isProd ? '[name]-[hash].min.js' : '[name].dev.js',
        publicPath: DIST_FOLDER
    },
    devServer: {
        contentBase: path.join(__dirname, '../public', DIST_FOLDER),
        compress: true,
        port: 9000
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(true),
        new CleanWebpackPlugin(path.join(__dirname, '../public', DIST_FOLDER), {
            root: process.cwd(),
            verbose: true,
            exclude: ['stats.json']
        }),
        new HtmlWebpackPlugin({
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
        // new CopyWebpackPlugin([
        //     {
        //         from: path.join(__dirname, '..', '/pwaconfig'),
        //         to: path.join(__dirname, '../public')
        //     }
        // ]) /* ,
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
        }) */,
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: isProd ? '[name].[hash].css' : '[name].css',
            chunkFilename: isProd ? '[id].[hash].css' : '[id].css'
        }),
        new StatsWriterPlugin({
            filename: 'stats.json' // Default
        })
    ]
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
        // new ExtractTextWebpackPlugin('[name]-[hash].min.css'),
        new WebpackCleanupPlugin({
            output: {
                path: path.join(__dirname, '../public', DIST_FOLDER),
                exclude: ['stats.json']
            }
        }) /* ,
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {
                warnings: false,
                screw_ie8: true,
                drop_console: true
            },
            output: {
                comments: false
            },
            mangle: true
            // sourceMap: false [Default: false]
        }) */
    );

    config.optimization = Object.assign(
        {},
        {
            minimizer: [
                new TerserPlugin({
                    sourceMap: true,
                    parallel: true,
                    cache: 'tmp/.build_cache/terser',
                    terserOptions: {
                        compress: {
                            warnings: false,
                            drop_console: true
                        },
                        ecma: 6,
                        ie8: false,
                        keep_fnames: false,
                        mangle: true, // Note `mangle.properties` is `false` by default.
                        output: {
                            comments: false
                        },
                        toplevel: false,
                        warnings: false
                    }
                })

                // we specify a custom UglifyJsPlugin here to get source maps in production
                // new UglifyJsPlugin({
                //     cache: true,
                //     parallel: true,
                //     uglifyOptions: {
                //         warnings: false,
                //         compress: {
                //             warnings: false,
                //             drop_console: true
                //         },
                //         ecma: 6,
                //         mangle: true, // Note `mangle.properties` is `false` by default.
                //         output: {
                //             comments: false
                //         },
                //         toplevel: false,
                //         ie8: false,
                //         keep_fnames: false
                //     }
                // })
            ]
        }
    );
}

module.exports = merge(baseConfig, config, {
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    filename: isProd ? '[name]-[hash].min.js' : '[name].dev.js',
                    chunks: 'all'
                }
            }
        },
        runtimeChunk: {
            /* Webpack maintains a manifest containing information needed to run the application.
            If the manifest changes, the change invalidates the containing bundle.
            */
            name: 'manifest'
        }
    }
});
