// eslint-disable-next-line
const wp = require('@cypress/webpack-preprocessor')
// eslint-disable-next-line
const cypressTypeScriptPreprocessor = require('./cy-ts-preprocessor')

module.exports = on => {
  const options = {
    webpackOptions: {
      resolve: {
        extensions: [".ts", ".tsx", ".js"],
      },
      module: {
        rules: [
          {
            test: /\.tsx?$/,
            loader: "ts-loader",
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
    },
  }
  on("file:preprocessor", wp(options))
  on("file:preprocessor", cypressTypeScriptPreprocessor)
}
