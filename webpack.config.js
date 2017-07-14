const isProduction = process.env.NODE_ENV === 'production';
const path = require('path');
const webpack = require('webpack');

const packageConfig = require('./package.json');
const modulesDirectory = path.resolve(__dirname, 'node_modules');
const sourceDirectory = path.resolve(__dirname, 'src');
const targetDirectory = __dirname;

const imgPath = path.join(__dirname, 'img');

var loaderOptions = {
  mozjpeg: {
    quality: 65
  },
  pngquant:{
    quality: "65-90",
    speed: 4
  },
  svgo:{
    plugins: [
      {
        removeViewBox: false
      },
      {
        removeEmptyAttrs: false
      }
    ]
  },
  gifsicle: {
    optimizationLevel: 7,
    interlaced: false
  },
  optipng: {
    optimizationLevel: 7,
    interlaced: false
  }
};

var fileLoaderOptions = {
  hash: 'sha512',
  digest: 'hex',
  name: '[path][name].[ext]?[hash]'
};

module.exports = {
  entry: [
    'babel-polyfill',
    path.resolve(sourceDirectory, 'index.js')
  ],
  output: {
    path: targetDirectory,
    filename: 'index.js'
  },
  devtool: "source-map", // any "source-map"-like devtool is possible
  plugins: [
    isProduction && new webpack.optimize.UglifyJsPlugin()
  ].filter(Boolean),
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader', options: { cacheDirectory: true } },
          { loader: 'eslint-loader' }
        ],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          }
        ]
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: fileLoaderOptions
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.jpeg', '.jpg', '.png', '.gif', '.svg'],
    alias: { _: sourceDirectory },
    modules: [modulesDirectory]
  }
};
