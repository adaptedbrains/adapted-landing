'use strict';
var path = require('path');
require('dotenv').config({
    path: path.join(__dirname, '../config/properties.env')
});
var webpack = require('webpack');
var isProd = require('../app/constants').isProd;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// var PrettierPlugin = require('./prettierConfig');
const FRONTEND_BASE_URL = process.env.NURTURELABS_FRONTEND_SERVER;
const NURTURELABS_BACKEND_SERVER = process.env.NURTURELABS_BACKEND_SERVER;
const environment = isProd ? 'production' : 'development';
// const REQUEST_TIMEOUT = parseInt(process.env.REQUEST_TIMEOUT || '50000');

const config = {
    mode: environment,
    devtool: isProd ? undefined : 'eval-source-map',
    plugins: [
        /* new PrettierPlugin({
			tabWidth: 4,
			useTabs: true,
			printWidth: 80
		}), */
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(environment),
            FRONTEND_BASE_URL: JSON.stringify(FRONTEND_BASE_URL),
            'process.env.NURTURELABS_BACKEND_SERVER': JSON.stringify(
                NURTURELABS_BACKEND_SERVER
            ),
            'process.env.REQUEST_TIMEOUT': JSON.stringify(
                process.env.REQUEST_TIMEOUT
            )
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    isProd ? MiniCssExtractPlugin.loader : 'style-loader',
                    'css-loader',
                    'sass-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.hbs$/,
                loader: 'handlebars-loader'
            },
            {
                test: /\.html$/,
                loader: 'html-loader?interpolate'
            },
            {
                test: /\.svg$/,
                loader: 'svg-url-loader'
            },
            {
                test: /\.png/,
                loader: 'url-loader?limit=10000'
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader?name=public/fonts/[name].[ext]'
            }
        ]
    },
    resolve: {
        modules: ['node_modules']
    }
};

module.exports = config;
