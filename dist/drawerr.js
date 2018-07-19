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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const settings = {
  bodyNoScrollClass : "drawerr-no-scroll",
  drawerOpenClass  : "drawerr--open",
  toggleBtnActiveClass :"drawerr-btn--active",
  slideFromClass : "drawerr-slide-from-right",
}

const options = {
  btnText: "MENU",
  drawerr: "#drawerr",
  navbar: "header",
  toggleBtn: ".toggleDrawerr",
  slideFrom: "left"
}

class Drawerr {
  constructor(args = {}) {
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
  
  beforeVisible() {
    this.setSlideFromDirection();
    this.drawerrOffsetTop();
    this.insertHamburgerText();
  }

  drawerrOffsetTop() {
    this.drawerr.style.top = options.navbar.offsetHeight + "px";
  }

  setSlideFromDirection() {
    if (options.slideFrom === "right")
      this.drawerr.classList.add(this.settings.slideFromClass);
  }

  events() {
    this.toggleBtn.addEventListener("click", () => {
      this.toggleDrawer();
    });

    document.addEventListener("click", e => {
      this.bodyClick(e);
    });

    window.onresize = e => {
      this.onResize();
    };
  }

  toggleDrawer() {
    this.addOrRemoveClass(this.body, this.settings.bodyNoScrollClass);
    this.addOrRemoveClass(this.drawerr, this.settings.drawerOpenClass );
    this.addOrRemoveClass(this.toggleBtn, this.settings.toggleBtnActiveClass);
    this.dispatchEvents();
  }

  onResize() {
    this.drawerrOffsetTop();
  }

  bodyClick(e) {
    if (this.toggleBtn.contains(e.target)) return;

    if (
      !this.drawerr.contains(e.target) &&
      document
        .querySelector(options.drawerr)
        .classList.contains(this.settings.drawerOpenClass )
    ) {
      this.toggleDrawer();
    }
  }

  dispatchEvents() {
    if (this.drawerr.classList.contains(this.settings.drawerOpenClass )) {
      document.dispatchEvent(this.openEvent);
    } else {
      document.dispatchEvent(this.closeEvent);
    }
  }

  addOrRemoveClass(el, addClass) {
    if (el.classList.contains(addClass)) {
      return el.classList.remove(addClass);
    }
    el.classList.add(addClass);
  }

  insertHamburgerText() {
    if (options.btnText.length === 0) return;

    this.toggleBtn.classList.add("drawerr-btn--has-menu-text");
    this.toggleBtn.insertAdjacentHTML(
      "beforeend",
      `<span class="drawerr-btn__menu-text">${options.btnText}</span>`
    );
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Drawerr;


/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__drawerr__ = __webpack_require__(0);


const multilevelSettings = {
	activeSubmenu: false,
	submenus: false,
	navigationTextClass: "drawerr-navigation",
	hasSubmenuClass: "drawerr-item-has-submenu",
	submenuClass: "drawerr-submenu",
	submenuActiveClass: "drawerr-submenu--active",
	navigationContainerClass: "drawerr-navigation-container",
	hiddenClass: 'hidden',
	noHashLinkClass: 'drawer-item-hashlink',
	subMenuLinkClass: 'drawerr-submenu-link'
};

const multilevelOptions = {
	navigationText: 'MENU'
};

class DrawerrMultilevel extends __WEBPACK_IMPORTED_MODULE_0__drawerr__["a" /* default */] {
	constructor(args) {
		super(args);

		this.options.navigationText = args.navigationText || multilevelOptions.navigationText;

		this.multilevelSettings = multilevelSettings;
		this.drawerr.classList.add('drawerr-multilevel');

		// Setup navigation
		this.insertNavigation();
		this.navigation = document.querySelector(`.${this.multilevelSettings.navigationTextClass}`);

		this.navigationText = this.navigation.querySelector(
			`.${this.multilevelSettings.navigationTextClass}__text`
		);
		this.navigationIcon = document.querySelector(
			`.${this.multilevelSettings.navigationTextClass}__icon`
		);

		// Submenu's
		this.multilevelSettings.submenus = this.drawerr.querySelectorAll("ul li ul");
		this.addClassToSubmenus();

		// Events
		this.bindLinks();
		this.navigationOnClick();
		this.bindOnClose();
	}

	insertNavigation() {
		this.navigationContainer = document.querySelector(`.${this.multilevelSettings.navigationContainerClass}`);

		if (this.navigationContainer === null) {
			this.navigationContainer = this.drawerr.insertAdjacentHTML(
				"afterbegin",
				`<div class="${this.multilevelSettings.navigationContainerClass}"></div>`
			);

			this.navigationContainer = document.querySelector(`.${this.multilevelSettings.navigationContainerClass}`);
		}

		this.navigationContainer.insertAdjacentHTML(
			"afterbegin",
			` <a class="${this.multilevelSettings.navigationTextClass}" href="#"><span class="${
      this.multilevelSettings.navigationTextClass
      }__icon ${this.multilevelSettings.hiddenClass}"></span><span class="${
      this.multilevelSettings.navigationTextClass
      }__text">${this.options.navigationText}</span></a>`
		);
	}

	addClassToSubmenus() {
		Array.prototype.forEach.call(this.multilevelSettings.submenus, menu => {
			menu.classList.add(this.multilevelSettings.submenuClass);
		});
	}

	reset() {
		setTimeout(() => {
			Array.prototype.forEach.call(this.multilevelSettings.submenus, menu => {
				menu.classList.remove(this.multilevelSettings.submenuActiveClass);
			});

			this.setNavigationText(this.options.navigationText);
			this.hideShowNavigationIcon();
		}, 300);
	}

	bindOnClose() {
		document.addEventListener('drawerr-close', this.reset.bind(this));
	}

	bindLinks() {
		const links = this.drawerr.querySelectorAll("ul a");

		if (links.length) {
			Array.prototype.forEach.call(links, link => {
				const parent = link.parentElement;

				if (parent.children.item(parent.children.length - 1).classList.contains(this.multilevelSettings.submenuClass)) {
					link.classList.add(this.multilevelSettings.hasSubmenuClass);

					if (link.getAttribute('href') !== '#') {
						this.addSubmenuLink(link);
					}
				}

				link.addEventListener("click", this.linkOnClick.bind(this));
			});
		}
	}

	/**
	 * Add submenu link to existing link so the original and the submenu can be clicked
	 * 
	 * @param {*} link 
	 */
	addSubmenuLink(link) {

		const submenuLink = document.createElement('a');

		link.parentElement.classList.add(this.multilevelSettings.noHashLinkClass);
		submenuLink.setAttribute('href', '#');
		submenuLink.setAttribute('class', this.multilevelSettings.subMenuLinkClass);

		link.insertAdjacentElement(
			"afterend",
			submenuLink
		);

		submenuLink.addEventListener("click", this.linkOnClick.bind(this));
	}

	/**
	 * 
	 * @param {*} e 
	 */
	linkOnClick(e) {

		const link = e.target;
		const submenu = link.parentElement.querySelector(
			`.${this.multilevelSettings.submenuClass}`
		);
		let submenuLink = false;
		let breadcrumbText = '';

		if (link.classList.contains(this.multilevelSettings.subMenuLinkClass)) {
			// Submenu item has no link but we need to set the breadcrumb text
			submenuLink = link.previousSibling;
		}

		if (submenu !== null) {

			if (!submenuLink) {
				breadcrumbText = link.textContent;

				// Go to the clicked link url instead of navigating the menu
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

	navigationOnClick() {
		this.navigation.addEventListener("click", () => {
			if (!this.multilevelSettings.activeSubmenu) return;

			this.multilevelSettings.activeSubmenu.classList.remove(this.multilevelSettings.submenuActiveClass);
			this.multilevelSettings.activeSubmenu = this.multilevelSettings.activeSubmenu.parentElement.parentElement;

			if (!this.multilevelSettings.activeSubmenu.classList.contains("drawerr-submenu--active")) {
				this.hideShowNavigationIcon(this.multilevelSettings.hiddenClass);
				this.setNavigationText(this.options.navigationText);
			} else {
				this.setNavigationText(
					this.multilevelSettings.activeSubmenu.parentElement.querySelector("a").textContent
				);
			}
		});
	}

  /**
   * 
   * @param {*} text 
   */
	setNavigationText(text) {
		this.navigationText.textContent = text;
	}

  /**
   * 
   * @param {*} action 
   */
	hideShowNavigationIcon(action) {
		action == "show" ?
			this.navigationIcon.classList.remove(this.multilevelSettings.hiddenClass) :
			this.navigationIcon.classList.add(this.multilevelSettings.hiddenClass);
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = DrawerrMultilevel;



/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__drawerr__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__drawerrMultilevel__ = __webpack_require__(2);
/**
 * We need this main function to correctly exports drawerr
 * see http://siawyoung.com/coding/javascript/exporting-es6-modules-as-single-scripts-with-webpack.html
 */



window.drawerr = __WEBPACK_IMPORTED_MODULE_0__drawerr__["a" /* default */];
window.drawerrMultilevel = __WEBPACK_IMPORTED_MODULE_1__drawerrMultilevel__["a" /* default */];


/***/ })
/******/ ]);