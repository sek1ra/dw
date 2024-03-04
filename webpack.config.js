const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: ['./src/js/main.js','./src/css/style.scss'],
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
    ],
};
