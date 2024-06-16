// webpack.config.js
module.exports = {
    // Other configurations...
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      alias: {
        '@': path.resolve(__dirname, 'src/')
      }
    }
  }
  