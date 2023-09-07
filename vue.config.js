const path = require('path');

module.exports = {
  // ...
  configureWebpack: {
    entry: './main.js', // Update the entry path
  },
  outputDir: path.resolve(__dirname, '../../backend'),
  devServer: {
    proxy: {
      '/api': {
        target: 'http:localhost:8080'
      }
    }
  }
};
