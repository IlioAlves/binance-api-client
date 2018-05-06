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

exports.default = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(args) {
    var symbol, limit, data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            symbol = args.symbol, limit = args.limit;
            _context.prev = 1;
            _context.next = 4;
            return (0, _requestPromise2.default)({
              uri: 'https://api.binance.com/api/v1/trades',
              qs: {
                symbol: symbol,
                limit: limit
              },
              json: true
            });

          case 4:
            data = _context.sent;

            _betterConsole2.default.table(data);
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context['catch'](1);

            _betterConsole2.default.trace('Ops! We got an error:'.red, _context.t0.red);

          case 11:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[1, 8]]);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();