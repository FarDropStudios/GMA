ig.module(
	'game.entities.cookedMeat'
)
.requires(
	'game.entities.enemy',
	'game.entities.projectile',
	'game.entities.player'
)
.defines(function(){

EntityPileOfMeatEnemy = ig.Entity.extend({
    size: {x: 50, y: 30},
    type: ig.Entity.TYPE.B,
    checkAgainst: ig.Entity.TYPE.A,
    collides: ig.Entity.COLLIDES.ACTIVE,
    offset: {x:14, y:35},
    
    
    animSheet: new ig.AnimationSheet('media/images/houseOccupants/cookedMeat.png', 64, 64),
    
    init : function( x, y, settings ) {
	this.friction.x = 50;
	this.friction.y = 50;
        this.parent(x, y, settings );
        this.addAnim( 'idle' , 1, [0]);
    },
});

});