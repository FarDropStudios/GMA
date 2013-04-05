ig.module(
	'game.entities.catEnemy'
)
.requires(
	'game.entities.enemy',
	'game.entities.player',
	'game.entities.projectile',
	'game.entities.pileOfMeatEnemy'
)
.defines(function() {

EntityCatEnemy = EntityEnemy.extend({
    size: {x: 64, y: 32},
    animSheet: new ig.AnimationSheet ('media/images/houseOccupants/cat.png', 64, 64),
    
    init : function( x, y, settings ) {
	this.move = false;
	this.moveTimer = new ig.Timer();
        this.parent(x, y, settings );
	this.offset.x = 4;
	this.offset.y = 32;
        this.addAnim( 'idle' , 1, [0]); //should just hold first and only frame
    
    },
    
    update : function() {
	var player = ig.game.getEntitiesByType( EntityPlayer) [0];
	this.move = false;
	this.vel.y = 0;
	this.vel.x = 0;
	
	if (this.moveTimer.delta() < 1.5) {
	    this.move = true;
	} else if (this.moveTimer.delta() > 2) {
	    this.moveTimer.reset();
	}
	if (this.move) {
	    if (player.pos.y > this.pos.y && player.pos.x < this.pos.y) {
		this.vel.y = -50;
		this.vel.x = 5;
	    }
	    else if(player.pos.y < this.pos.y && player.pos.x < this.pos.y){
		this.vel.y = 50;
		this.vel.x = 15;
	    }
	    
	    if (player.pos.x > this.pos.x && player.pos.y < this.pos.y) {
		this.vel.x = -50;
		this.vel.y = 5;
	    }
	    else if (player.pos.x > this.pos.x && player.pos.y > this.pos.y) {
		this.vel.x = -50;
		this.vel.y = -5;
	    }	
	}
	this.parent();
    },
});

});