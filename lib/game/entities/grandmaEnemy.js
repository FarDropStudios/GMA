ig.module(
	'game.entities.grandmaEnemy'
)
.requires(
	'game.entities.enemy',
	'game.entities.player'
)
.defines(function() {

EntityGrandmaEnemy = EntityEnemy.extend({
    size: {x: 60, y: 40},
    offset: {x:4, y:0},
    collides: ig.Entity.COLLIDES.FIXED,
    animSheet: new ig.AnimationSheet ('media/images/houseOccupants/grandma.png', 64, 64),
    
    init : function( x, y, settings ) {
	this.parent(x, y, settings);
        this.addAnim( 'idle' , .1, [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,4,4,3,2,1,0]);

    },
    unlockBedroom: function() {
	this.vel.x = 100; 
    }
});

});