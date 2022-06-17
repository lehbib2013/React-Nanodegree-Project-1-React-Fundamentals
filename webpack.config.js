const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const WriteFilePlugin = require('write-file-webpack-plugin');
module.exports = {
    entry: path.join(__dirname, "./src/index.js"),
    mode: 'development',
    optimization: {
        minimizer: [new TerserPlugin({}), new OptimizeCSSAssetsPlugin({})],
        splitChunks: {
                   chunks: 'all',
                 },
        },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
            watch: true,
          },
        liveReload : true,
        port : 3010,
      
       },
 
    output: {
        path:path.resolve(__dirname, "public"),
        filename: '[name].bundle.js',
       // path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        sourceMapFilename: "[name].js.map"
            },
            devtool: 'eval-source-map',
            watch: true,
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                include: [path.resolve(__dirname, 'src')], 
                use: {
                    loader: "babel-loader",
                    options: {
                       presets: ['@babel/preset-env',
                        ["@babel/preset-react", {"runtime": "automatic"}]]
                      },
                 }
                  
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/,
                use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
        },
        {
            test: /\.(svg|png|jpeg|jpg|gif|gif|ico)$/i,
            loader: 'file-loader',
            options: {
                   outputPath: 'images',
                   name: '[name].[ext]',
                   publicPath: 'assets',
              },
            },
           {
              test: /\.(woff|woff2|eot|ttf|otf)$/,
              use: [
               'file-loader',
              ],
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
      },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.join(__dirname, "public", "index.html"),
            favicon: './public/favicon.ico'
        }),
        new WriteFilePlugin(),
        new CopyPlugin({
            patterns: [
                { from: 'src/icons', to: 'icons' },
                { from: 'src/images', to: 'images' },
                      ],
        }),
        new Dotenv(),
        new CleanWebpackPlugin({
            // Simulate the removal of files
            dry: true,
            // Write Logs to Console
            verbose: true,
            // Automatically remove all unused webpack assets on rebuild
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        }),
        // new WorkboxPlugin.GenerateSW(),
        new MiniCssExtractPlugin({ filename: "[name].css" })
    ]
}
    
