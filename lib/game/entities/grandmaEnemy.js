ig.module(
	'game.entities.grandmaEnemy'
)
.requires(
	'game.entities.enemy',
	'game.entities.player'
)
.defines(function() {

EntityGrandmaEnemy = EntityEnemy.extend({
    size: {x: 64, y: 64},
    collides: ig.Entity.COLLIDES.PASSIVE,
    animSheet: new ig.AnimationSheet ('media/images/houseOccupants/grandma.png', 64, 64),
    
    init : function( x, y, settings ) {
        this.parent(x, y, settings );
	this.offset.x = 4;
	this.offset.y = 4;
        this.addAnim( 'idle' , 1, [0]);
    
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
    },
});

});