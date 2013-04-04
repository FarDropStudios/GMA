ig.module(
	'game.entities.coin'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntityCoin = ig.Entity.extend({
    size: {x: 64, y: 64},
    collides: ig.Entity.COLLIDES.FIXED,
    
    animSheet: new ig.AnimationSheet ('media/images/MiscImages/penny.png'),
    
    init : function( x, y, settings ) {
        this.parent(x, y, settings );
    
        this.addAnim( 'idle' , 0.1, [0]);
    
    }
});

});