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

  export default DrawerrMultilevel;