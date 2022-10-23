const path = require("path")
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

const isDev = process.env.NODE_ENV === 'development'

module.exports = {
    entry: {
        bundle: path.resolve(__dirname, "./src/index.tsx")
    },
    module: {
        rules: [
            {
                // Javascript loader
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                        plugins: [
                            "@babel/plugin-syntax-dynamic-import"
                        ]
                    }
                }
            },
            {
                // Typescript loader
                test: /\.tsx?$/,
                exclude: /(node_modules|\.webpack)/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true,
                    },
                },
            },
            {
                // CSS and SCSS Loader
                test: /\.s?css$/i,
                use: [
                    { loader: isDev ? 'style-loader' : MiniCssExtractPlugin.loader },
                    { loader: 'css-loader' },
                    { loader: "postcss-loader" },
                    { loader: 'sass-loader' },
                ],
            },
            {
                // Images Loader
                test: /\.(gif|jpe?g|tiff|png|webp|bmp|svg)$/,
                type: "asset"
            },
            {
                // Font loader
                test: /\.(woff(2)?|ttf|otf|eot)$/,
                type: "asset"
            },
            {
                test: /\.(json)$/,
                type: "javascript/auto",
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[folder]/[name].[ext]",
                            outputPath: "/locales"
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new ForkTsCheckerWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./src/index.html"),
            favicon: path.resolve(__dirname, "./src/assets/images/logo.png"),
            inject: true,
            filename: "index.html"
        }),
        new MiniCssExtractPlugin({
            filename: 'static/css/[name].[chunkhash].css',
            chunkFilename: 'static/css/[name].[chunkhash].chunk.css',
        }),
        new Dotenv(),
        new WebpackManifestPlugin()
    ],
    resolve: {
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', ".json"],
        alias: {
            'react-dom': '@hot-loader/react-dom',
            '@assets': path.resolve(__dirname, './src/assets/'),
            '@src': path.resolve(__dirname, './src/'),
        },
    },
};
