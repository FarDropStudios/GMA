ig.module(
	'game.entities.player'
)
.requires(
	'game.entities.projectile',
	'game.entities.push',
	'impact.entity'
)
.defines(function(){

EntityPlayer = ig.Entity.extend({
	size: {x: 50, y: 59},
	facing: 'left',
	collides: ig.Entity.COLLIDES.PASSIVE,
	type: ig.Entity.TYPE.A,
	gmaFont: new ig.Font('media/gmaFont.png'),
	
	animSheet: new ig.AnimationSheet ('media/images/houseOccupants/thomas.png', 64, 64),
	
	init: function( x, y, settings ) {
		this.parent(x, y, settings );
		this.offset.x = 7.5;
		this.offset.y = 4;
		this.addAnim( 'idle' , 1, [0]); //should just hold first and only frame
	},
	
	giveGun: function() {
		ig.game.playerHasGun = true;	
	},
	
	update: function() {
		//Music
		if (ig.game.currentLevel === LevelLivingRoom) {
			ig.music.pause();
			ig.game.television.play();
		} else if(ig.game.currentLevel === LevelKitchen) {
			ig.game.television.stop();
			ig.music.play();
		}
		if (ig.input.state('restart')) {
			ig.game.loadLevel(ig.game.currentLevel);
		}
		if ( ig.input.state('up')) {
			this.vel.y = -100;
		} else if ( ig.input.state('down')) {
			this.vel.y = 100;
		} else if ( ig.input.state('left')) {
			this.vel.x = -100;
		} else if ( ig.input.state('right')) {
			this.vel.x = 100;
		} else {
			this.vel.x = 0;
			this.vel.y = 0;
		}
		
		//Shoot
		if (ig.input.pressed('shoot left')) {
			ig.game.spawnEntity(EntityProjectile, this.pos.x - 40, this.pos.y, {facing:'left'});
		} else if (ig.input.pressed('shoot right')) {
			ig.game.spawnEntity(EntityProjectile, this.pos.x + 40, this.pos.y, {facing:'right'});
		} else if (ig.input.pressed('shoot up')) {
			ig.game.spawnEntity(EntityProjectile, this.pos.x, this.pos.y - 40, {facing:'up'});
		} else if (ig.input.pressed('shoot down')) {
			ig.game.spawnEntity(EntityProjectile, this.pos.x, this.pos.y + 40, {facing:'down'});
		}
		this.parent();
		
	}
});

});