const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/smog-index.js',
  output: {
    path: path.resolve(__dirname, 'wagtailreadinglevelsmog/static'),
    filename: 'wagtailreadinglevel.smog.bundle.js',
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

