const path = require("path");
const webpack = require("webpack");
// 根据相对路径获取绝对路径
const resolvePath = (relativePath) =>
  path.resolve(__dirname, `../${relativePath}`);

const baseConfig = {
  entry: resolvePath("src/index.js"),
  output: {
    path: resolvePath("dist/"),
    filename: "index.js",
    library: {
      name: "mosaic",
      type: "umd",
      export: "default",
    },
    assetModuleFilename: "[name]",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
};

module.exports = { resolvePath, baseConfig };
