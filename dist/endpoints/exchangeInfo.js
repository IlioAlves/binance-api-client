'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _betterConsole = require('better-console');

var _betterConsole2 = _interopRequireDefault(_betterConsole);

require('colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  var data, symbols;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _requestPromise2.default)({
            uri: 'https://api.binance.com/api/v1/exchangeInfo',
            json: true
          });

        case 3:
          data = _context.sent;
          symbols = data.symbols.map(function (symbol) {
            delete symbol.filters;
            return symbol;
          });


          _betterConsole2.default.table(data.rateLimits);
          _betterConsole2.default.table(symbols);
          _context.next = 12;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context['catch'](0);

          _betterConsole2.default.error('Ops! We got an error:'.red, _context.t0.red);

        case 12:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, undefined, [[0, 9]]);
}));