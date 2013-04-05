ig.module(
	'game.entities.ratEnemy'
)
.requires(
	'game.entities.enemy',
	'game.entities.projectile',
	'game.entities.pileOfMeatEnemy'
)
.defines(function(){

EntityRatEnemy = EntityEnemy.extend({
    size: {x: 60, y: 32},
    collides: ig.Entity.COLLIDES.PASSIVE,
    type: ig.Entity.TYPE.B,
    checkAgainst: ig.Entity.TYPE.B,
    health: 5,

    animSheet: new ig.AnimationSheet ('media/images/houseOccupants/rat.png', 64, 64),
    bounciness: 1,
    
    init : function( x, y, settings ) {
        this.parent(x, y, settings );
	this.maxVel = {x: 400, y: 400};
	this.offset.x = 4;
	this.offset.y = 32;
	this.vel.x = 0;
	this.vel.y = 0;
	this.timer = new ig.Timer();
        this.addAnim( 'idle' , 1, [0]); //should just hold first and only frame
    },
    
    update: function() {
	if (this.timer.delta() > 3) {
	    this.timer.reset();
	    this.vel.x = Math.random() * 400;
	    this.vel.y = Math.random() * 400;
	}
	this.parent();
    },
    
    check: function(other) {
	if (other instanceof EntityProjectile) {
	    this.receiveDamage(1, other);
	    other.type = ig.Entity.TYPE.NONE;
	    other.collides = ig.Entity.COLLIDES.NEVER;
	    if (this.health === 0) {
		ig.game.spawnEntity(EntityPileOfMeatEnemy, this.pos.x, this.pos.y);
	    }
	}
    }
});

});