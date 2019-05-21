const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const prettier = require('prettier');
const getCacheIdentifier = require('react-dev-utils/getCacheIdentifier');
const FeatureFlagsPlugin = require('../../../config/FeatureFlagsPlugin');

module.exports = ({ config, mode }) => {
  const isEnvDevelopment = mode === 'DEVELOPMENT';
  const isEnvProduction = mode === 'PRODUCTION';

  config.resolve.extensions.push('.ts', '.tsx');

  config.resolve.plugins = [
    new TsconfigPathsPlugin({
      extensions: config.resolve.extensions,
    }),
  ];

  config.plugins.push(
    new FeatureFlagsPlugin({
      configFile: require.resolve('../../../featureFlags.config'),
    }),
  );

  config.module.rules = [
    {
      test: [/wellcomeStory\.tsx$/, /\.stories\.tsx$/],
      use: [
        {
          loader: require.resolve('@storybook/addon-storysource/loader'),
          options: {
            parser: 'typescript',
            prettierConfig: prettier.resolveConfig.sync(__dirname, {
              editorconfig: true,
            }),
          },
        },
      ],
      enforce: 'pre',
    },
    {
      oneOf: [
        // Process application JS with Babel.
        // The preset includes JSX, Flow, and some ESnext features.
        {
          test: /\.(js|mjs|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          loader: require.resolve('babel-loader'),
          options: {
            customize: require.resolve(
              'babel-preset-react-app/webpack-overrides',
            ),
            // @remove-on-eject-begin
            babelrc: false,
            configFile: false,
            presets: [require.resolve('babel-preset-react-app')],
            // Make sure we have a unique cache identifier, erring on the
            // side of caution.
            // We remove this when the user ejects because the default
            // is sane and uses Babel options. Instead of options, we use
            // the react-scripts and babel-preset-react-app versions.
            cacheIdentifier: getCacheIdentifier(
              isEnvProduction
                ? 'production'
                : isEnvDevelopment && 'development',
              [
                'babel-plugin-named-asset-import',
                'babel-preset-react-app',
                'react-dev-utils',
                'react-scripts',
              ],
            ),
            // @remove-on-eject-end
            plugins: [
              [
                require.resolve('babel-plugin-named-asset-import'),
                {
                  loaderMap: {
                    svg: {
                      ReactComponent: '@svgr/webpack?-svgo![path]',
                    },
                  },
                },
              ],
              //BIKO:START
              require.resolve('babel-plugin-styled-components'),
              //BIKO:END
            ],
            // This is a feature of `babel-loader` for webpack (not Babel itself).
            // It enables caching results in ./node_modules/.cache/babel-loader/
            // directory for faster rebuilds.
            cacheDirectory: true,
            cacheCompression: isEnvProduction,
            compact: isEnvProduction,
          },
        },
        // Process any JS outside of the app with Babel.
        // Unlike the application JS, we only compile the standard ES features.
        {
          test: /\.(js|mjs)$/,
          exclude: /@babel(?:\/|\\{1,2})runtime/,
          loader: require.resolve('babel-loader'),
          options: {
            babelrc: false,
            configFile: false,
            compact: false,
            presets: [
              [
                require.resolve('babel-preset-react-app/dependencies'),
                { helpers: true },
              ],
            ],
            cacheDirectory: true,
            cacheCompression: isEnvProduction,
            // @remove-on-eject-begin
            cacheIdentifier: getCacheIdentifier(
              isEnvProduction
                ? 'production'
                : isEnvDevelopment && 'development',
              [
                'babel-plugin-named-asset-import',
                'babel-preset-react-app',
                'react-dev-utils',
                'react-scripts',
              ],
            ),
            // @remove-on-eject-end
            // If an error happens in a package, it's possible to be
            // because it was compiled. Thus, we don't want the browser
            // debugger to show the original code. Instead, the code
            // being evaluated would be much more helpful.
            sourceMaps: false,
          },
        },
        {
          test: /\.css$/,
          loader: require.resolve('raw-loader'),
        },
        {
          rules: config.module.rules,
        },
      ],
    },
  ];

  return config;
};
