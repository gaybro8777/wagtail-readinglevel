const path = require('path');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, './src/fog-index.js'),
  output: {
    path: path.resolve(__dirname, 'wagtailreadinglevelfog/static'),
    filename: 'wagtailreadinglevel.fog.bundle.js',
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
