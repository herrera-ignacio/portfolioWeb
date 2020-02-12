const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const path = require('path');

const configPath = path.join(__dirname, '/config/.env');
console.log(configPath);
require('dotenv').config({ path: configPath });

console.log(process.env);

module.exports = withCSS(withSass({
	env: {
		TEST_VAR: process.env.TEST_VAR,
	},
}));
