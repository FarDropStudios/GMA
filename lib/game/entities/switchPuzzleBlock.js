ig.module(
	'game.entities.switchPuzzleBlock'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntitySwitchPuzzleBlock = ig.Entity.extend({
    size: {x: 64, y: 64},
    collides: ig.Entity.COLLIDES.FIXED,
    time: new ig.Timer(0), 
    
    animSheet: new ig.AnimationSheet ('media/images/MiscImages/purchaseBlock.png', 64,64),
    
    init : function( x, y, settings ) {
        this.parent(x, y, settings );
        this.addAnim( 'idle' , 1, [0]);
	this.time.pause();
	this.time.set(0);
    },
    update : function(){
	if (this.time.delta() > 1) {
	    this.time.reset();
	    this.pos.x = 576;
	}
	this.parent();
    },
    
    moveTo: function(){
	this.time.unpause();
	this.pos.x = 512;	
    }
});

});