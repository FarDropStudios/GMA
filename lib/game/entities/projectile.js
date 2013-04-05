ig.module(
	'game.entities.projectile'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntityProjectile = ig.Entity.extend({
	_wmDrawBox: true,
	_wmBoxColor: 'rgba(255, 100, 0, 0.7)',
	
        size: {x:12, y:12},
        animSheet: new ig.AnimationSheet('media/images/MiscImages/bullet.png', 12, 12),
        collides: ig.Entity.COLLIDES.PASSIVE,
	type: ig.Entity.TYPE.B,
	
        
	init: function( x, y, settings) {
            this.maxVel.x = 400;
            this.maxVel.y = 400;
            this.offset.x = 5;
            this.offset.y = 5;
            this.addAnim('fire', 1, [0]);
            if (settings.facing === 'down') {
		this.angle = 90;
                this.vel.y = 150;
            } else if (settings.facing === 'up') {
                this.vel.y = -150; 
            } else if (settings.facing === 'right') {
                this.vel.x = 150;
            } else {
                this.vel.x = -150;
            }
            this.killTimer = new ig.Timer();
            this.parent( x, y, settings );
	},
	
	update: function() {
            if (this.killTimer.delta() > 0.5) {
                this.killTimer.reset();
                this.kill();
            }
            this.parent();
	},
});

});