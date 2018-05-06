'use strict';

require('babel-polyfill');

var _yargs = require('yargs');

var _yargs2 = _interopRequireDefault(_yargs);

var _endpoints = require('./endpoints');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_yargs2.default.command('time', 'Test connectivity to the Rest API and get the current server time.', function () {}, _endpoints.time).command('exchangeInfo', 'Current exchange trading rules and symbol information', function () {}, _endpoints.exchangeInfo).command('trades [symbol] [limit]', 'Get recent trades (up to last 500).', function (yargs) {
  yargs.positional('symbol', {
    describe: 'cryptocurrency symbol'
  }).positional('limit', {
    describe: 'trade limit (Default 500; max 500)',
    default: 500
  });
}, _endpoints.trades).argv;