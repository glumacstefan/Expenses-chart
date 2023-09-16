const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StylelintWebpackPlugin = require('stylelint-webpack-plugin');
const IconfontPlugin = require('iconfont-plugin-webpack');
const CopyPlugin = require('copy-webpack-plugin');
const PrettierPlugin = require('prettier-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: ['./src/scss/style.scss', './src/js/script.js'],
  output: {
    filename: 'js/script.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['autoprefixer'],
              },
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/style.css',
    }),
    new StylelintWebpackPlugin({
      configFile: '.stylelintrc.json',
    }),
    new IconfontPlugin({
      src: './src/assets/svg',
      family: 'iconfont',
      dest: {
        font: './src/assets/fonts/[family].[type]',
        css: './src/scss/_icon-font.scss',
      },
      watch: {
        pattern: 'src/assets/svg/**/*.svg',
      },
    }),
    new CopyPlugin({
      patterns: [
        { from: 'src/index.html', to: 'index.html' },
        { from: 'src/assets', to: 'assets' },
      ],
    }),
    new PrettierPlugin({
      printWidth: 100, // Specify the length of line that the printer will wrap on.
      tabWidth: 2, // Specify the number of spaces per indentation-level.
      useTabs: true, // Indent lines with tabs instead of spaces.
      semi: true, // Print semicolons at the ends of statements.
      encoding: 'utf-8', // Which encoding scheme to use on files
      htmlWhitespaceSensitivity: 'strict',
      htmlSelfClosingSpace: false,
    }),
  ],
};
