"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var settings = {
  bodyNoScrollClass: 'drawerr-no-scroll',
  drawerOpenClass: 'drawerr--open',
  toggleBtnActiveClass: 'drawerr-btn--active',
  slideFromClass: 'drawerr-slide-from-right'
};
var options = {
  btnText: 'MENU',
  drawerr: '#drawerr',
  navbar: 'header',
  toggleBtn: '.toggleDrawerr',
  slideFrom: 'left',
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

    this.openEvent = new Event('drawerr-open');
    this.closeEvent = new Event('drawerr-close'); // Dom elements

    this.body = document.querySelector('body');
    this.drawerr = document.querySelector(this.options.drawerr);
    this.toggleBtn = document.querySelector(this.options.toggleBtn);
    this.navbar = document.querySelector(this.options.navbar);
    this.beforeVisible(); // Drawerr now visible

    this.drawerr.classList.remove('drawerr--init');
    this.drawerr.classList.add('drawerr');
    this.toggleBtn.classList.add('drawerr-btn');
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
      this.drawerr.style.top = options.navbar.offsetHeight + 'px';
    }
  }, {
    key: "setSlideFromDirection",
    value: function setSlideFromDirection() {
      if (options.slideFrom === 'right') {
        this.drawerr.classList.add(this.settings.slideFromClass);
      }
    }
  }, {
    key: "events",
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
      this.toggleBtn.classList.add('drawerr-btn--has-menu-text');
      this.toggleBtn.insertAdjacentHTML('beforeend', "<span class=\"drawerr-btn__menu-text\">".concat(options.btnText, "</span>"));
    }
  }]);

  return Drawerr;
}();

exports.default = Drawerr;
//# sourceMappingURL=drawerr.js.map