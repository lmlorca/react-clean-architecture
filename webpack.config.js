module.exports = {
  entry: "./src/start.js",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  devServer: {
    contentBase: __dirname + "/dist",
  },
  devtool: "inline-source-map",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
  },
};
