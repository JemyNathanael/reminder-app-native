module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
    'react-native-reanimated/plugin',  // Ensure this is the last entry in the plugins array
  ],
  };
};
