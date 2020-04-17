const path = require('path');
module.exports = {
  stories: ['../components/**/*.stories.js'],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../src/scss'),
    });
    return config;
  },
};
