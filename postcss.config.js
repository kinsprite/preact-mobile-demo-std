/* eslint-disable global-require, import/no-extraneous-dependencies, @typescript-eslint/no-var-requires */
const postcssPresetEnvStage = 3;

module.exports = ({ env }) => ({
  plugins: [
    require('postcss-flexbugs-fixes'),
    require('postcss-preset-env')({
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: postcssPresetEnvStage,
    }),
    require('postcss-normalize')(),
  ],
});
