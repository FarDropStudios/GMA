ig.module(
	'game.entities.enemy'
)
.requires(
	'impact.entity',
	'game.entities.player'
)
.defines(function(){

EntityEnemy = ig.Entity.extend({
    collides: ig.Entity.COLLIDES.PASSIVE,
    type: ig.Entity.TYPE.B,
    checkAgainst: ig.Entity.TYPE.BOTH,
    health: 10,
    
    init : function( x, y, settings ) {
        this.parent(x, y, settings );
    
    
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