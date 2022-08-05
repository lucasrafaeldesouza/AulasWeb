const path = require("path");

module.exports = {
  //Entrada do arquivo
  entry: {
    app: "./src/index.js",
  },
  mode: "development",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
};
