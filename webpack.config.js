const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const WatchExternalFilesPlugin = require('webpack-watch-files-plugin').default
// Cached
const rootPath = path.resolve('.')
const entryPath = path.join(rootPath, 'src', 'index.tsx')
const appPath = path.join(rootPath, 'app')
//
/**
 * @type {import('webpack').Configuration}
 */
const config = {
  devtool: 'source-map',
  plugins: [
    new WatchExternalFilesPlugin({
      files: ['./pages/**/*.tsx'],
      verbose: true
    })
  ],
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx'],
    plugins: [new TsconfigPathsPlugin()]
  },
  module: {
    rules: [
      {
        test: /\.node$/,
        use: 'node-loader',
      },
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ]
  },
  entry: entryPath,
  output: {
    path: appPath,
    filename: 'app.bundle.js'
  }
}
module.exports = config