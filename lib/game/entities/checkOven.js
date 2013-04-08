ig.module(
	'game.entities.checkOven'
)
.requires(
	'impact.entity',
	'game.entities.cookedMeat',
	'game.entities.pileOfMeatEnemy'
)
.defines(function(){

EntityCheckOven = ig.Entity.extend({
    size: {x: 64, y: 64},
    _wmDrawBox: true,
    _wmDrawColor: 'rbga(100,50,100,0.5)',
    
    checkAgainst: ig.Entity.TYPE.BOTH,
    
    
    init: function( x, y, settings ) {
        this.parent(x, y, settings );
    },
    
    update: function(){}, 
    
    check: function(other){
	if (other instanceof EntityPileOfMeatEnemy) {
	    other.kill();
	    ig.game.spawnEntity(EntityCookedMeat, this.pos.x + 50, this.pos.y + 100);
	} else if (other instanceof EntityCatEnemy) {
	    other.kill();
	    ig.game.spawnEntity(EntityCookedMeat, this.pos.x + 50, this.pos.y + 100);
	}
    } 
});

});