class Drawerr {
  constructor() {
    this.bodyNoScrollClass = "drawerr-no-scroll";
    this.drawerOpenClass = "drawerr--open";
    this.toggleBtnActiveClass = "drawerr-btn--active";
    this.slideFromClass = "drawerr-slide-from-right";

    this.options = {
      btnText: "MENU",
      drawerr: "#drawerr",
      navbar: "header",
      toggleBtn: ".toggleDrawerr",
      slideFrom: "left"
    };

    this.openEvent = new Event("drawerr-open");
    this.closeEvent = new Event("drawerr-close");
  }

  init(args = {}) {
    const options = Object.assign(this.options, args);

    this.drawerrSelector = options.drawerr;
    this.toggleBtn = options.toggleBtn;
    this.navbar = options.navbar;
    this.slideFrom = options.slideFrom;
    this.btnText = options.btnText;
    this.navigationContainer = options.navigationContainer;

    // Dom elements
    this.body = document.querySelector("body");
    this.drawerr = document.querySelector(this.drawerrSelector);
    this.toggleBtn = document.querySelector(this.toggleBtn);
    this.navbar = document.querySelector(this.navbar);

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
    this.drawerr.style.top = this.navbar.offsetHeight + "px";
  }

  setSlideFromDirection() {
    if (this.slideFrom === "right")
      this.drawerr.classList.add(this.slideFromClass);
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
    this.addOrRemoveClass(this.body, this.bodyNoScrollClass);
    this.addOrRemoveClass(this.drawerr, this.drawerOpenClass);
    this.addOrRemoveClass(this.toggleBtn, this.toggleBtnActiveClass);
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
        .querySelector(this.drawerrSelector)
        .classList.contains(this.drawerOpenClass)
    ) {
      this.toggleDrawer();
    }
  }

  dispatchEvents() {
    if (this.drawerr.classList.contains(this.drawerOpenClass)) {
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
    if (this.btnText.length === 0) return;

    this.toggleBtn.classList.add("drawerr-btn--has-menu-text");
    this.toggleBtn.insertAdjacentHTML(
      "beforeend",
      `<span class="drawerr-btn__menu-text">${this.btnText}</span>`
    );
  }
}

class DrawerrMultilevel extends Drawerr {
  constructor() {
    super();

    this.activeSubmenu = false;
    this.submenus = false;
    this.navigationTextClass = "drawerr-navigation";
    this.hasSubmenuClass = "drawerr-item-has-submenu";
    this.submenuClass = "drawerr-submenu";

    this.options.navigationContainer = ".drawerr-navigation-container";
  }

  init(args = {}) {
    super.init(args);

    this.drawerr.classList.add('drawerr-multilevel');

    this.insertNavigation();
    
    // Submenu's
    this.submenus = this.drawerr.querySelectorAll("ul li ul");
    this.addClassToSubmenus();

    // Setup navigation
    this.navigation = document.querySelector(`.${this.navigationTextClass}`);

    this.breadcrumbText = this.navigation.querySelector(
      `.${this.navigationTextClass}__text`
    );
    this.arrowLeft = document.querySelector(
      `.${this.navigationTextClass}__icon`
    );

    // Events
    this.linkOnClick();
    this.navigationOnClick();
  }

  insertNavigation() {
    this.navigationContainer = document.querySelector(this.navigationContainer);

    this.navigationContainer.insertAdjacentHTML(
      "afterbegin",
      ` <a class="${this.navigationTextClass}" href="#"><span class="${
        this.navigationTextClass
      }__icon hidden"></span><span class="${
        this.navigationTextClass
      }__text">Menu</span></a>`
    );
  }

  addClassToSubmenus() {
    this.submenus.forEach((menu, i) => {
      menu.classList.add(this.submenuClass);
    });
  }

  linkOnClick() {
    const links = this.drawerr.querySelectorAll("ul a");

    if (links.length > 0) {
      links.forEach(link => {
        parent = link.parentElement;

        if(parent.children.item(parent.children.length - 1).classList.contains('drawerr-submenu')) {
          link.classList.add(this.hasSubmenuClass);
        }

        link.addEventListener("click", e => {
          e.preventDefault();
          const link = e.target;
          const submenu = link.parentElement.querySelector(
            `.${this.submenuClass}`
          );
          const ul = this.drawerr.querySelector("ul");

          if (submenu !== null) {
            submenu.classList.add("drawerr-submenu--active");
            this.setNavigationText(link.textContent);
            this.activeSubmenu = submenu;
            this.hideShowNavigationIcon("show");

            e.preventDefault();
          }
        });
      });
    }
  }

  navigationOnClick() {
    this.navigation.addEventListener("click", () => {
      if (!this.activeSubmenu) {
        return;
      }

      this.activeSubmenu.classList.remove("drawerr-submenu--active");
      this.activeSubmenu = this.activeSubmenu.parentElement.parentElement;

      if (!this.activeSubmenu.classList.contains("drawerr-submenu--active")) {
        this.hideShowNavigationIcon("hidden");
        this.setNavigationText("Menu");
      } else {
        this.setNavigationText(
          this.activeSubmenu.parentElement.querySelector("a").textContent
        );
      }
    });
  }

  setNavigationText(text) {
    this.breadcrumbText.textContent = text;
  }

  hideShowNavigationIcon(action) {
    action == "show"
      ? this.arrowLeft.classList.remove("hidden")
      : this.arrowLeft.classList.add("hidden");
  }
}

export default {
  Drawerr,
  DrawerrMultilevel
};
