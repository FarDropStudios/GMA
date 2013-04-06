ig.module(
	'game.entities.greenBrick'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntityGreenBrick = ig.Entity.extend({
    size: {x: 64, y: 64},
    collides: ig.Entity.COLLIDES.NONE,
    time: new ig.Timer(0),
    
    animSheet: new ig.AnimationSheet ('media/images/MiscImages/greenBrick.png', 64,64),
    
    init : function( x, y, settings ) {
        this.parent(x, y, settings );
        this.addAnim( 'idle' , 1, [0]);
    },
    update : function() {}
});

});