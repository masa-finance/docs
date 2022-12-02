/* eslint-disable-next-line */
const webpack = require("webpack");

module.exports = function (_context, _options) {
  return {
    name: "http-support",
    configureWebpack(_config, _isServer, _utils) {
      return {
        plugins: [
          new webpack.ProvidePlugin({
            process: "process/browser",
            Buffer: ["buffer", "Buffer"],
          }),
        ],
        resolve: {
          fallback: {
            http: require.resolve("stream-http"),
            proccess: require.resolve("process"),
            "process/browser": require.resolve("process/browser"),
            https: require.resolve("https-browserify"),
            timers: require.resolve("timers-browserify"),
            url: require.resolve("url/"),
            buffer: require.resolve("buffer/"),
            path: require.resolve("path-browserify"),
            crypto: require.resolve("crypto-browserify"),
            stream: require.resolve("stream-browserify"),
          },
        },
        module: {
          rules: [
            {
              test: /\.txt$/i,
              use: "raw-loader",
            },
          ],
        },
      };
    },
  };
};
