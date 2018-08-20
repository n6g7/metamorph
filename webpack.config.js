module.exports = {
  entry: {
    main: "./src/main",
    renderer: "./src/app",
  },
  mode: "production",
  target: "electron-renderer",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.styl$/,
        exclude: /node_modules/,
        use: ["style-loader","css-loader","stylus-loader"],
      },
      {
        test: /\.json$/,
        use: ["json-loader"],
      },
      {
        test: /\.svg$/,
        use: ["url-loader","img-loader"],
      },
      {
        test: /\.ttf$/,
        use: ["file-loader"],
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
    pug: "commonjs pug",
    stylus: "commonjs stylus",
    watchpack: "commonjs watchpack",
  },
}
