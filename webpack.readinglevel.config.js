const path = require('path');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, 'src/reading-level.js'),
  output: {
    path: path.resolve(__dirname, 'wagtailreadinglevel/static'),
    filename: 'wagtailreadinglevel.bundle.js',
  },

  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env',
                    ]
                }
            }
        }
    ]
  }
};
