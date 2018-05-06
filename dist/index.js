'use strict';

require('babel-polyfill');

var _yargs = require('yargs');

var _yargs2 = _interopRequireDefault(_yargs);

var _betterConsole = require('better-console');

var _betterConsole2 = _interopRequireDefault(_betterConsole);

require('colors');

var _endpoints = require('./endpoints');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

_yargs2.default.command('time', 'Test connectivity to the Rest API and get the current server time.', function () {}, _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  var data;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _endpoints.time)();

        case 3:
          data = _context.sent;

          _betterConsole2.default.log('The server unix time is ' + data.serverTime);
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context['catch'](0);

          _betterConsole2.default.error('Ops! We have an error: ', _context.t0.red);

        case 10:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, undefined, [[0, 7]]);
}))).command('exchangeInfo', 'Current exchange trading rules and symbol information', function () {}, _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
  var data;
  return regeneratorRuntime.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return (0, _endpoints.exchangeInfo)();

        case 3:
          data = _context2.sent;

          _betterConsole2.default.table(data.rateLimits);
          _betterConsole2.default.table(data.symbols);
          _context2.next = 11;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2['catch'](0);

          _betterConsole2.default.error('Ops! We have an error: ', _context2.t0.red);

        case 11:
        case 'end':
          return _context2.stop();
      }
    }
  }, _callee2, undefined, [[0, 8]]);
}))).command('trades [symbol] [limit]', 'Get recent trades (up to last 500).', function () {}, function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(args) {
    var data;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return (0, _endpoints.trades)(args);

          case 3:
            data = _context3.sent;

            _betterConsole2.default.table(data);
            _context3.next = 10;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3['catch'](0);

            _betterConsole2.default.error('Ops! We have an error: ', _context3.t0.red);

          case 10:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined, [[0, 7]]);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}()).argv;