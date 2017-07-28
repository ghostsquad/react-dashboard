const isProduction = process.env.NODE_ENV === 'production';

const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


const modulesDirectory = path.resolve(__dirname, 'node_modules');
const sourceDirectory = path.resolve(__dirname, 'src');
const staticDirectory = path.resolve(__dirname, 'static');
const distDirectory = path.resolve(__dirname, 'dist');

// -------------------------------------------------------------------------- //

module.exports = {
  entry: [
    'babel-polyfill',
    path.resolve(sourceDirectory, 'index.js')
  ],
  output: {
    path: distDirectory,
    filename: 'index.js',
    publicPath: '/'
  },
  devtool: 'source-map', // any "source-map"-like devtool is possible
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          },
          {
            loader: 'eslint-loader'
          }
        ],
      },
      {
        test: /\.(ico|eot|otf|webp|ttf|woff2?|gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 100000,
              name: 'assets/[name].[sha1:hash:base64:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'resolve-url-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'resolve-url-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css', '.jpeg', '.jpg', '.png', '.gif', '.svg'],
    alias: {
      '_': sourceDirectory,
      'react': 'preact-compat',
      'react-dom': 'preact-compat'
    },
    modules: [
      sourceDirectory,
      modulesDirectory
    ]
  },
  plugins: [
    new DashboardPlugin(),
    new CopyWebpackPlugin([
      {
        from: staticDirectory,
        to: './'
      }
    ]),
    new HtmlWebpackPlugin({
      title: 'React Dashboard',
      filename: path.resolve(distDirectory, 'index.html')
    }),
    new ManifestPlugin()
  ]
};
