ig.module(
	'game.entities.emailSeq'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntityEmailSeq = ig.Entity.extend({
	
        size: {x:64, y:64},
        animSheet: new ig.AnimationSheet('media/images/MiscImages/emailSeq.png', 64, 64),
        collides: ig.Entity.COLLIDES.NONE,
	
        
	init: function( x, y, settings) {
            
            this.addAnim( 'idle' , .1, [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0]);
            this.killTimer = new ig.Timer();
            this.parent( x, y, settings );
        },
        update: function() {
            if (this.killTimer.delta() > 1.5) {
                this.killTimer.reset();
                this.kill();
            }
            this.parent();
	}
});

});