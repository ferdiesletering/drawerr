class Drawerr {
  constructor () {
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
   
  }

  init (args = {}) {
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

    this.beforeVisible()

    // Drawerr now visible
    this.drawerr.classList.remove('drawerr--init')
    this.drawerr.classList.add('drawerr')
    this.toggleBtn.classList.add('drawerr-btn')
    this.events()
    this.initMultilevel();
  }

  beforeVisible () {
    this.setSlideFromDirection()
    this.drawerrOffsetTop()
    this.appendBtnText()
  }

  drawerrOffsetTop () {
    this.drawerr.style.top = this.navbar.offsetHeight + 'px'
  }

  setSlideFromDirection () {
    if (this.slideFrom === 'right') this.drawerr.classList.add(this.slideFromClass)
  }

  events () {
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

  toggleDrawer () {
    this.addOrRemoveClass(this.body, this.bodyNoScrollClass)
    this.addOrRemoveClass(this.drawerr, this.drawerOpenClass)
    this.addOrRemoveClass(this.toggleBtn, this.toggleBtnActiveClass)
    this.dispatchEvents()
  }

  onResize () {
    this.drawerrOffsetTop()
  }

  bodyClick (e) {
    if (this.toggleBtn.contains(e.target)) return

    if (!this.drawerr.contains(e.target) && document.querySelector(this.drawerrSelector).classList.contains(this.drawerOpenClass)) {
      this.toggleDrawer()
    }
  }

  dispatchEvents () {
    if (this.drawerr.classList.contains(this.drawerOpenClass)) {
      document.dispatchEvent(this.openEvent)
    } else {
      document.dispatchEvent(this.closeEvent)
    }
  }

  addOrRemoveClass (el, addClass) {
    if (el.classList.contains(addClass)) {
      return el.classList.remove(addClass)
    }
    el.classList.add(addClass)
  }

  appendBtnText () {
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

    if(links.length > 0) {
      links.forEach(link => {
        link.addEventListener('click', (e) => {
          const submenu = e.target.parentElement.querySelector('.drawerr-submenu');
          const ul = this.drawerr.querySelector('ul');

          ul.classList.add('drawerr-slideIn');
          submenu.classList.add('drawerr-submenu--active');
        });
      });
    }
  }

  initBreadcrumb() {
    const breadcrumbs = document.querySelectorAll('.drawerr-breadcrumb');

    breadcrumbs.forEach(breadcrumb => {
      breadcrumb.addEventListener('click', (e) => {
         const depth = e.target.getAttribute('data-depth');
         
         if(depth == 0) {
          const ul = this.drawerr.querySelector('ul');
          ul.classList.remove('drawerr-slideIn');
          document.querySelector('.drawerr-submenu').classList.remove('drawerr-submenu--active');
         }
      });
    });
  }

  // TODO
  // Add breadcrumb function to add/remove crumbs
  // Style breadcrumbs
  // Better animation for submenu slideout 
  // Only enable multilevel when argument is true
  // Refactor js & scss code
}

export default Drawerr