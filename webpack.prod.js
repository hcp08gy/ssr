const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    // 模式：开发模式
    mode: 'production',
    devtool: 'source-map',
})