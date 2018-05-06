'use strict';

var _yargs = require('yargs');

var _yargs2 = _interopRequireDefault(_yargs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_yargs2.default.command('time', 'Test connectivity to the Rest API and get the current server time.', function () {}, function (argv) {
  console.log('time');
}).argv;

_yargs2.default.command('exchangeInfo', 'Current exchange trading rules and symbol information', function () {}, function (argv) {
  console.log('exchangeInfo');
}).argv;

_yargs2.default.command('trades [symbol] [limit]', 'Get recent trades (up to last 500).', function (yargs) {
  yargs.positional('symbol', {
    describe: 'cryptocurrency symbol'
  }).positional('limit', {
    describe: 'trade limit (Default 500; max 500)',
    default: 500
  });
}, function (argv) {
  console.log('trades', argv);
}).demandOption(['symbol']).argv;

