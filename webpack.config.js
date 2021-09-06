const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    popup: "./src/index.tsx",
    background: "./src/background.ts",
  },
  mode: "development",
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].js",
    clean: true,
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./src/index.html", chunks: ["popup"] }),
    new CopyPlugin({
      patterns: [{ from: "./src/manifest.json" }],
    }),
  ],
};
