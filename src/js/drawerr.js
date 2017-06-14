var Drawerr = function(args) {
	this.drawerr = document.querySelector(args.drawerr);
	this.toggleBtn = document.querySelector(args.toggleBtn);
	this.navbar = document.querySelector(args.navbar);
	this.drawerOpenClass = 'drawerr--open';
	this.toggleBtnActiveClass = 'drawerr-btn--active';
};

Drawerr.prototype = function() {
	var init = function() {
		this.drawerr.classList.add('drawerr');
		this.toggleBtn.classList.add('drawerr-btn');
		events( this );
	},

	events = function( self ) {
		self.toggleBtn.addEventListener( 'click', function(e){
			toggleDrawer(self);
		});

		document.addEventListener( 'click', function(e) {
			bodyClick(e,self);
		});
	},

	toggleDrawer = function(self) {
		addOrRemoveClass( self.drawerr, self.drawerOpenClass );
		addOrRemoveClass( self.toggleBtn, self.toggleBtnActiveClass );
	},

	addOrRemoveClass = function(el, addClass) {
		if( el.classList.contains(addClass)) {
			return el.classList.remove(addClass);
		}

		el.classList.add(addClass);
	}

	bodyClick = function(e,self) {
		if( self.toggleBtn.contains(e.target )) return;

		if( !self.drawerr.contains(e.target) && document.querySelector('.drawerr').classList.contains(self.drawerOpenClass)) {
			toggleDrawer(self);

		}
	}

	return {
		init:init
	}

}();

