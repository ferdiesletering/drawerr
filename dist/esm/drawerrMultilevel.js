"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _drawerr = _interopRequireDefault(require("./drawerr"));

var _ally = require("ally.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var multilevelSettings = {
  activeSubmenu: false,
  submenus: false,
  links: false,
  navigationTextClass: 'drawerr-navigation',
  hasSubmenuClass: 'drawerr-item-has-submenu',
  submenuClass: 'drawerr-submenu',
  submenuActiveClass: 'drawerr-submenu--active',
  navigationContainerClass: 'drawerr-navigation-container',
  hiddenClass: 'hidden',
  noHashLinkClass: 'drawer-item-hashlink',
  subMenuLinkClass: 'drawerr-submenu-link'
};
var multilevelOptions = {
  navigationText: 'MENU',
  toggleBtnAriaLabel: 'navigation',
  closeMenuBtnLabel: 'Close menu',
  showOnLoad: false
};

var DrawerrMultilevel =
/*#__PURE__*/
function (_Drawerr) {
  _inherits(DrawerrMultilevel, _Drawerr);

  function DrawerrMultilevel(args) {
    var _this;

    _classCallCheck(this, DrawerrMultilevel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DrawerrMultilevel).call(this, args));
    var navigationText = multilevelOptions.navigationText,
        toggleBtnAriaLabel = multilevelOptions.toggleBtnAriaLabel,
        closeMenuBtnLabel = multilevelOptions.closeMenuBtnLabel,
        showOnLoad = multilevelOptions.showOnLoad;
    _this.options.navigationText = args.navigationText || navigationText;
    _this.options.toggleBtnAriaLabel = args.toggleBtnAriaLabel || toggleBtnAriaLabel;
    _this.options.closeMenuBtnLabel = args.closeMenuBtnLabel || closeMenuBtnLabel;
    _this.options.showOnLoad = args.showOnLoad || showOnLoad;
    _this.multilevelSettings = multilevelSettings;

    _this.drawerr.classList.add('drawerr-multilevel');

    _this.tabHandle = false; // All links inside drawerr

    _this.links = _this.drawerr.querySelectorAll('a'); // Setup navigation

    _this.insertNavigation();

    _this.insertCloseMenu();

    _this.navigation = document.querySelector(".".concat(_this.multilevelSettings.navigationTextClass));
    _this.navigationText = _this.navigation.querySelector(".".concat(_this.multilevelSettings.navigationTextClass, "__text"));
    _this.navigationIcon = document.querySelector(".".concat(_this.multilevelSettings.navigationTextClass, "__icon")); // Links

    _this.linkActiveClass = 'drawerr-link--active'; // Submenu's

    _this.multilevelSettings.submenus = _this.drawerr.querySelectorAll('ul li ul');

    _this.addClassToSubmenus(); // Events


    _this.bindLinks();

    _this.navigationOnClick();

    _this.bindOnClose();

    _this.toggleBtn.setAttribute('aria-expanded', 'false');

    _this.toggleBtn.setAttribute('aria-label', _this.options.toggleBtnAriaLabel);

    if (_this.options.showOnLoad) {
      _this.toggleDrawer();
    }

    return _this;
  }

  _createClass(DrawerrMultilevel, [{
    key: "toggleDrawer",
    value: function toggleDrawer() {
      _get(_getPrototypeOf(DrawerrMultilevel.prototype), "toggleDrawer", this).call(this);

      if (this.toggleBtn.classList.contains('drawerr-btn--active')) {
        this.toggleBtn.setAttribute('aria-expanded', 'true');
        this.drawerr.querySelector('ul a').focus();

        if (!this.tabHandle) {
          this.tabHandle = _ally.maintain.tabFocus({
            context: '.drawerr-container'
          });
        }
      } else {
        this.removeActiveClassFromLinks();
        this.toggleBtn.setAttribute('aria-expanded', 'false');
        this.multilevelSettings.activeSubmenu = false;
        this.toggleBtn.focus();
        this.tabHandle.disengage();
        this.tabHandle = false;
      }
    }
  }, {
    key: "insertNavigation",
    value: function insertNavigation() {
      this.navigationContainer = document.querySelector(".".concat(this.multilevelSettings.navigationContainerClass));

      if (this.navigationContainer === null) {
        this.navigationContainer = this.drawerr.insertAdjacentHTML('afterbegin', "<div class=\"".concat(this.multilevelSettings.navigationContainerClass, "\"></div>"));
        this.navigationContainer = document.querySelector(".".concat(this.multilevelSettings.navigationContainerClass));
      }

      this.navigationContainer.insertAdjacentHTML('afterbegin', " <a tabIndex=\"-1\" class=\"".concat(this.multilevelSettings.navigationTextClass, "\" href=\"#\"><span class=\"").concat(this.multilevelSettings.navigationTextClass, "__icon ").concat(this.multilevelSettings.hiddenClass, "\"></span><span class=\"").concat(this.multilevelSettings.navigationTextClass, "__text\">").concat(this.options.navigationText, "</span></a>"));
    }
  }, {
    key: "insertCloseMenu",
    value: function insertCloseMenu() {
      if (this.navigationContainer !== null) {
        this.navigationContainer.insertAdjacentHTML('afterbegin', "<button id=\"js-sr-close-menu\" class=\"sr-only sr-only-focusable\">".concat(this.options.closeMenuBtnLabel, "</button>"));
        this.closeMenuOnClick();
      }
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
    key: "reset",
    value: function reset() {
      var _this3 = this;

      setTimeout(function () {
        _this3.removeActiveClassFromSubmenus();

        _this3.setNavigationText(_this3.options.navigationText);

        _this3.hideShowNavigationIcon();
      }, 300);
    }
  }, {
    key: "bindOnClose",
    value: function bindOnClose() {
      var _this4 = this;

      document.addEventListener('drawerr-close', this.reset.bind(this));
      document.addEventListener('keydown', function (e) {
        if (e.keyCode === 27) {
          if (_this4.drawerr.classList.contains('drawerr--open')) {
            _this4.toggleDrawer();
          }
        }
      });
    }
  }, {
    key: "bindLinks",
    value: function bindLinks() {
      var _this5 = this;

      var links = this.drawerr.querySelectorAll('ul a');

      if (links.length) {
        Array.prototype.forEach.call(links, function (link) {
          var parent = link.parentElement;

          if (parent.children.item(parent.children.length - 1).classList.contains(_this5.multilevelSettings.submenuClass)) {
            link.classList.add(_this5.multilevelSettings.hasSubmenuClass);

            if (link.getAttribute('href') !== '#') {
              _this5.addSubmenuLink(link);
            }
          }

          link.addEventListener('click', _this5.linkOnClick.bind(_this5));
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
      submenuLink.setAttribute('class', this.multilevelSettings.subMenuLinkClass);
      link.insertAdjacentElement('afterend', submenuLink);
      submenuLink.addEventListener('click', this.linkOnClick.bind(this));
    }
    /**
     *
     * @param {*} e
     */

  }, {
    key: "linkOnClick",
    value: function linkOnClick(e) {
      var _this6 = this;

      var link = e.target;
      var submenu = link.parentElement.querySelector(".".concat(this.multilevelSettings.submenuClass));
      var submenuLink = false;
      var breadcrumbText = '';
      this.navigationContainer.scrollIntoView();
      link.classList.add(this.linkActiveClass);

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
        } // Make navigation tabable to enable `go back` functionality


        this.navigation.setAttribute('tabIndex', 0);
        submenu.classList.add(this.multilevelSettings.submenuActiveClass);
        this.setNavigationText(breadcrumbText);
        this.multilevelSettings.activeSubmenu = submenu;
        setTimeout(function () {
          _this6.multilevelSettings.activeSubmenu.querySelector('li a').focus();
        }, 600);
        this.hideShowNavigationIcon('show');
      }
    }
  }, {
    key: "navigationOnClick",
    value: function navigationOnClick() {
      var _this7 = this;

      this.navigation.addEventListener('click', function (e) {
        e.preventDefault();
        if (!_this7.multilevelSettings.activeSubmenu) return;

        _this7.removeActiveClassFromLinks();

        _this7.multilevelSettings.activeSubmenu.classList.remove(_this7.multilevelSettings.submenuActiveClass);

        _this7.multilevelSettings.activeSubmenu = _this7.multilevelSettings.activeSubmenu.parentElement.parentElement; // Is submenu active? Otherwise we are at root level

        if (!_this7.multilevelSettings.activeSubmenu.classList.contains('drawerr-submenu--active')) {
          _this7.hideShowNavigationIcon(_this7.multilevelSettings.hiddenClass);

          _this7.setNavigationText(_this7.options.navigationText);

          _this7.navigation.setAttribute('tabindex', -1);
        } else {
          _this7.setNavigationText(_this7.multilevelSettings.activeSubmenu.parentElement.querySelector('a').textContent);
        }
      });
    }
  }, {
    key: "closeMenuOnClick",
    value: function closeMenuOnClick() {
      var _this8 = this;

      document.querySelector('#js-sr-close-menu').addEventListener('click', function () {
        _this8.toggleDrawer();
      });
    }
  }, {
    key: "removeActiveClassFromLinks",
    value: function removeActiveClassFromLinks() {
      var _this9 = this;

      if (this.links.length > 0) {
        this.links.forEach(function (link) {
          link.classList.remove(_this9.linkActiveClass);
        });
      }
    }
  }, {
    key: "removeActiveClassFromSubmenus",
    value: function removeActiveClassFromSubmenus() {
      var _this10 = this;

      if (this.multilevelSettings.submenus.length > 0) {
        Array.prototype.forEach.call(this.multilevelSettings.submenus, function (menu) {
          menu.classList.remove(_this10.multilevelSettings.submenuActiveClass);
        });
      }
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
      action === 'show' ? this.navigationIcon.classList.remove(this.multilevelSettings.hiddenClass) : this.navigationIcon.classList.add(this.multilevelSettings.hiddenClass);
    }
  }]);

  return DrawerrMultilevel;
}(_drawerr.default);

exports.default = DrawerrMultilevel;
//# sourceMappingURL=drawerrMultilevel.js.map