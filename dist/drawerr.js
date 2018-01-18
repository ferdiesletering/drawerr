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

    // Domclasses
    this.bodyNoScrollClass = 'drawerr-no-scroll';
    this.drawerOpenClass = 'drawerr--open';
    this.toggleBtnActiveClass = 'drawerr-btn--active';
    this.slideFromClass = 'drawerr-slide-from-right';

    this.options = {
      btnText: 'MENU',
      drawerr: '#drawerr',
      navbar: 'header',
      toggleBtn: '.toggleDrawerr',
      slideFrom: 'left'

      //  Events
    };this.openEvent = new Event('drawerr-open');
    this.closeEvent = new Event('drawerr-close');
  }

  _createClass(Drawerr, [{
    key: 'init',
    value: function init() {
      var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var options = Object.assign(this.options, args);

      this.drawerrSelector = options.drawerr;
      this.toggleBtn = options.toggleBtn;
      this.navbar = options.navbar;
      this.slideFrom = options.slideFrom;
      this.btnText = options.btnText;

      // Dom elements
      this.body = document.querySelector('body');
      this.drawerr = document.querySelector(this.drawerrSelector);
      this.toggleBtn = document.querySelector(this.toggleBtn);
      this.navbar = document.querySelector(this.navbar);

      this.beforeVisible();

      // Drawerr now visible
      this.drawerr.classList.remove('drawerr--init');
      this.drawerr.classList.add('drawerr');
      this.toggleBtn.classList.add('drawerr-btn');
      this.events();
    }
  }, {
    key: 'beforeVisible',
    value: function beforeVisible() {
      this.setSlideFromDirection();
      this.drawerrOffsetTop();
      this.appendBtnText();
    }
  }, {
    key: 'drawerrOffsetTop',
    value: function drawerrOffsetTop() {
      this.drawerr.style.top = this.navbar.offsetHeight + 'px';
    }
  }, {
    key: 'setSlideFromDirection',
    value: function setSlideFromDirection() {
      if (this.slideFrom === 'right') this.drawerr.classList.add(this.slideFromClass);
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

      window.onresize = function (e) {
        _this.onResize();
      };
    }
  }, {
    key: 'toggleDrawer',
    value: function toggleDrawer() {
      this.addOrRemoveClass(this.body, this.bodyNoScrollClass);
      this.addOrRemoveClass(this.drawerr, this.drawerOpenClass);
      this.addOrRemoveClass(this.toggleBtn, this.toggleBtnActiveClass);
      this.dispatchEvents();
    }
  }, {
    key: 'onResize',
    value: function onResize() {
      this.drawerrOffsetTop();
    }
  }, {
    key: 'bodyClick',
    value: function bodyClick(e) {
      if (this.toggleBtn.contains(e.target)) return;

      if (!this.drawerr.contains(e.target) && document.querySelector(this.drawerrSelector).classList.contains(this.drawerOpenClass)) {
        this.toggleDrawer();
      }
    }
  }, {
    key: 'dispatchEvents',
    value: function dispatchEvents() {
      if (this.drawerr.classList.contains(this.drawerOpenClass)) {
        document.dispatchEvent(this.openEvent);
      } else {
        document.dispatchEvent(this.closeEvent);
      }
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
    key: 'appendBtnText',
    value: function appendBtnText() {
      if (this.btnText.length === 0) return;

      this.toggleBtn.classList.add('drawerr-btn--has-menu-text');
      this.toggleBtn.insertAdjacentHTML('beforeend', '<span class="drawerr-btn__menu-text">' + this.btnText + '</span>');
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

window.drawerr = _drawerr2.default; /**
                                     * We need this main function to correctly exports drawerr
                                     * see http://siawyoung.com/coding/javascript/exporting-es6-modules-as-single-scripts-with-webpack.html
                                     */


module.exports = _drawerr2.default;

/***/ })
/******/ ]);