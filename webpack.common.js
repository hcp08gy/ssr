const path = require('path');

const alias = require('./alias');
/**
 * 引入HtmlWebpackPlugin插件
 * 自动生成新的html文件
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
/**
 * 引入CleanWebpackPlugin插件
 * 在每次构建前清理 /dist 文件夹
 */
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    // 多个入口文件
    entry: {
        app: './src/index.tsx',
        // 通过配置dependOn属性，在多个入口文件之间共享模块
        // index: { import: './src/index.js', dependOn: 'shared'},
        // another: { import: './src/another_module.js', dependOn: 'shared'},
        // shared: 'lodash',
    },
    // 输出目录
    output: {
        filename: '[name].bundle.js',
        // filename: '[name].[contenthash].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        // 会在server脚本中使用publicPath
        // publicPath: '/'
    },
    // optimization: {
    //     // 将 重复的依赖模块 分离到单独的 chunk，并且将其从 main bundle 中移除，减轻了大小
    //     // splitChunks: {
    //     //   chunks: 'all',
    //     // },
    //     moduleIds: 'hashed',
    //     runtimeChunk: 'single',
    //     splitChunks: {
    //         cacheGroups: {
    //           vendor: {
    //             test: /[\\/]node_modules[\\/]/,
    //             name: 'vendors',
    //             chunks: 'all',
    //           },
    //         },
    //       },
    // },
    // 插件: 与顺序无关
    plugins: [
        new HtmlWebpackPlugin({
            title: 'MyPage',
            template: 'public/index.html'
        }),
        new CleanWebpackPlugin(),
    ],
    // module设置
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "ts-loader"
                }
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader'],
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        alias: {
            ...alias
        },
        extensions: [".js",".json",".ts",".tsx"],
    }
}