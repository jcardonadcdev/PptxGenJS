const path = require("path");
const AmdWebpackPlugin = require("amd-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/pptxgen.ts",
  output: {
    filename: "pptxgen.bundle.js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "amd"
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  target: "web",
  node: { fs: "empty" },
  plugins: [new AmdWebpackPlugin()]
};
