const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/src/index.html',
  filename: 'index.html',
  inject: 'body'
})

var config = {
    entry: "./client/src/index.js",
    output: {
        path: "/dist",
        filename: "bundle.js",

    },
    module: {
        loaders: [
            {
                test: /\.js?/,
                loader: "babel-loader",
                exclude: /node_modules/,
            }
        ]
    },
    plugins: [
        HtmlWebpackPluginConfig
    ]

};

module.exports = config;