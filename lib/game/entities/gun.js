ig.module(
	'game.entities.gun'
)
.requires(
	'impact.entity',
	'game.entities.player'
)
.defines(function(){

EntityGun = ig.Entity.extend({
    size: {x: 64, y: 64},
    animSheet: new ig.AnimationSheet('media/images/MiscImages/gun.png', 64, 64),
    checkAgainst: ig.Entity.TYPE.BOTH,
    
    
    init : function( x, y, settings ) {
	this.addAnim( 'idle' , 1, [0]);
        this.parent(x, y, settings );
    },
    
    update: function(){}, //overrides update
    
    check: function(other){
	if (other instanceof EntityPlayer) {
            ig.game.playerHasGun = true;
	    this.kill();
	}
    } 
});

});