module.exports = {
  entry: {
    main: "./src/main",
    renderer: "./src/app",
  },
  target: "electron-renderer",
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel",
      },
      {
        test: /\.styl$/,
        exclude: /node_modules/,
        loader: "style!css!stylus",
      },
      {
        test: /\.svg$/,
        loader: "url!img",
      },
      {
        test: /\.ttf$/,
        loader: "file",
      },
    ],
  },
  output: {
    path: __dirname + "/app",
    publicPath: "/",
    filename: "bundle.[name].js",
  },
  node: {
    __dirname: false,
    __filename: false,
  },
  externals: {
    jade: "commonjs jade",
    stylus: "commonjs stylus",
    watchpack: "commonjs watchpack",
  },
}
