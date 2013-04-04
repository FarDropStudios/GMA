ig.module(
	'game.entities.wigDemonEnemy'
)
.requires(
	'game.entities.enemy',
	'game.entities.player',
	'game.entities.exitCheckShopRoomTrigger'
)
.defines(function(){

EntityWigDemonEnemy = EntityEnemy.extend({
    size: {x: 64, y: 64},
    collides: ig.Entity.COLLIDES.NEVER,
    
    animSheet: new ig.AnimationSheet ('media/images/houseOccupants/wigSheetHover.png', 64, 64),
    
    init : function( x, y, settings ) {
        this.parent(x, y, settings );
	this.offset.x = 4;
	this.offset.y = 4;
	this.maxVel.x = 400,
	this.maxVel.y = 400,
        this.addAnim( 'idle' , .1, [0,1,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,8,8,8,9,10,9,8,7,6,5,4,3,2,1,]); //should just hold first and only frame
    
    },
    
    update : function() {
	var player = ig.game.getEntitiesByType( EntityPlayer) [0];
	
	if (player.pos.x - 200 >= 0) {
	    this.pos.x = player.pos.x - 200;
	}
	else{
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
	}	
	
	if (player.pos.y - 500 >= 0) {
	    this.pos.y = player.pos.y - 500;
	}
    }
});

});