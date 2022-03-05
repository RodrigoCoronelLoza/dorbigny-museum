const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

/* Contains most default prod config */
module.exports = {
  entry: {
    index: [path.resolve(__dirname, "..", "src", "scripts", "index.ts")],
  },
  target: "web",
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: "./public",
  },
  output: {
    filename: "js/[name].[contenthash].js",
    path: path.resolve(__dirname, "..", "public"),
    assetModuleFilename: "assets/[hash][ext][query]",
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "..", "src", "index.pug"),
      filename: "index.html",
      chunks: ["index"],
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, "..", "src"),
        loader: require.resolve("babel-loader"),
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, "..", "src"),
        use: [
          { loader: "babel-loader" },
          {
            loader: "ts-loader",
            options: {
              configFile: path.resolve(__dirname, "..", "tsconfig.json"),
            },
          },
        ],
      },
      {
        test: /\.pug$/,
        include: [path.resolve(__dirname, "..", "src")],
        use: [
          {
            loader: "simple-pug-loader",
          },
        ],
      },
      {
        test: /\.svg$/, // import svg inline
        include: path.resolve(__dirname, "..", "src"),
        type: "asset/inline",
      },
      {
        test: /\.(ico|png|svg|jpg|jpeg|gif|webm)$/,
        include: path.resolve(__dirname, "..", "src"),
        type: "asset", // import inline or URL depending on size
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024, // 4kb
          },
        },
        generator: {
          filename: "assets/images/[hash][ext][query]",
        },
      },
    ],
  },
  optimization: {
    moduleIds: "deterministic",
    /* runtimeChunk: "single", */
    usedExports: true,
    splitChunks: {
      maxSize: 244 * 1024 /* 244 KB */,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]*(?!leaflet)/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
  resolve: {
    modules: [path.resolve(__dirname, "..", "node_modules")],
    extensions: [".ts", ".js"],
    symlinks: false,
  },
};
