const path = require('path');
const dotenv = require('dotenv');

// Use __filename and __dirname
let __filenames = __filename || (require.main && require.main.filename) || process.argv[1];
const __dirnames = path.dirname(__filenames);

const res = dotenv.config({
  path: path.resolve(__dirnames, `../../.${process.env.NODE_ENV || 'dev'}.env`),
});

module.exports = res;
