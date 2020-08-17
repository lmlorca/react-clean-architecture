module.exports = {
  entry: "./src/index.js",
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
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
  },
};
