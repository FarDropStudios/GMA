ig.module(
	'game.entities.singleGUIBorder'
)
.requires(
	'game.entities.player'
)
.defines(function(){

EntitySingleGUIBorder = ig.Entity.extend({
    size: {x: 68, y: 68},
    
    animSheet: new ig.AnimationSheet ('media/images/MiscImages/border.png', 68, 68),
    
    init : function( x, y, settings ) {
        this.parent(x, y, settings );
        this.addAnim( 'idle' , 1, [0]); //should just hold first and only frame
    },
    
    update : function() { }
});

});