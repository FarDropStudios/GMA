ig.module(
	'game.entities.bullet'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntityBullet = ig.Entity.extend({
	_wmDrawBox: true,
	_wmBoxColor: 'rgba(255, 100, 0, 0.7)',
	
        size: {x:12, y:12},
        collides: ig.Entity.COLLIDES.LITE,
	type: ig.Entity.TYPE.A,
	maxVel: {x:500, y:500},
	health:1,
	animSheet: new ig.AnimationSheet('media/images/MiscImages/bullet.png', 12, 12),
	
        
	init: function( x, y, settings) {
	    this.addAnim('shoot', 1, [0]);
	    if (settings.facing === 'up') {
		this.vel.y = -500;
	    } else if (settings.facing === 'down') {
		this.vel.y = 500;
	    } else if (settings.facing === 'right') {
		this.vel.x = 500;
	    } else {
		this.vel.x = -500;
	    }
            this.parent( x, y, settings );
	},
	
	update: function() {
		this.parent();
	},
	
	check: function(other) {
		this.kill();
	}
});

});