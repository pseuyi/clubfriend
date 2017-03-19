module.exports = {
  entry: './client/index.js',
  output: {
    path: './public',
    filename: 'bundle.js',
    publicPath: ''
  },
  module: {
    rules: [{
      test: /jsx?$/,
      exclude: /(node_modules)/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015']
        }
      }]
    }]
  }
}
