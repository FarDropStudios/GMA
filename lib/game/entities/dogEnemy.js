ig.module(
	'game.entities.dogEnemy'
)
.requires(
	'game.entities.enemy',
	'game.entities.player',
	'game.entities.projectile',
	'game.entities.pileOfMeatEnemy'
)
.defines(function() {

EntityDogEnemy = EntityEnemy.extend({
    size: {x: 60, y: 32},
    collides: ig.Entity.COLLIDES.PASSIVE,
    type: ig.Entity.TYPE.B,
    checkAgainst: ig.Entity.TYPE.BOTH,
    health: 10,
    animSheet: new ig.AnimationSheet ('media/images/houseOccupants/dog.png', 60, 60),
    
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
	} else if (this.moveTimer.delta() > 3) {
	    this.moveTimer.reset();
	}
	if (this.move) {
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
	this.parent();
    },
    
    check: function(other) {
	if (other instanceof EntityProjectile) {
	    this.receiveDamage(1, other);
	    ig.game.dogHurt.play();
	    other.type = ig.Entity.TYPE.NONE;
	    other.collides = ig.Entity.COLLIDES.NEVER;
	    if (this.health === 0) {
		ig.game.spawnEntity(EntityPileOfMeatEnemy, this.pos.x, this.pos.y);
	    }
	} else if(other instanceof EntityBullet) {
	    if (this instanceof EntityCatEnemy) {
		ig.game.catHurt.play();
	    } else if (this instanceof EntityDogEnemy) {
		ig.game.dogHurt.play();
	    }
	    this.receiveDamage(5, other);
	    other.kill();
	    if (this.health === 0) {
		ig.game.spawnEntity(EntityPileOfMeatEnemy, this.pos.x, this.pos.y);
	}
    }
    }
});

});