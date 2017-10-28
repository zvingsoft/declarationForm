/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 87);
/******/ })
/************************************************************************/
/******/ ({

/***/ 3:
/***/ (function(module, exports) {

module.exports = axios;

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = ELEMENT;

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(6);

var _vue2 = _interopRequireDefault(_vue);

var _axios = __webpack_require__(3);

var _axios2 = _interopRequireDefault(_axios);

var _elementUi = __webpack_require__(4);

var _elementUi2 = _interopRequireDefault(_elementUi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /* global localStorage*/


_axios2.default.defaults.baseURL = '';
_axios2.default.defaults.timeout = 30000;
_axios2.default.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
_axios2.default.defaults.withCredentials = true;

_vue2.default.use(_elementUi2.default);
new _vue2.default({
  el: '#app',
  data: {
    username: localStorage.username || '',
    password: '',
    executing: false
  },
  methods: {
    login: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var data, res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (this.username) {
                  _context.next = 3;
                  break;
                }

                this.$message({
                  message: '用户名必须填写!',
                  type: 'warning'
                });
                return _context.abrupt('return');

              case 3:
                if (this.password) {
                  _context.next = 6;
                  break;
                }

                this.$message({
                  message: '密码必须填写!',
                  type: 'warning'
                });
                return _context.abrupt('return');

              case 6:
                localStorage.username = this.username;
                data = { UserName: this.username, Password: this.password };

                this.executing = true;
                _context.prev = 9;
                _context.next = 12;
                return _axios2.default.post('login', data);

              case 12:
                res = _context.sent;

                if (res.data.status === 1) {
                  localStorage.logined = '1';
                  window.location = 'index.html';
                } else {
                  this.$message({
                    message: res.data.message,
                    type: 'error'
                  });
                  this.executing = false;
                }
                _context.next = 20;
                break;

              case 16:
                _context.prev = 16;
                _context.t0 = _context['catch'](9);

                this.$message({
                  message: _context.t0.message,
                  type: 'error'
                });
                this.executing = false;

              case 20:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[9, 16]]);
      }));

      function login() {
        return _ref.apply(this, arguments);
      }

      return login;
    }()
  }
});

/***/ })

/******/ });
//# sourceMappingURL=login.js.map