var Drawerr = function(drawer, toggleBtn) {
	this.drawer = document.querySelector(drawer);
	this.toggleBtn = document.querySelector(toggleBtn);
	this.openClass = 'drawerr--open';
};

Drawerr.prototype = function() {
	var init = function() {
		this.drawer.classList.add('drawerr');
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
		if( self.drawer.classList.contains(self.openClass)) {
			return self.drawer.classList.remove(self.openClass);
		} 
		
		self.drawer.classList.add(self.openClass);
	},

	bodyClick = function(e,self) {
		if( self.toggleBtn.contains( e.target ) ) return;

		if( !self.drawer.contains(e.target) && document.querySelector('.drawerr').classList.contains( self.openClass ) ) {
			toggleClass(self);
		}
	};

	return {
		init:init,
		toggleClass: toggleClass
	}

}();

