const path = require('path')

// this Webpack config file does not specify
// how to load Markdown files
module.exports = {
  entry: './block.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
}
