const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
})

var config = {
    entry: "./client/index.js",
    output: {
        path: "/dist",
        filename: "bundle.js",

    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.js?/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query: {
                    presets: [
                        "react", "es2015", "stage-2"
                    ]
                }
            }
        ]
    },
    plugins: [HtmlWebpackPluginConfig]


};

module.exports = config;