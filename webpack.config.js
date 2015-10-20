var path = require("path");
var webpack = require("webpack");

var assetsPath = path.join(__dirname, "public");
var publicPath = "/public/";

var commonLoaders = [
  {
    test: /\.js$|\.jsx$/,
    loaders: ["babel"],
    include: path.join(__dirname, "app")
  }
];

module.exports = {
    // The configuration for the client
    name: "browser",
    /* The entry point of the bundle
     * Entry points for multi page app could be more complex
     * A good example of entry points would be:
     * entry: {
     *   pageA: "./pageA",
     *   pageB: "./pageB",
     *   pageC: "./pageC",
     *   adminPageA: "./adminPageA",
     *   adminPageB: "./adminPageB",
     *   adminPageC: "./adminPageC"
     * }
     *
     * We can then proceed to optimize what are the common chunks
     * plugins: [
     *  new CommonsChunkPlugin("admin-commons.js", ["adminPageA", "adminPageB"]),
     *  new CommonsChunkPlugin("common.js", ["pageA", "pageB", "admin-commons.js"], 2),
     *  new CommonsChunkPlugin("c-commons.js", ["pageC", "adminPageC"]);
     * ]
     */
    context: path.join(__dirname, "app"),
    entry: {
      app: "./app.js"
    },
    output: {
      // The output directory as absolute path
      path: assetsPath,
      // The filename of the entry chunk as relative path inside the output.path directory
      filename: "bundle.js",
      // The output path from the view of the Javascript
      publicPath: publicPath

    },
    module: {
      loaders: commonLoaders
    },
    resolve: {
      extensions: ['', '.react.js', '.js', '.jsx', '.scss']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
}
