class Drawerr {
	constructor() {
		this.drawerOpenClass = 'drawerr--open';
		this.toggleBtnActiveClass = 'drawerr-btn--active';
	}

	init(args) {
		this.drawerr = document.querySelector(args.drawerr);
		this.toggleBtn = document.querySelector(args.toggleBtn);
		this.navbar = document.querySelector(args.navbar);

		this.drawerr.classList.remove('drawerr--init');
		this.drawerr.classList.add('drawerr');
		this.toggleBtn.classList.add('drawerr-btn');
		this.drawerrOffsetTop();
		this.events();
	}

	drawerrOffsetTop() {
		this.drawerr.style.top = this.navbar.offsetHeight + 'px';
	}

	events() {
		this.toggleBtn.addEventListener( 'click', () => {
			this.toggleDrawer();
		});

		document.addEventListener( 'click', (e) => {
			this.bodyClick(e);
		});
	}

	toggleDrawer() {
		this.addOrRemoveClass( this.drawerr, this.drawerOpenClass );
		this.addOrRemoveClass( this.toggleBtn, this.toggleBtnActiveClass );
	}

	addOrRemoveClass(el, addClass) {
		if( el.classList.contains(addClass)) {
			return el.classList.remove(addClass);
		}

		el.classList.add(addClass);
	}

	bodyClick(e) {
		if( this.toggleBtn.contains(e.target )) return;

		if( !this.drawerr.contains(e.target) && document.querySelector('.drawerr').classList.contains(this.drawerOpenClass)) {
			this.toggleDrawer();

		}
	}
}

export default Drawerr;