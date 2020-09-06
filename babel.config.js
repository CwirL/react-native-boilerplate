const path = require('path');

const commonPlugins = [
  [
    require.resolve('babel-plugin-module-resolver'),
    {
      root: [path.resolve('.')],
      alias: {
        assets: './src/assets/',
        components: './src/components/',
        screens: './src/screens/',
        services: './src/services/',
        utils: './src/utils/',
      },
    },
  ],
];

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [...commonPlugins],
};
