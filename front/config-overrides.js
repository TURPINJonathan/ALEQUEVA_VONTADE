const { override, addBabelPlugin, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  addBabelPlugin([
    'babel-plugin-root-import',
    {
      rootPathSuffix: 'src/components',
      rootPathPrefix: '@components/',
    },
    'components'
  ]),
  addBabelPlugin([
    'babel-plugin-root-import',
    {
      rootPathSuffix: 'src/assets/pictures',
      rootPathPrefix: '@pictures/',
    },
    'pictures'
  ]),
  addBabelPlugin([
    'babel-plugin-root-import',
    {
      rootPathSuffix: 'src/assets/translations',
      rootPathPrefix: '@translations/',
    },
    'translations'
  ]),
  addBabelPlugin([
    'babel-plugin-root-import',
    {
      rootPathSuffix: 'src/hooks',
      rootPathPrefix: '@hooks/',
    },
    'hooks'
  ]),
  addBabelPlugin([
    'babel-plugin-root-import',
    {
      rootPathSuffix: 'src/utils',
      rootPathPrefix: '@utils/',
    },
    'utils'
  ]),
  addWebpackAlias({
    '@assets': path.resolve(__dirname, 'src/assets'),
    '@fixtures': path.resolve(__dirname, 'src/tests/fixtures'),
    '@hooks': path.resolve(__dirname, 'src/hooks'),
  })
);
