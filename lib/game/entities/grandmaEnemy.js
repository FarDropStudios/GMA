ig.module(
	'game.entities.grandmaEnemy'
)
.requires(
	'game.entities.cookedMeat',
	'game.entities.enemy',
	'game.entities.player'
)
.defines(function() {

EntityGrandmaEnemy = EntityEnemy.extend({
    size: {x: 50, y: 50},
    name: 'grandma',
    offset: {x:4, y:0},
    collides: ig.Entity.COLLIDES.FIXED,
    animSheet: new ig.AnimationSheet ('media/images/houseOccupants/grandma.png', 64, 64),
    
    init : function( x, y, settings ) {
        this.offset.x = 14;
	this.offset.y = 14;
	this.vel.x = 0;
	this.parent(x, y, settings );
        this.addAnim( 'idle' , .1, [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,4,4,3,2,1,0]);

    },
    update: function(){
	this.parent();
    },
    unlockBedroom: function() {
	this.vel.y = -100; 
    },
    
    check: function(other){
	if (other instanceof EntityCookedMeat) {
	    other.kill();
	    this.vel.y = -50;
    	}
    }
});

});