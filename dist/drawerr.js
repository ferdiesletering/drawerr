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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
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

var settings = {
  bodyNoScrollClass: "drawerr-no-scroll",
  drawerOpenClass: "drawerr--open",
  toggleBtnActiveClass: "drawerr-btn--active",
  slideFromClass: "drawerr-slide-from-right"
};

var options = {
  btnText: "MENU",
  drawerr: "#drawerr",
  navbar: "header",
  toggleBtn: ".toggleDrawerr",
  slideFrom: "left"
};

var Drawerr = function () {
  function Drawerr() {
    var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Drawerr);

    this.settings = settings;
    this.options = Object.assign(options, args);

    // Events
    this.openEvent = new Event("drawerr-open");
    this.closeEvent = new Event("drawerr-close");

    // Dom elements
    this.body = document.querySelector("body");
    this.drawerr = document.querySelector(this.options.drawerr);
    this.toggleBtn = document.querySelector(this.options.toggleBtn);
    this.navbar = document.querySelector(this.options.navbar);

    this.beforeVisible();

    // Drawerr now visible
    this.drawerr.classList.remove("drawerr--init");
    this.drawerr.classList.add("drawerr");
    this.toggleBtn.classList.add("drawerr-btn");

    this.events();
  }

  _createClass(Drawerr, [{
    key: "beforeVisible",
    value: function beforeVisible() {
      this.setSlideFromDirection();
      this.drawerrOffsetTop();
      this.insertHamburgerText();
    }
  }, {
    key: "drawerrOffsetTop",
    value: function drawerrOffsetTop() {
      this.drawerr.style.top = options.navbar.offsetHeight + "px";
    }
  }, {
    key: "setSlideFromDirection",
    value: function setSlideFromDirection() {
      if (options.slideFrom === "right") this.drawerr.classList.add(this.settings.slideFromClass);
    }
  }, {
    key: "events",
    value: function events() {
      var _this = this;

      this.toggleBtn.addEventListener("click", function () {
        _this.toggleDrawer();
      });

      document.addEventListener("click", function (e) {
        _this.bodyClick(e);
      });

      window.onresize = function (e) {
        _this.onResize();
      };
    }
  }, {
    key: "toggleDrawer",
    value: function toggleDrawer() {
      this.addOrRemoveClass(this.body, this.settings.bodyNoScrollClass);
      this.addOrRemoveClass(this.drawerr, this.settings.drawerOpenClass);
      this.addOrRemoveClass(this.toggleBtn, this.settings.toggleBtnActiveClass);
      this.dispatchEvents();
    }
  }, {
    key: "onResize",
    value: function onResize() {
      this.drawerrOffsetTop();
    }
  }, {
    key: "bodyClick",
    value: function bodyClick(e) {
      if (this.toggleBtn.contains(e.target)) return;

      if (!this.drawerr.contains(e.target) && document.querySelector(options.drawerrSelector).classList.contains(this.settings.drawerOpenClass)) {
        this.toggleDrawer();
      }
    }
  }, {
    key: "dispatchEvents",
    value: function dispatchEvents() {
      if (this.drawerr.classList.contains(this.settings.drawerOpenClass)) {
        document.dispatchEvent(this.openEvent);
      } else {
        document.dispatchEvent(this.closeEvent);
      }
    }
  }, {
    key: "addOrRemoveClass",
    value: function addOrRemoveClass(el, addClass) {
      if (el.classList.contains(addClass)) {
        return el.classList.remove(addClass);
      }
      el.classList.add(addClass);
    }
  }, {
    key: "insertHamburgerText",
    value: function insertHamburgerText() {
      if (options.btnText.length === 0) return;

      this.toggleBtn.classList.add("drawerr-btn--has-menu-text");
      this.toggleBtn.insertAdjacentHTML("beforeend", "<span class=\"drawerr-btn__menu-text\">" + options.btnText + "</span>");
    }
  }]);

  return Drawerr;
}();

exports.default = Drawerr;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _drawerr = __webpack_require__(0);

