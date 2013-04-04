ig.module(
	'game.entities.player'
)
.requires(
	'game.entities.projectile',
	'impact.entity'
)
.defines(function(){

EntityPlayer = ig.Entity.extend({
	size: {x: 60, y: 59},
	facing: 'left',
	collides: ig.Entity.COLLIDES.PASSIVE,
	type: ig.Entity.TYPE.A,
	
	animSheet: new ig.AnimationSheet ('media/images/houseOccupants/thomas.png', 64, 64),
	
	init : function( x, y, settings ) {
		this.offset.x = 4;
		this.offset.y = 4;
		this.parent(x, y, settings );
	    
		this.addAnim( 'idle' , 1, [0]); //should just hold first and only frame
	},
	
	update : function() {
		if ( ig.input.state('up')) {
			this.vel.y = -100;
			this.facing = 'up'; 
		} else if ( ig.input.state('down')) {
			this.vel.y = 100;
			this.facing = 'down'; 
		} else if ( ig.input.state('left')) {
			this.vel.x = -100;
			this.facing = 'left'; 
		} else if ( ig.input.state('right')) {
			this.vel.x = 100;
			this.facing = 'right'; 
		} else {
			this.vel.x = 0;
			this.vel.y = 0;
		}
		
		//Shoot
		if (ig.input.pressed('shoot')) {
			ig.game.spawnEntity(EntityProjectile, this.pos.x, this.pos.y, {facing:this.facing});
		}
		
		this.parent();
	}

});

});