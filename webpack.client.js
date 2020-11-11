const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    // 模式：开发模式
    mode: 'development',
    // 错误信息打印
    devtool: 'inline-source-map',
    output: {
       filename: 'index.js',
       path: path.resolve(__dirname, 'serverServiceRender')
    }

})