var _drawerr2 = _interopRequireDefault(_drawerr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var multilevelSettings = {
  activeSubmenu: false,
  submenus: false,
  navigationTextClass: "drawerr-navigation",
  hasSubmenuClass: "drawerr-item-has-submenu",
  submenuClass: "drawerr-submenu",
  submenuActiveClass: "drawerr-submenu--active",
  navigationContainerClass: "drawerr-navigation-container",
  hiddenClass: 'hidden'
};

var DrawerrMultilevel = function (_Drawerr) {
  _inherits(DrawerrMultilevel, _Drawerr);

  function DrawerrMultilevel(args) {
    _classCallCheck(this, DrawerrMultilevel);

    var _this = _possibleConstructorReturn(this, (DrawerrMultilevel.__proto__ || Object.getPrototypeOf(DrawerrMultilevel)).call(this, args));

    _this.multilevelSettings = multilevelSettings;
    _this.drawerr.classList.add('drawerr-multilevel');

    // Setup navigation
    _this.insertNavigation();
    _this.navigation = document.querySelector("." + _this.multilevelSettings.navigationTextClass);

    _this.navigationText = _this.navigation.querySelector("." + _this.multilevelSettings.navigationTextClass + "__text");
    _this.navigationIcon = document.querySelector("." + _this.multilevelSettings.navigationTextClass + "__icon");

    // Submenu's
    _this.multilevelSettings.submenus = _this.drawerr.querySelectorAll("ul li ul");
    _this.addClassToSubmenus();

    // Events
    _this.bindLinks();
    _this.navigationOnClick();
    return _this;
  }

  _createClass(DrawerrMultilevel, [{
    key: "insertNavigation",
    value: function insertNavigation() {
      this.navigationContainer = document.querySelector("." + this.multilevelSettings.navigationContainerClass);

      if (this.navigationContainer === null) {
        this.navigationContainer = this.drawerr.insertAdjacentHTML("afterbegin", "<div class=\"" + this.multilevelSettings.navigationContainerClass + "\"></div>");

        this.navigationContainer = document.querySelector("." + this.multilevelSettings.navigationContainerClass);
      }

      this.navigationContainer.insertAdjacentHTML("afterbegin", " <a class=\"" + this.multilevelSettings.navigationTextClass + "\" href=\"#\"><span class=\"" + this.multilevelSettings.navigationTextClass + "__icon " + this.multilevelSettings.hidden + "\"></span><span class=\"" + this.multilevelSettings.navigationTextClass + "__text\">Menu</span></a>");
    }
  }, {
    key: "addClassToSubmenus",
    value: function addClassToSubmenus() {
      var _this2 = this;

      Array.prototype.forEach.call(this.multilevelSettings.submenus, function (menu) {
        menu.classList.add(_this2.multilevelSettings.submenuClass);
      });
    }
  }, {
    key: "bindLinks",
    value: function bindLinks() {
      var _this3 = this;

      var links = this.drawerr.querySelectorAll("ul a");

      if (links.length > 0) {
        Array.prototype.forEach.call(links, function (link) {
          parent = link.parentElement;

          if (parent.children.item(parent.children.length - 1).classList.contains(_this3.multilevelSettings.submenuClass)) {
            link.classList.add(_this3.multilevelSettings.hasSubmenuClass);
          }

          link.addEventListener("click", _this3.linkOnClick.bind(_this3));
        });
      }
    }
  }, {
    key: "linkOnClick",
    value: function linkOnClick(e) {

      var link = e.target;
      var submenu = link.parentElement.querySelector("." + this.multilevelSettings.submenuClass);
      var ul = this.drawerr.querySelector("ul");

      if (submenu !== null) {
        submenu.classList.add(this.multilevelSettings.submenuActiveClass);
        this.setNavigationText(link.textContent);
        this.multilevelSettings.activeSubmenu = submenu;
        this.hideShowNavigationIcon("show");
        e.preventDefault();
      }
    }
  }, {
    key: "navigationOnClick",
    value: function navigationOnClick() {
      var _this4 = this;

      this.navigation.addEventListener("click", function () {
        if (!_this4.multilevelSettings.activeSubmenu) {
          return;
        }

        _this4.multilevelSettings.activeSubmenu.classList.remove(_this4.multilevelSettings.submenuActiveClass);
        _this4.multilevelSettings.activeSubmenu = _this4.multilevelSettings.activeSubmenu.parentElement.parentElement;

        if (!_this4.multilevelSettings.activeSubmenu.classList.contains("drawerr-submenu--active")) {
          _this4.hideShowNavigationIcon(_this4.multilevelSettings.hiddenClass);
          _this4.setNavigationText("Menu");
        } else {
          _this4.setNavigationText(_this4.multilevelSettings.activeSubmenu.parentElement.querySelector("a").textContent);
        }
      });
    }
  }, {
    key: "setNavigationText",
    value: function setNavigationText(text) {
      this.navigationText.textContent = text;
    }
  }, {
    key: "hideShowNavigationIcon",
    value: function hideShowNavigationIcon(action) {
      action == "show" ? this.navigationIcon.classList.remove(this.multilevelSettings.hiddenClass) : this.navigationIcon.classList.add(this.multilevelSettings.hiddenClass);
    }
  }]);

  return DrawerrMultilevel;
}(_drawerr2.default);

exports.default = DrawerrMultilevel;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _drawerr = __webpack_require__(0);

var _drawerr2 = _interopRequireDefault(_drawerr);

var _drawerrMultilevel = __webpack_require__(1);

var _drawerrMultilevel2 = _interopRequireDefault(_drawerrMultilevel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * We need this main function to correctly exports drawerr
 * see http://siawyoung.com/coding/javascript/exporting-es6-modules-as-single-scripts-with-webpack.html
 */
window.drawerr = _drawerr2.default;
window.drawerrMultilevel = _drawerrMultilevel2.default;

module.exports = _drawerr2.default;

/***/ })
/******/ ]);