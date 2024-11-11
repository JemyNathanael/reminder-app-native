module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo',
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    plugins: [
    'react-native-reanimated/plugin',  // Ensure this is the last entry in the plugins array
  ],
  };
};
