import closest from 'element-closest';

class Drawerr {
  constructor() {
    // Domclasses
    this.bodyNoScrollClass = 'drawerr-no-scroll'
    this.drawerOpenClass = 'drawerr--open'
    this.toggleBtnActiveClass = 'drawerr-btn--active'
    this.slideFromClass = 'drawerr-slide-from-right'

    this.options = {
      btnText: 'MENU',
      drawerr: '#drawerr',
      navbar: 'header',
      toggleBtn: '.toggleDrawerr',
      slideFrom: 'left'
    }


    this.openEvent = new Event('drawerr-open')
    this.closeEvent = new Event('drawerr-close')

    this.activeSubmenu = false;

  }

  init(args = {}) {
    const options = Object.assign(this.options, args)

    this.drawerrSelector = options.drawerr
    this.toggleBtn = options.toggleBtn
    this.navbar = options.navbar
    this.slideFrom = options.slideFrom
    this.btnText = options.btnText

    // Dom elements
    this.body = document.querySelector('body')
    this.drawerr = document.querySelector(this.drawerrSelector)
    this.toggleBtn = document.querySelector(this.toggleBtn)
    this.navbar = document.querySelector(this.navbar)
    this.arrowLeft = document.querySelector('.arrow-left');
    this.breadcrumb = document.querySelector('.drawerr-breadcrumb');
    this.breadcrumbText = this.breadcrumb.querySelector('.drawerr-breadcrumb__text');

    this.beforeVisible()

    // Drawerr now visible
    this.drawerr.classList.remove('drawerr--init')
    this.drawerr.classList.add('drawerr')
    this.toggleBtn.classList.add('drawerr-btn')
    this.events()
    this.initMultilevel();
  }

  beforeVisible() {
    this.setSlideFromDirection()
    this.drawerrOffsetTop()
    this.appendBtnText()
  }

  drawerrOffsetTop() {
    this.drawerr.style.top = this.navbar.offsetHeight + 'px'
  }

  setSlideFromDirection() {
    if (this.slideFrom === 'right') this.drawerr.classList.add(this.slideFromClass)
  }

  events() {
    this.toggleBtn.addEventListener('click', () => {
      this.toggleDrawer()
    })

    document.addEventListener('click', (e) => {
      this.bodyClick(e)
    })

    window.onresize = (e) => {
      this.onResize()
    }
  }

  toggleDrawer() {
    this.addOrRemoveClass(this.body, this.bodyNoScrollClass)
    this.addOrRemoveClass(this.drawerr, this.drawerOpenClass)
    this.addOrRemoveClass(this.toggleBtn, this.toggleBtnActiveClass)
    this.dispatchEvents()
  }

  onResize() {
    this.drawerrOffsetTop()
  }

  bodyClick(e) {
    if (this.toggleBtn.contains(e.target)) return

    if (!this.drawerr.contains(e.target) && document.querySelector(this.drawerrSelector).classList.contains(this.drawerOpenClass)) {
      this.toggleDrawer()
    }
  }

  dispatchEvents() {
    if (this.drawerr.classList.contains(this.drawerOpenClass)) {
      document.dispatchEvent(this.openEvent)
    } else {
      document.dispatchEvent(this.closeEvent)
    }
  }

  addOrRemoveClass(el, addClass) {
    if (el.classList.contains(addClass)) {
      return el.classList.remove(addClass)
    }
    el.classList.add(addClass)
  }

  appendBtnText() {
    if (this.btnText.length === 0) return

    this.toggleBtn.classList.add('drawerr-btn--has-menu-text')
    this.toggleBtn.insertAdjacentHTML('beforeend', `<span class="drawerr-btn__menu-text">${this.btnText}</span>`)
  }

  initMultilevel() {
    this.initBreadcrumb();

    const submenus = this.drawerr.querySelectorAll('ul li ul li ul');

    submenus.forEach((menu, i) => {
      menu.classList.add('drawerr-submenu');
    });

    const links = this.drawerr.querySelectorAll('ul a');

    if (links.length > 0) {
      links.forEach(link => {
        link.addEventListener('click', (e) => {
          const submenu = e.target.parentElement.querySelector('.drawerr-submenu');
          const ul = this.drawerr.querySelector('ul');

          if (submenu !== null) {
            //ul.classList.add('drawerr-slideIn');
            //submenus.classList.remove('.drawerr-submenu--active');
            console.log('add active class');
            submenu.classList.add('drawerr-submenu--active');
            this.setBreadcrumbText(e.target.textContent);
            this.activeSubmenu = submenu;
            this.toggleArrow('show');

            e.preventDefault();
          }
        });
      });
    }
  }

  initBreadcrumb() {

    this.breadcrumb.addEventListener('click', (e) => {
      if (!this.activeSubmenu) {
        return;
      }

      this.activeSubmenu.classList.remove('drawerr-submenu--active');
      this.activeSubmenu = this.activeSubmenu.parentElement.parentElement;
     
      if(!this.activeSubmenu.classList.contains('drawerr-submenu--active')) {
        console.log('hide arrow');
        this.toggleArrow('hidden');
        this.setBreadcrumbText('Menu');
      } else {
        this.setBreadcrumbText(this.activeSubmenu.parentElement.querySelector('a').textContent);
      }

    });
  }

  toggleArrow(action) {
    action == 'show' ? this.arrowLeft.classList.remove('hidden') : this.arrowLeft.classList.add('hidden');
  }

  setBreadcrumbText(text) {
    this.breadcrumbText.textContent = text;
  }
  // TODO
  // The back button should look for parent li and remove it own active class so it slides back
}

export default Drawerr