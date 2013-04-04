ig.module(
	'game.entities.dogEnemy'
)
.requires(
	'game.entities.enemy',
	'game.entities.player'
)
.defines(function(){

EntityDogEnemy = EntityEnemy.extend({
    size: {x: 64, y: 64},
    collides: ig.Entity.COLLIDES.WEAK,
    
    animSheet: new ig.AnimationSheet ('media/images/houseOccupants/dog.png', 64, 64),
    
    init : function( x, y, settings ) {
        this.parent(x, y, settings );
    
        this.addAnim( 'idle' , 1, [0]); //should just hold first and only frame
    
    },
    
    update : function() {
	var player = ig.game.getEntitiesByType( EntityPlayer) [0];
	if (player.pos.y > this.pos.y ) {
	    this.vel.y = 50;
	
	}
	else if(player.pos.y < this.pos.y){
	    this.vel.y = -50;
	}
	
	if (player.pos.x > this.pos.x) {
	    this.vel.x = 50;
	}
	else if (player.pos.x < this.pos.x) {
	    this.vel.x = -50;
	}
	this.parent();
    }
});

});