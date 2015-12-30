// minimal
// -------
var babelJest = require('babel-jest');

module.exports = {
  process: function(src, filename) {
    return babelJest.process(src, filename);
  }
};

// with webpackAlias (?)
// ---------------------
// var babelJest = require('babel-jest');
// var webpackAlias = require('jest-webpack-alias');

// module.exports = {
//   process: function(src, filename) {
//     if (filename.indexOf('node_modules') === -1) {
//       src = babelJest.process(src, filename);
//       src = webpackAlias.process(src, filename);
//     }
//     return src;
//   }
// };


// configurable dirs + webpackAlias
// --------------------------------
// var _ = require('lodash');
// var path = require('path');
// var babelJest = require('babel-jest');
// var webpackAlias = require('jest-webpack-alias');

// // change these to point to your source and test directories
// var dirs = ['../app', '../__tests__'].map(function(dir) {
//   return path.resolve(__dirname, dir);
// });

// function matches(filename) {
//   return _.find(dirs, function(dir) {
//     return filename.indexOf(dir) === 0;
//   });
// }

// module.exports = {
//   process: function(src, filename) {
//     if (matches(filename)) {
//       src = babelJest.process(src, filename);
//       src = webpackAlias.process(src, filename);
//     }
//     return src;
//   }
// };
