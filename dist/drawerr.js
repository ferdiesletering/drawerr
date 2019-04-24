"use strict";

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/******/
(function (modules) {
  // webpackBootstrap

  /******/
  // The module cache

  /******/
  var installedModules = {};
  /******/

  /******/
  // The require function

  /******/

  function __webpack_require__(moduleId) {
    /******/

    /******/
    // Check if module is in cache

    /******/
    if (installedModules[moduleId]) {
      /******/
      return installedModules[moduleId].exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = installedModules[moduleId] = {
      /******/
      i: moduleId,

      /******/
      l: false,

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/

    /******/
    // Flag the module as loaded

    /******/

    module.l = true;
    /******/

    /******/
    // Return the exports of the module

    /******/

    return module.exports;
    /******/
  }
  /******/

  /******/

  /******/
  // expose the modules object (__webpack_modules__)

  /******/


  __webpack_require__.m = modules;
  /******/

  /******/
  // expose the module cache

  /******/

  __webpack_require__.c = installedModules;
  /******/

  /******/
  // define getter function for harmony exports

  /******/

  __webpack_require__.d = function (exports, name, getter) {
    /******/
    if (!__webpack_require__.o(exports, name)) {
      /******/
      Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/

  };
  /******/

  /******/
  // define __esModule on exports

  /******/


  __webpack_require__.r = function (exports) {
    /******/
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/
      Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module'
      });
      /******/
    }
    /******/


    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    /******/
  };
  /******/

  /******/
  // create a fake namespace object

  /******/
  // mode & 1: value is a module id, require it

  /******/
  // mode & 2: merge all properties of value into the ns

  /******/
  // mode & 4: return value when already ns object

  /******/
  // mode & 8|1: behave like require

  /******/


  __webpack_require__.t = function (value, mode) {
    /******/
    if (mode & 1) value = __webpack_require__(value);
    /******/

    if (mode & 8) return value;
    /******/

    if (mode & 4 && _typeof(value) === 'object' && value && value.__esModule) return value;
    /******/

    var ns = Object.create(null);
    /******/

    __webpack_require__.r(ns);
    /******/


    Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value
    });
    /******/

    if (mode & 2 && typeof value != 'string') for (var key in value) {
      __webpack_require__.d(ns, key, function (key) {
        return value[key];
      }.bind(null, key));
    }
    /******/

    return ns;
    /******/
  };
  /******/

  /******/
  // getDefaultExport function for compatibility with non-harmony modules

  /******/


  __webpack_require__.n = function (module) {
    /******/
    var getter = module && module.__esModule ?
    /******/
    function getDefault() {
      return module['default'];
    } :
    /******/
    function getModuleExports() {
      return module;
    };
    /******/

    __webpack_require__.d(getter, 'a', getter);
    /******/


    return getter;
    /******/
  };
  /******/

  /******/
  // Object.prototype.hasOwnProperty.call

  /******/


  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/

  /******/
  // __webpack_public_path__

  /******/


  __webpack_require__.p = "/";
  /******/

  /******/

  /******/
  // Load entry module and return exports

  /******/

  return __webpack_require__(__webpack_require__.s = 0);
  /******/
})(
/************************************************************************/

/******/
{
  /***/
  "./src/js/drawerr.js":
  /*!***************************!*\
    !*** ./src/js/drawerr.js ***!
    \***************************/

  /*! exports provided: default */

  /***/
  function srcJsDrawerrJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return Drawerr;
    });

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
      slideFrom: "left",
      preventBodyOnClick: false
    };

    var Drawerr =
    /*#__PURE__*/
    function () {
      function Drawerr() {
        var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Drawerr);

        this.settings = settings;
        this.options = Object.assign(options, args); // Events

        this.openEvent = new Event("drawerr-open");
        this.closeEvent = new Event("drawerr-close"); // Dom elements

        this.body = document.querySelector("body");
        this.drawerr = document.querySelector(this.options.drawerr);
        this.toggleBtn = document.querySelector(this.options.toggleBtn);
        this.navbar = document.querySelector(this.options.navbar);
        this.beforeVisible(); // Drawerr now visible

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
          if (this.options.preventBodyOnClick) return;

          if (!this.drawerr.contains(e.target) && document.querySelector(options.drawerr).classList.contains(this.settings.drawerOpenClass)) {
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
          this.toggleBtn.insertAdjacentHTML("beforeend", "<span class=\"drawerr-btn__menu-text\">".concat(options.btnText, "</span>"));
        }
      }]);

      return Drawerr;
    }();
    /***/

  },

  /***/
  "./src/js/drawerrMultilevel.js":
  /*!*************************************!*\
    !*** ./src/js/drawerrMultilevel.js ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcJsDrawerrMultilevelJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return DrawerrMultilevel;
    });
    /* harmony import */


    var _drawerr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./drawerr */
    "./src/js/drawerr.js");

    var multilevelSettings = {
      activeSubmenu: false,
      submenus: false,
      navigationTextClass: "drawerr-navigation",
      hasSubmenuClass: "drawerr-item-has-submenu",
      submenuClass: "drawerr-submenu",
      submenuActiveClass: "drawerr-submenu--active",
      navigationContainerClass: "drawerr-navigation-container",
      hiddenClass: 'hidden',
      showOnLoad: false,
      noHashLinkClass: 'drawer-item-hashlink',
      subMenuLinkClass: 'drawerr-submenu-link',
      toggleBtnAriaLabel: 'navigation'
    };
    var multilevelOptions = {
      navigationText: 'MENU'
    };

    var DrawerrMultilevel =
    /*#__PURE__*/
    function (_drawerr__WEBPACK_IMP) {
      _inherits(DrawerrMultilevel, _drawerr__WEBPACK_IMP);

      function DrawerrMultilevel(args) {
        var _this2;

        _classCallCheck(this, DrawerrMultilevel);

        _this2 = _possibleConstructorReturn(this, _getPrototypeOf(DrawerrMultilevel).call(this, args));
        _this2.options.navigationText = args.navigationText || multilevelOptions.navigationText;
        _this2.multilevelSettings = multilevelSettings;

        _this2.drawerr.classList.add('drawerr-multilevel'); // Setup navigation


        _this2.insertNavigation();

        _this2.navigation = document.querySelector(".".concat(_this2.multilevelSettings.navigationTextClass));
        _this2.navigationText = _this2.navigation.querySelector(".".concat(_this2.multilevelSettings.navigationTextClass, "__text"));
        _this2.navigationIcon = document.querySelector(".".concat(_this2.multilevelSettings.navigationTextClass, "__icon")); // Submenu's

        _this2.multilevelSettings.submenus = _this2.drawerr.querySelectorAll("ul li ul");

        _this2.addClassToSubmenus(); // Events


        _this2.bindLinks();

        _this2.navigationOnClick();

        _this2.bindOnClose();

        _this2.toggleBtn.setAttribute('aria-expanded', 'false');

        _this2.toggleBtn.setAttribute('aria-label', _this2.multilevelSettings.toggleBtnAriaLabel);

        if (_this2.options.showOnLoad) {
          _this2.toggleDrawer();
        }

        return _this2;
      }

      _createClass(DrawerrMultilevel, [{
        key: "toggleDrawer",
        value: function toggleDrawer() {
          _get(_getPrototypeOf(DrawerrMultilevel.prototype), "toggleDrawer", this).call(this);

          if (this.toggleBtn.classList.contains('drawerr-btn--active')) {
            this.toggleBtn.setAttribute('aria-expanded', 'true');
            this.drawerr.querySelector('ul a').focus();
          } else {
            this.toggleBtn.setAttribute('aria-expanded', 'false');
            this.toggleBtn.focus();
          }
        }
      }, {
        key: "insertNavigation",
        value: function insertNavigation() {
          this.navigationContainer = document.querySelector(".".concat(this.multilevelSettings.navigationContainerClass));

          if (this.navigationContainer === null) {
            this.navigationContainer = this.drawerr.insertAdjacentHTML("afterbegin", "<div class=\"".concat(this.multilevelSettings.navigationContainerClass, "\"></div>"));
            this.navigationContainer = document.querySelector(".".concat(this.multilevelSettings.navigationContainerClass));
          }

          this.navigationContainer.insertAdjacentHTML("afterbegin", " <a aria-hidden=\"true\" class=\"".concat(this.multilevelSettings.navigationTextClass, "\" href=\"#\"><span class=\"").concat(this.multilevelSettings.navigationTextClass, "__icon ").concat(this.multilevelSettings.hiddenClass, "\"></span><span class=\"").concat(this.multilevelSettings.navigationTextClass, "__text\">").concat(this.options.navigationText, "</span></a>"));
        }
      }, {
        key: "addClassToSubmenus",
        value: function addClassToSubmenus() {
          var _this3 = this;

          Array.prototype.forEach.call(this.multilevelSettings.submenus, function (menu) {
            menu.classList.add(_this3.multilevelSettings.submenuClass);
          });
        }
      }, {
        key: "reset",
        value: function reset() {
          var _this4 = this;

          setTimeout(function () {
            Array.prototype.forEach.call(_this4.multilevelSettings.submenus, function (menu) {
              menu.classList.remove(_this4.multilevelSettings.submenuActiveClass);
            });

            _this4.setNavigationText(_this4.options.navigationText);

            _this4.hideShowNavigationIcon();
          }, 300);
        }
      }, {
        key: "bindOnClose",
        value: function bindOnClose() {
          var _this5 = this;

          document.addEventListener('drawerr-close', this.reset.bind(this));
          document.addEventListener('keydown', function (e) {
            if (e.keyCode == 27) {
              if (_this5.drawerr.classList.contains('drawerr--open')) {
                _this5.toggleDrawer();
              }
            }
          });
        }
      }, {
        key: "bindLinks",
        value: function bindLinks() {
          var _this6 = this;

          var links = this.drawerr.querySelectorAll("ul a");

          if (links.length) {
            Array.prototype.forEach.call(links, function (link) {
              var parent = link.parentElement;

              if (parent.children.item(parent.children.length - 1).classList.contains(_this6.multilevelSettings.submenuClass)) {
                link.classList.add(_this6.multilevelSettings.hasSubmenuClass);

                if (link.getAttribute('href') !== '#') {
                  _this6.addSubmenuLink(link);
                }
              }

              link.addEventListener("click", _this6.linkOnClick.bind(_this6));
            });
          }
        }
        /**
         * Add submenu link to existing link so the original and the submenu can be clicked
         *
         * @param {*} link
         */

      }, {
        key: "addSubmenuLink",
        value: function addSubmenuLink(link) {
          var submenuLink = document.createElement('a');
          link.parentElement.classList.add(this.multilevelSettings.noHashLinkClass);
          submenuLink.setAttribute('href', '#');
          submenuLink.setAttribute('class', this.multilevelSettings.subMenuLinkClass);
          link.insertAdjacentElement("afterend", submenuLink);
          submenuLink.addEventListener("click", this.linkOnClick.bind(this));
        }
        /**
         *
         * @param {*} e
         */

      }, {
        key: "linkOnClick",
        value: function linkOnClick(e) {
          var link = e.target;
          var submenu = link.parentElement.querySelector(".".concat(this.multilevelSettings.submenuClass));
          var submenuLink = false;
          var breadcrumbText = '';

          if (link.classList.contains(this.multilevelSettings.subMenuLinkClass)) {
            // Submenu item has no link but we need to set the breadcrumb text
            submenuLink = link.previousSibling;
          }

          if (submenu !== null) {
            if (!submenuLink) {
              breadcrumbText = link.textContent; // Go to the clicked link url instead of navigating the menu

              if (link.getAttribute('href') !== '#') {
                return false;
              }
            } else {
              breadcrumbText = submenuLink.textContent;
            }

            submenu.classList.add(this.multilevelSettings.submenuActiveClass);
            this.setNavigationText(breadcrumbText);
            this.multilevelSettings.activeSubmenu = submenu;
            this.hideShowNavigationIcon("show");
          }
        }
      }, {
        key: "navigationOnClick",
        value: function navigationOnClick() {
          var _this7 = this;

          this.navigation.addEventListener("click", function () {
            if (!_this7.multilevelSettings.activeSubmenu) return;

            _this7.multilevelSettings.activeSubmenu.classList.remove(_this7.multilevelSettings.submenuActiveClass);

            _this7.multilevelSettings.activeSubmenu = _this7.multilevelSettings.activeSubmenu.parentElement.parentElement;

            if (!_this7.multilevelSettings.activeSubmenu.classList.contains("drawerr-submenu--active")) {
              _this7.hideShowNavigationIcon(_this7.multilevelSettings.hiddenClass);

              _this7.setNavigationText(_this7.options.navigationText);
            } else {
              _this7.setNavigationText(_this7.multilevelSettings.activeSubmenu.parentElement.querySelector("a").textContent);
            }
          });
        }
        /**
         *
         * @param {*} text
         */

      }, {
        key: "setNavigationText",
        value: function setNavigationText(text) {
          this.navigationText.textContent = text;
        }
        /**
         *
         * @param {*} action
         */

      }, {
        key: "hideShowNavigationIcon",
        value: function hideShowNavigationIcon(action) {
          action == "show" ? this.navigationIcon.classList.remove(this.multilevelSettings.hiddenClass) : this.navigationIcon.classList.add(this.multilevelSettings.hiddenClass);
        }
      }]);

      return DrawerrMultilevel;
    }(_drawerr__WEBPACK_IMPORTED_MODULE_0__["default"]);
    /***/

  },

  /***/
  "./src/js/index.js":
  /*!*************************!*\
    !*** ./src/js/index.js ***!
    \*************************/

  /*! exports provided: default */

  /***/
  function srcJsIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _drawerr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./drawerr */
    "./src/js/drawerr.js");
    /* harmony import */


    var drawerr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! drawerr */
    "./src/js/drawerrMultilevel.js");
    /**
     * We need this main function to correctly exports drawerr
     * see http://siawyoung.com/coding/javascript/exporting-es6-modules-as-single-scripts-with-webpack.html
     */

    /* harmony default export */


    __webpack_exports__["default"] = {
      Drawerr: _drawerr__WEBPACK_IMPORTED_MODULE_0__["default"],
      DrawerrMultilevel: drawerr__WEBPACK_IMPORTED_MODULE_1__["default"]
    };
    window.drawerr = _drawerr__WEBPACK_IMPORTED_MODULE_0__["default"];
    window.drawerrMultilevel = drawerr__WEBPACK_IMPORTED_MODULE_1__["default"];
    /***/
  },

  /***/
  "./src/scss/drawerr.scss":
  /*!*******************************!*\
    !*** ./src/scss/drawerr.scss ***!
    \*******************************/

  /*! no static exports found */

  /***/
  function srcScssDrawerrScss(module, exports) {// removed by extract-text-webpack-plugin

    /***/
  },

  /***/
  0:
  /*!*******************************************************!*\
    !*** multi ./src/js/index.js ./src/scss/drawerr.scss ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    __webpack_require__(
    /*! /Users/ferdie/valet/fusion-project/htdocs/wp-content/themes/theme-fusion/node_modules/drawerr/src/js/index.js */
    "./src/js/index.js");

    module.exports = __webpack_require__(
    /*! /Users/ferdie/valet/fusion-project/htdocs/wp-content/themes/theme-fusion/node_modules/drawerr/src/scss/drawerr.scss */
    "./src/scss/drawerr.scss");
    /***/
  }
  /******/

});
