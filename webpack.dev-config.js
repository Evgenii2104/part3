const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bund.js',
    path: path.resolve(__dirname, 'dist'),
  },
  node: 'development'
};