const { resolve } = require('./utils');

module.exports = {
  entry: {
    app: resolve('../src/app.tsx')
  },
  output: {
    filename: '[name]_[contenthash].bundle.js',
    path: resolve('../dist')
  },
  resolve: {
    alias: {
      '@': resolve('../src/')
    },
    extensions: ['.js', 'json', '.ts', '.tsx', '.jsx', '.wasm', '...']
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                exportLocalsConvention: 'camelCase'
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {}
          },
        ],
      },
    ]
  }
}
