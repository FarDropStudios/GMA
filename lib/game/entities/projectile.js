ig.module(
	'game.entities.projectile'
)
.requires(
	'impact.entity',
	'game.entities.bullet'
)
.defines(function(){

EntityProjectile = ig.Entity.extend({
	_wmDrawBox: true,
	_wmBoxColor: 'rgba(255, 100, 0, 0.7)',
	
        size: {x:50, y:50},
        collides: ig.Entity.COLLIDES.NONE,
	type: ig.Entity.TYPE.B,
	
        
	init: function( x, y, settings) {
            this.offset.x = 5;
            this.offset.y = 5;
	    if (ig.game.playerHasGun) {
		ig.game.gunshot.play();
		this.animSheet = new ig.AnimationSheet('media/images/MiscImages/gun.png', 64, 64);
		this.addAnim('fire', 1, [0]);
		if (settings.facing === 'down') {
			this.anims.fire.angle = 1.57;
			ig.game.spawnEntity(EntityBullet, x + 20, y - 20, {facing:'down'});
		} else if (settings.facing === 'up') {
			this.anims.fire.angle = -1.57;
			ig.game.spawnEntity(EntityBullet, x + 20, y - 20, {facing:'up'});
		} else if (settings.facing === 'right') {
			ig.game.spawnEntity(EntityBullet, x + 20, y + 20, {facing:'right'});
		} else {
			ig.game.spawnEntity(EntityBullet, x + 20, y + 20, {facing:'left'});
			this.anims.fire.angle = 3.141;
			this.anims.fire.flip.y = true;
		}
	    } else {
		this.animSheet = new ig.AnimationSheet('media/images/MiscImages/broom.png', 64, 64);
		this.addAnim('fire', 1, [0]);
		if (settings.facing === 'down') {
			this.anims.fire.angle = 3.141;
		} else if (settings.facing === 'up') {
			//fine
		} else if (settings.facing === 'right') {
			this.anims.fire.angle = 1.57;
		} else {
			this.anims.fire.angle = -1.57;
		}
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