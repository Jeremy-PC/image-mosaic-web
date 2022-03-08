// merge
const { merge } = require("webpack-merge");
// baseConfig
const { baseConfig, resolvePath } = require("./webpack.base.conf");
// 模板
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const
const configuration = {
  host: "localhost",
  port: 8002,
};

module.exports = merge(baseConfig, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    ...configuration,
    static: [
      { directory: resolvePath("dist/") },
      { directory: resolvePath("src/assets/") },
    ],
    open: ["/test"],
    proxy: {
      "/test": {
        target: `http://${configuration.host}:${configuration.port}`,
        bypass: function (req) {
          if (req.headers.accept.indexOf("html") !== -1) {
            return "/test.html";
          }
        },
      },
      "/assets": {
        target: `http://${configuration.host}:${configuration.port}`,
        pathRewrite: { "^/assets": "" },
      },
    },
    compress: true,
    liveReload: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "test页面",
      template: resolvePath(`src/test.html`),
      filename: `test.html`,
      inject: true,
      minify: {
        html5: true,
        collapseWhitespace: true,
        preserveLineBreaks: false,
        minifyCSS: true,
        minifyJS: true,
        removeComments: false,
      },
    }),
  ],
});
