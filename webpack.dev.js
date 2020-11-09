const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    // 模式：开发模式
    mode: 'development',
    // 错误信息打印
    devtool: 'inline-source-map',
    // 提供一个web服务器，可以用于本地代码开发，能够实时重新加载。默认端口为port
    devServer: {
        contentBase: './dist',
        compress: true,
        port: 9000
    },
})