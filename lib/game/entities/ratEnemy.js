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
	this.offset.x = 4;
	this.offset.y = 32;
	this.maxVel.x = 400,
	this.maxVel.y = 400,
        this.addAnim( 'idle' , 1, [0]); //should just hold first and only frame
    
    },
    
    update : function() {
	
	
	this.vel.x = -200,
	this.vel.y = -200,
	this.parent();
    }
});

});