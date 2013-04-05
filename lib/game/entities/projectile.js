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
	
        size: {x:50, y:50},
        animSheet: new ig.AnimationSheet('media/images/MiscImages/gun.png', 64, 64),
        collides: ig.Entity.COLLIDES.NONE,
	type: ig.Entity.TYPE.B,
	
        
	init: function( x, y, settings) {
            this.offset.x = 5;
            this.offset.y = 5;
            this.addAnim('fire', 1, [0]);
            if (settings.facing === 'down') {
		this.anims.fire.angle = 1.57;
		//this.anims.fire.angle = 3.141;
            } else if (settings.facing === 'up') {
		this.anims.fire.angle = -1.57;
            } else if (settings.facing === 'right') {
		//Fine as is
            } else {
		this.anims.fire.angle = 3.141;
		this.anims.fire.flip.y = true;
            }
            this.killTimer = new ig.Timer();
            this.parent( x, y, settings );
	},
	
	update: function() {
            if (this.killTimer.delta() > 0.2) {
                this.killTimer.reset();
                this.kill();
            }
            this.parent();
	},
});

});