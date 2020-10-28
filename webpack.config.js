const path = require('path')

module.exports = {
  entry: './example.md',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
}
