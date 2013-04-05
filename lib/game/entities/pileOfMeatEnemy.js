ig.module(
	'game.entities.pileOfMeatEnemy'
)
.requires(
	'game.entities.enemy',
	'game.entities.projectile',
	'game.entities.player'
)
.defines(function(){

EntityPileOfMeatEnemy = ig.Entity.extend({
    size: {x: 64, y: 64},
    type: ig.Entity.TYPE.B,
    checkAgainst: ig.Entity.TYPE.A,
    collides: ig.Entity.COLLIDES.ACTIVE,
    
    animSheet: new ig.AnimationSheet('media/images/houseOccupants/deadCatSheet.png', 64, 64),
    
    init : function( x, y, settings ) {
	this.friction.x = 50;
	this.friction.y = 50;
        this.parent(x, y, settings );
        this.addAnim( 'idle' , 0.1, [1,1,2,3,3,4,4,5,6,6,7,7,8,9]);
    },
    
    update: function() {
	
	this.parent();
    },
    
    check: function(other) {
	if (other instanceof EntityProjectile) {
	    this.receiveDamage(1, other);
	    other.type = ig.Entity.TYPE.NONE;
	    other.collides = ig.Entity.COLLIDES.NEVER;
	}
    }
});

});