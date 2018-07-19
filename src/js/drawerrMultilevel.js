import Drawerr from './drawerr';

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

export default class DrawerrMultilevel extends Drawerr {
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
