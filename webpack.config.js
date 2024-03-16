const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: ['./src/js/index.js','./src/css/style.scss'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '/dist/'
    },
    devServer: {
        hot: true,
        static: {
            directory: path.join(__dirname),
        },
        watchFiles: ['src/js/*.js', '*.html'],
    },
    module: {
        rules: [
          {
            test: /\.scss$/,
            use: [
              MiniCssExtractPlugin.loader, // Вставляет стили в DOM
              'css-loader',   // Компилирует CSS в CommonJS
              'sass-loader'   // Компилирует Sass в CSS
            ]
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(png|jpe?g|gif|svg)$/i,
            type: 'asset/resource',
            generator: {
              filename: 'img/[name][ext]',
            }
          },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
          filename: 'style.css', // Имя скомпилированного CSS файла
          chunkFilename: '[id].css',
          ignoreOrder: false,
        }),
        new CopyPlugin({
          patterns: [
            { from: 'node_modules/@splidejs/splide/dist/css/splide.min.css', to: '' },
            { from: 'node_modules/nouislider/dist/nouislider.min.css', to: '' },
          ],
        }),
    ],
};
