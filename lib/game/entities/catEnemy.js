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
    aiReach: 160,
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
	} else if (this.moveTimer.delta() > 1) {
	    this.moveTimer.reset();
	}
	if (this.move) {
	    if (player.pos.x < this.pos.x + this.aiReach &&  player.pos.x > this.pos.x - this.aiReach && player.pos.y < this.pos.y + this.aiReach && player.pos.y > this.pos.y - this.aiReach) {
		if (player.pos.y > this.pos.y ) {
		    this.vel.y = -50;
		}
		else if(player.pos.y < this.pos.y){
		    this.vel.y = 50;
		}
		
		if (player.pos.x > this.pos.x) {
		    this.vel.x = -50;
		}
		else if (player.pos.x < this.pos.x) {
		    this.vel.x = 50;
		}	
	    }
	}
	this.parent();
    }
});

});