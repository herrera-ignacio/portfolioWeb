const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const nextEnv = require('next-env');
const dotenvLoad = require('dotenv-load');

dotenvLoad();
const withNextEnv = nextEnv();

module.exports = withNextEnv(withCSS(withSass({})));
