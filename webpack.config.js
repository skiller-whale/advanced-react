const path = require("path")
const webpack = require("webpack")
const HTMLWebpackPlugin = require("html-webpack-plugin")

const dev = process.env.NODE_ENV !== "production"

const isTsx = process.env.SKILLERWHALE_LANG === "ts"
const language = isTsx ? "tsx" : "jsx"

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: path.join(__dirname, "/src_tsx/index.html"),
  filename: "index.html",
  inject: "body",
})

const DefinePluginConfig = new webpack.DefinePlugin({
  "process.env.NODE_ENV": JSON.stringify("production"),
})

module.exports = {
  devServer: {
    host: "0.0.0.0",
    port: "3500",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    historyApiFallback: true,
    setupMiddlewares: (middlewares, devServer) => {
      return middlewares.map((middleware) => {
        if (middleware.name !== "webpack-dev-middleware") {
          return middleware
        }
        return async (req, res, next) => {
          if (req.url.includes("suspense")) {
            await new Promise((resolve) =>
              setTimeout(resolve, req.url.includes("Mascot") ? 4000 : 2000)
            )
            if (req.url.includes("Blocked")) {
              const err = new Error("Blocked")
              err.code = 503
              return next(err)
            }
          }
          return {
            name: middleware.name,
            middleware: middleware.middleware(req, res, next),
          }
        }
      })
    },
  },
  devtool: "source-map",
  entry: [path.join(__dirname, `/src${isTsx ? "_tsx" : ""}/index.${language}`)],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  output: {
    filename: "index.js",
    path: path.join(__dirname, "/build"),
  },
  mode: dev ? "development" : "production",
  plugins: dev
    ? [HTMLWebpackPluginConfig]
    : [HTMLWebpackPluginConfig, DefinePluginConfig],
}
