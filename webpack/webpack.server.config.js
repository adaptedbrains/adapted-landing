'use strict';
var path = require('path');
// var webpack = require('webpack');
const merge = require('webpack-merge');
const webpackNodeExternals = require('webpack-node-externals');
const baseConfig = require('./webpack.base.config.js');
var isProd = require('../app/constants').isProd;
var APP_FOLDER = path.join(__dirname, '../server');
var DIST_FOLDER = '/';

const config = {
    // Inform webpack that we're building a bundle
    // for nodeJS, rather than for the browser

    mode: isProd ? 'production' : 'development',
    target: 'node',
    entry: [path.join(APP_FOLDER + '/nurturelabs.js')],
    output: {
        path: path.join(__dirname, '../build', DIST_FOLDER),
        filename: 'bundle.js',
        publicPath: DIST_FOLDER
    },
    externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);
