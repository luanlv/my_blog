var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ResourceHintWebpackPlugin = require('resource-hints-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    main: path.resolve(__dirname, '../src/index'),
    vendor: ['mithril', 'redux-immutable-state-invariant', 'redux', 'redux-thunk', 'ramda', 'validate.js']
  },
  target: 'web',
  output: {
    path: path.join(__dirname, '../src'),
    publicPath: '/assets',
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          babelrc: false,
          cacheDirectory: true,
          'plugins': [
            'syntax-dynamic-import',
            ["transform-react-jsx", {
              "pragma": "m"
            }]
          ],
          'presets': [
            [
              'latest', {
                'es2015': {
                  'modules': false
                }
              }
            ]
          ]
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
        })
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "sass-loader" // compiles Sass to CSS
        }]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].[contenthash].css',
      allChunks: true
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true
    }),
    new ResourceHintWebpackPlugin()
  ]
}
