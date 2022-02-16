const HtmlWebpackPlugin = require('html-webpack-plugin')

const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin

const path = require('path')

const REMOTE_HOST = 'https://shell-mfe-marcelocolla.vercel.app'

const PORT = '4010'

module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  devtool: 'hidden-source-map',
  output: {
    publicPath: `http://localhost:${PORT}/`,
    clean: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'dashboard-app',
      filename: 'remoteEntry.js',
      exposes: {
        './Button': './src/components/Button.tsx',
        './Home': './src/pages/Home/index.ts',
      },
      remotes: {
        'shell-mfe': `shellMfe@${REMOTE_HOST}/dist/remoteEntry.js`,
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
}
