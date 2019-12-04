const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = function override(config, env) {
    if (!config.plugins) {
        config.plugins = [];
    }

    config.module.rules.push(
        {
            test: /\.scss$/,
            use: [
                "sass-loader",
              {
                loader: 'sass-resources-loader',
                options: {
                  resources: ['./src/themes/vars.scss']
                },
              },
            ],
          },
    )

    return config;
}