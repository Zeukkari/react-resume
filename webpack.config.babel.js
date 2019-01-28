import path from 'path'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import CleanWebpackPlugin from 'clean-webpack-plugin'

const plugins = [
  new CleanWebpackPlugin(['dist']),
  new CopyWebpackPlugin([{ from: './README.md' }, { from: './package.json' }]),
]

export default {
  devtool: 'hidden-source-map',
  entry: './src/js/index.js',
  output: {
    path: path.resolve('./dist'),
    filename: 'react-resume.min.js',
    libraryTarget: 'var',
    library: 'ReactResume',
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  resolve: {
    extensions: ['.js', '.json'],
  },
  plugins,
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
}
