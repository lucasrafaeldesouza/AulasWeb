const path = require("path");
const HtmlWebackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
  console.log(env);

  return {
    mode: env.production ? "production" : "development",

    entry: {
      appSass: "./src/index.js",
    },

    output: {
      filename: "[name].js",

      path: path.resolve(__dirname, "dist"),
    },

    module: {
      rules: [
        {
          test: /\.js$/,

          exclude: /node_modules/,

          use: {
            loader: "babel-loader",

            options: {
              presets: ["@babel/preset-env"],
            },
          },
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use:[
            MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader"
          ],
        },
      ],
    },

    plugins: [
      new HtmlWebackPlugin ({
        template: './src/index.html',
        filemame: "index.html"
      }),
      new MiniCssExtractPlugin(),
    ]

  };
};
