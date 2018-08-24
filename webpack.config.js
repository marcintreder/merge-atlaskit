const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: ["./src/index.js"],
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "bundle.js",
      publicPath: "/"
    },
    resolve: {
      modules: [__dirname, "node_modules"],
      extensions: ["*", ".js", ".jsx"]
    },
    devServer: {
      historyApiFallback: true,
      compress: true
    },
    module: {
      rules: [
        {
          use: ["babel-loader"],
          test: /\.js?$/,
          exclude: /node_modules/
        },
        {
          use: ["file-loader"],
          test: /\.(jpe?g|png|gif)$/i
        },
        {
          use: ["raw-loader"],
          test: /\.svg$/
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "src/index.html"
      })
    ]
};
