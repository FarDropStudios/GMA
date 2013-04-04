ig.module(
	'game.entities.pileOfMeatEnemy'
)
.requires(
	'game.entities.enemy'
)
.defines(function(){

EntityPileOfMeatEnemy = ig.Entity.extend({
    size: {x: 64, y: 64},
    collides: ig.Entity.COLLIDES.ACTIVE,
    
    animSheet: new ig.AnimationSheet ('media/images/houseOccupants/deadCatSheet.png'),
    
    init : function( x, y, settings ) {
        this.parent(x, y, settings );
    
        this.addAnim( 'idle' , 0.1, [0,1,1,2,3,3,4,4,5,6,6,7,7,8,9]);
    
    }
});

});