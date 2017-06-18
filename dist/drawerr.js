var drawerr =
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Drawerr = function () {
	function Drawerr() {
		_classCallCheck(this, Drawerr);

		this.drawerOpenClass = 'drawerr--open';
		this.toggleBtnActiveClass = 'drawerr-btn--active';
	}

	_createClass(Drawerr, [{
		key: 'init',
		value: function init(args) {
			this.drawerr = document.querySelector(args.drawerr);
			this.toggleBtn = document.querySelector(args.toggleBtn);
			this.navbar = document.querySelector(args.navbar);

			this.drawerr.classList.remove('drawerr--init');
			this.drawerr.classList.add('drawerr');
			this.toggleBtn.classList.add('drawerr-btn');
			this.drawerrOffsetTop();
			this.events();
		}
	}, {
		key: 'drawerrOffsetTop',
		value: function drawerrOffsetTop() {
			this.drawerr.style.top = this.navbar.offsetHeight + 'px';
		}
	}, {
		key: 'events',
		value: function events() {
			var _this = this;

			this.toggleBtn.addEventListener('click', function () {
				_this.toggleDrawer();
			});

			document.addEventListener('click', function (e) {
				_this.bodyClick(e);
			});
		}
	}, {
		key: 'toggleDrawer',
		value: function toggleDrawer() {
			this.addOrRemoveClass(this.drawerr, this.drawerOpenClass);
			this.addOrRemoveClass(this.toggleBtn, this.toggleBtnActiveClass);
		}
	}, {
		key: 'addOrRemoveClass',
		value: function addOrRemoveClass(el, addClass) {
			if (el.classList.contains(addClass)) {
				return el.classList.remove(addClass);
			}

			el.classList.add(addClass);
		}
	}, {
		key: 'bodyClick',
		value: function bodyClick(e) {
			if (this.toggleBtn.contains(e.target)) return;

			if (!this.drawerr.contains(e.target) && document.querySelector('.drawerr').classList.contains(this.drawerOpenClass)) {
				this.toggleDrawer();
			}
		}
	}]);

	return Drawerr;
}();

exports.default = Drawerr;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _drawerr = __webpack_require__(0);

var _drawerr2 = _interopRequireDefault(_drawerr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _drawerr2.default; /**
                                     * We need this main function to correctly exports drawerr
                                     * see http://siawyoung.com/coding/javascript/exporting-es6-modules-as-single-scripts-with-webpack.html
                                     */

/***/ })
/******/ ]);