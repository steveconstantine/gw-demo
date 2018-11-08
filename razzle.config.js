'use strict';

const razzleHeroku = require("razzle-heroku");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  modify(baseConfig, { target, dev }, webpack) {

  let bConfig = baseConfig;

  bConfig.mode = 'production';

  const appConfig = razzleHeroku(bConfig, {target, dev}, webpack);

  if (target === 'web') {
  }
/*
  appConfig.optimization = {
        minimize: true,
        minimizer: [
          new UglifyJsPlugin({
            uglifyOptions: {
              parse: {
                // we want uglify-js to parse ecma 8 code. However, we don't want it
                // to apply any minfication steps that turns valid ecma 5 code
                // into invalid ecma 5 code. This is why the 'compress' and 'output'
                // sections only apply transformations that are ecma 5 safe
                // https://github.com/facebook/create-react-app/pull/4234
                ecma: 8,
              },
              compress: {
                ecma: 5,
                warnings: false,
                // Disabled because of an issue with Uglify breaking seemingly valid code:
                // https://github.com/facebook/create-react-app/issues/2376
                // Pending further investigation:
                // https://github.com/mishoo/UglifyJS2/issues/2011
                comparisons: false,
              },
              mangle: {
                safari10: true,
              },
              output: {
                ecma: 5,
                comments: false,
                // Turned on because emoji and regex is not minified properly using default
                // https://github.com/facebook/create-react-app/issues/2488
                ascii_only: true,
              },
            },
            // Use multi-process parallel running to improve the build speed
            // Default number of concurrent runs: os.cpus().length - 1
            parallel: true,
            // Enable file caching
            cache: true,
            // @todo add flag for sourcemaps
            sourceMap: true,
          }),
        ],
      };

*/
    //don't load gql/graphql with file-loader
    appConfig.module.rules
      .find(conf => conf.loader && conf.loader.includes('file-loader'))
      .exclude.push(/\.(graphql|gql)/);

    // use graphql-tag
    const { include } = appConfig.module.rules[0];
    appConfig.module.rules.splice(1, 0, {
      test: /\.(graphql|gql)$/,
      include,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    });

    console.log(appConfig);

    return appConfig;
  },
};
