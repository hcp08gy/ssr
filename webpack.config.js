const path = require('path');
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
    // 模式：开发模式
    mode: 'development',
    // 单个入口文件
    // entry: './src/index.js',
    // 多个入口文件
    entry: {
        app: './src/index.js',
        another: './src/another_module.js',
    },
    // 错误信息打印
    devtool: 'inline-source-map',
    // 提供一个web服务器，可以用于本地代码开发，能够实时重新加载。默认端口为port
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    // 输出目录
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        // 会在server脚本中使用publicPath
        publicPath: '/'
    },
    // 插件: 与顺序无关
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output management'
        }),
        new CleanWebpackPlugin(),
    ]
}