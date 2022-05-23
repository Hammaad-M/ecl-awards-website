const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
  // node: {
  //   child_process: "empty",
  //   fs: "empty", // if unable to resolve "fs"
  //   path: "empty",
  // },
  webpack: {
    configure: {
      resolve: {
        fallback: {
          fs: false,
          tls: false,
          net: false,
          path: false,
          zlib: false,
          http: false,
          https: require.resolve("https-browserify"),
          stream: false,
          crypto: false,
        },
      },
    },
  },
  plugins: [new NodePolyfillPlugin()],
};
