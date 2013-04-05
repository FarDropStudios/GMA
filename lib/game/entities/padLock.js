ig.module(
	'game.entities.padLock'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntityPadLock = ig.Entity.extend({
    size: {x: 64, y: 64},
    collides: ig.Entity.COLLIDES.FIXED,
    
    animSheet: new ig.AnimationSheet ('media/images/MiscImages/padLock.png',64,64),
    
    init : function( x, y, settings ) {
        this.parent(x, y, settings );
    
        this.addAnim( 'idle' , 1, [0]);
    
    }
});

});