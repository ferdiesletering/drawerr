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

  // Multilevel class
  initMultilevel () {
    // Third multilevel
    let submenus = this.drawerr.querySelectorAll('ul li ul li ul');
    this.drawerr.querySelector('ul').setAttribute('drawerr-multilevel', 'base');
    
    // Slice submenu from actual menu
    submenus.forEach((menu,i) => {
      let menuItemHasChildren = menu.parentElement.querySelector('a');
      
      // Add data attribute to retrieve the menu when its called
      menu.setAttribute('drawerr-multilevel', i);
      menuItemHasChildren.setAttribute('has-drawerr-multilevel', i);

      // Move submenu out of the box
      //menu.appendChild(this.drawerr);
      this.drawerr.appendChild(menu);
      menu.style.display = 'none';
      
      menuItemHasChildren.addEventListener('click', (e) => {
        e.preventDefault();
        let submenus = document.querySelectorAll('[drawerr-multilevel]')
        let multilevelID = e.target.getAttribute('has-drawerr-multilevel');

        for(menu in submenus) {
          if(submenus.hasOwnProperty(menu)) {
            submenus[menu].style.display = 'none';
          }
        }

        document.querySelector(`[drawerr-multilevel='${multilevelID}']`).style = 'block';
        console.log(x);
      });

      document.querySelector('.drawerr_btn--back').addEventListener((e) => {
        let multilevelID = e.target.getAttribute('has-drawerr-multilevel');

      });
    });
  }

  // Create () to hide and show the correct menu and which to show
}

export default Drawerr