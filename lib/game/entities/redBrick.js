ig.module(
	'game.entities.redBrick'
)
.requires(
	'impact.entity',
        'game.entities.theWayIsBlocked',
        'game.entities.greenBrick'
)
.defines(function(){

EntityRedBrick = ig.Entity.extend({
    size: {x: 64, y: 64},
    collides: ig.Entity.COLLIDES.NONE,
    time: new ig.Timer(0),
    
    animSheet: new ig.AnimationSheet ('media/images/MiscImages/redBrick.png', 64,64),
    
    init : function( x, y, settings ) {
        this.parent(x, y, settings );
        this.addAnim( 'idle' , 1, [0]);
	this.time.set(0);
    },
    update : function(){
        if (this.time.delta() > 8) {
            ig.game.spawnEntity(EntityGreenBrick, this.pos.x, this.pos.y);
            var obstacle = ig.game.getEntitiesByType(EntityTheWayIsBlocked);
            for (var i = 0; i < obstacle.length; i++) {
                obstacle[i].kill();
            }
            this.kill();
        }
    },
});

});