const path = require('path');
const htmlWebpack = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.join(__dirname, 'docs'),
        filename: 'bundle.js'
    },
    devServer: {
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loader: [
                    MiniCSSExtractPlugin.loader,
                    "css-loader",
                    'sass-loader'
                  ]
            },
            {
                 test: /\.(gif|png|jpe?g|svg)$/i,
                 use: [
                     'file-loader',
                     {
                       loader: 'image-webpack-loader',
                       options: {
                         bypassOnDebug: true, // webpack@1.x
                         disable: true, // webpack@2.x and newer
                       },
                     },
                   ]
             }
              
        ]
    },
    plugins: [
        new htmlWebpack({
            template: './src/index.html'
        }),
        new MiniCSSExtractPlugin({
            filename: "style.css",
        })
    ]
}

  /*pronto meterse con esto*/
  /* {
                 test: /\.(png|jpg)$/,
                 loader: 'url-loader'
               },*/