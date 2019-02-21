const webpack = require("webpack");
const merge = require("webpack-merge");
const path = require("path");
const baseConfig = require("./base.config.js");

module.exports = merge(baseConfig, {
  entry: {
    app: [
      "webpack-hot-middleware/client",
      path.resolve(__dirname, "..", "browser", "src", "index")
    ]
  },
  mode: "development",
  devtool: "eval",
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader'
        }]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    publicPath: "/"
  }
});
