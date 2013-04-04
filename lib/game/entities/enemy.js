ig.module(
	'game.entities.enemy'
)
.requires(
	'impact.entity',
	'game.entities.player'
)
.defines(function(){

EntityEnemy = ig.Entity.extend({
    
    init : function( x, y, settings ) {
        this.parent(x, y, settings );
    
    
    }

});

});