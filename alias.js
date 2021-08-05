const path = require('path');

function resolve(dir) {
  return path.resolve(__dirname, dir);
}

module.exports = {
  "CommonComponents": resolve('./common/components'),
  "Components": resolve('./src/components')
}