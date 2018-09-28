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
  slideFrom: "left",
  preventBodyOnClick: false
}

export default class Drawerr {
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
    if ( this.toggleBtn.contains(e.target)) return;

    if ( this.options.preventBodyOnClick) return;

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