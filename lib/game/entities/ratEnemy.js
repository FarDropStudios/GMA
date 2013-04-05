ig.module(
	'game.entities.ratEnemy'
)
.requires(
	'game.entities.enemy'
)
.defines(function(){

EntityRatEnemy = EntityEnemy.extend({
    size: {x: 60, y: 32},
    collides: ig.Entity.COLLIDES.WEAK,
    
    
    animSheet: new ig.AnimationSheet ('media/images/houseOccupants/rat.png', 64, 64),
    
    bounciness: 1,
    
    init : function( x, y, settings ) {
        this.parent(x, y, settings );
	this.maxVel = {x: 400, y: 400};
	this.offset.x = 4;
	this.offset.y = 32;
	this.vel.x = 0;
	this.vel.y = 0;
	this.timer = new ig.Timer();
        this.addAnim( 'idle' , 1, [0]); //should just hold first and only frame
    
    },
    
    update: function() {
	if (this.timer.delta() > 3) {
	    this.timer.reset();
	    this.vel.x = Math.random() * 400;
	    this.vel.y = Math.random() * 400;
	}
	this.parent();
    }
});

});