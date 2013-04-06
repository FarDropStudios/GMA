ig.module(
	'game.entities.face'
)
.requires(
	'game.entities.enemy'
)
.defines(function(){

EntityFace = EntityEnemy.extend({

    animSheet: new ig.AnimationSheet ('media/endsheet.png', 500, 500),
    
    init : function( x, y, settings ) {
        this.addAnim( 'idle' , .1, [0, 1, 2, 1, 0]); //should just hold first and only frame
	this.parent(x, y, settings);
    },
    
    update: function() {
	this.parent();
    }

});

});