// merge
const { merge } = require("webpack-merge");
// baseConfig
const { baseConfig } = require("./webpack.base.conf");
// 清理原来的打包文件
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(baseConfig, {
  mode: "production",
  plugins: [new CleanWebpackPlugin()],
});
