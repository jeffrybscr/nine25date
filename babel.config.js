const presets = ['module:metro-react-native-babel-preset']
const plugins = ['react-native-reanimated/plugin']

plugins.push([
  'module-resolver',
  {
    extensions: ['.js', '.json'],
  },
])

module.exports = {
  presets,
  plugins,
}
