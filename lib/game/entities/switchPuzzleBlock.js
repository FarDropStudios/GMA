ig.module(
	'game.entities.switchPuzzleBlock'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntitySwitchPuzzleBlock = ig.Entity.extend({
    size: {x: 64, y: 64},
    collides: ig.Entity.COLLIDES.ACTIVE,
    
    animSheet: new ig.AnimationSheet ('media/images/MiscImages/purchaseBlock.png', 64,64),
    
    init : function( x, y, settings ) {
        this.parent(x, y, settings );
        this.addAnim( 'idle' , 1, [0]);
    
    },
    update : function(){},
    
    moveTo: function(){
	this.pos.x = 512;	
    },
    moveBack: function(){
	this.pos.x = 576;
    }
});

});