import Drawerr from './drawerr';

const multilevelSettings = {
  activeSubmenu: false,
  submenus: false,
  navigationTextClass: "drawerr-navigation",
  hasSubmenuClass: "drawerr-item-has-submenu",
  submenuClass: "drawerr-submenu",
  submenuActiveClass: "drawerr-submenu--active",
  navigationContainerClass: "drawerr-navigation-container",
  hiddenClass: 'hidden'
};

export default class DrawerrMultilevel extends Drawerr {
  constructor(args) {
    super(args);
  
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
      }__icon ${this.multilevelSettings.hidden}"></span><span class="${
      this.multilevelSettings.navigationTextClass
      }__text">Menu</span></a>`
    );
  }

  addClassToSubmenus() {
    Array.prototype.forEach.call(this.multilevelSettings.submenus, menu => {
      menu.classList.add(this.multilevelSettings.submenuClass);
    });
  }

  bindLinks() {
    const links = this.drawerr.querySelectorAll("ul a");

    if (links.length > 0) {
      Array.prototype.forEach.call(links, link => {
        parent = link.parentElement;

        if (parent.children.item(parent.children.length - 1).classList.contains(this.multilevelSettings.submenuClass)) {
          link.classList.add(this.multilevelSettings.hasSubmenuClass);
        }

        link.addEventListener("click", this.linkOnClick.bind(this));
      });
    }
  }

  linkOnClick(e) {

    const link = e.target;
    const submenu = link.parentElement.querySelector(
      `.${this.multilevelSettings.submenuClass}`
    );
    const ul = this.drawerr.querySelector("ul");

    if (submenu !== null) {
      submenu.classList.add(this.multilevelSettings.submenuActiveClass);
      this.setNavigationText(link.textContent);
      this.multilevelSettings.activeSubmenu = submenu;
      this.hideShowNavigationIcon("show");
      e.preventDefault();
    }
  }

  navigationOnClick() {
    this.navigation.addEventListener("click", () => {
      if (!this.multilevelSettings.activeSubmenu) {
        return;
      }

      this.multilevelSettings.activeSubmenu.classList.remove(this.multilevelSettings.submenuActiveClass);
      this.multilevelSettings.activeSubmenu = this.multilevelSettings.activeSubmenu.parentElement.parentElement;

      if (!this.multilevelSettings.activeSubmenu.classList.contains("drawerr-submenu--active")) {
        this.hideShowNavigationIcon(this.multilevelSettings.hiddenClass);
        this.setNavigationText("Menu");
      } else {
        this.setNavigationText(
          this.multilevelSettings.activeSubmenu.parentElement.querySelector("a").textContent
        );
      }
    });
  }

  setNavigationText(text) {
    this.navigationText.textContent = text;
  }

  hideShowNavigationIcon(action) {
    action == "show"
      ? this.navigationIcon.classList.remove(this.multilevelSettings.hiddenClass)
      : this.navigationIcon.classList.add(this.multilevelSettings.hiddenClass);
  }
}