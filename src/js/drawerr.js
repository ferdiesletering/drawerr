var Drawerr = function(args) {
	this.drawerr = document.querySelector(args.drawerr);
	this.toggleBtn = document.querySelector(args.toggleBtn);
	this.navbar = document.querySelector(args.navbar);
	this.navbarHeight = this.navbar.offsetHeight;
	this.openClass = 'drawer--open';
};

Drawerr.prototype = function() {
	var init = function() {
		this.drawerr.classList.add('drawerr');
		this.drawerr.style.top = this.navbarHeight + 'px';
		events( this );
	},

	events = function( self ) {
		self.toggleBtn.addEventListener( 'click', function(e){
			toggleClass(self);
		});

		document.addEventListener( 'click', function(e) {
			bodyClick(e,self);
		});
	},

	toggleClass = function(self) {
		if( self.drawerr.classList.contains(self.openClass)) {
			return self.drawerr.classList.remove(self.openClass);
		} 
		
		self.drawerr.classList.add(self.openClass);
	},

	bodyClick = function(e,self) {
		if( self.toggleBtn.contains(e.target )) return;

		if( !self.drawerr.contains(e.target) && document.querySelector('.drawerr').classList.contains(self.openClass)) {
			toggleClass(self);
		}
	};

	return {
		init:init,
		toggleClass: toggleClass
	}

}();

