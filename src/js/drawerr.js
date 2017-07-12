class Drawerr {
    constructor() {
    	// Options
	    this.drawerr = '#drawerr';
	    this.toggleBtn = '.toggleDrawerr';
    	this.slideFrom = 'left';
    	this.navbar = 'header';

    	// Domclasses
	    this.bodyNoScrollClass = 'drawerr-no-scroll';
        this.drawerOpenClass = 'drawerr--open';
        this.toggleBtnActiveClass = 'drawerr-btn--active';
        this.slideFromClass = 'drawerr-slide-from-right';

        // Events
        this.openEvent = new Event('drawerr-open');
        this.closeEvent = new Event('drawerr-close');
    }

    init(args={}) {
        this.drawerr = args.drawerr || this.drawerr;
        this.toggleBtn = args.toggleBtn || this.toggleBtn;
        this.navbar = args.navbar || this.navbar;
		this.slideFrom = args.slideFrom || this.slideFrom;

		// Dom elements
	    this.body = document.querySelector('body');
		this.drawerr = document.querySelector(this.drawerr);
		this.toggleBtn = document.querySelector(this.toggleBtn);
		this.navbar = document.querySelector(this.navbar);

		this.beforeVisible();

	    // Drawerr now visible
        this.drawerr.classList.remove('drawerr--init');
        this.drawerr.classList.add('drawerr');
        this.toggleBtn.classList.add('drawerr-btn');
        this.events();
    }

    beforeVisible() {
	    this.setSlideFromDirection();
	    this.drawerrOffsetTop();
    }

    drawerrOffsetTop() {
        this.drawerr.style.top = this.navbar.offsetHeight + 'px';
    }

    setSlideFromDirection() {
		if( this.slideFrom === 'right' ) this.drawerr.classList.add(this.slideFromClass);
    }

    events() {
        this.toggleBtn.addEventListener('click', () => {
            this.toggleDrawer();
        });

        document.addEventListener('click', (e) => {
            this.bodyClick(e);
        });

        window.onresize = (e) => {
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

        if (!this.drawerr.contains(e.target) && document.querySelector('.drawerr').classList.contains(this.drawerOpenClass)) {
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
}

export default Drawerr;