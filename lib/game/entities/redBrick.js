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
    farts: false,
    gmaFont: new ig.Font('media/gmaFont.png'),
    
    animSheet: new ig.AnimationSheet ('media/images/MiscImages/redBrick.png', 64,64),
    
    init : function( x, y, settings ) {
        this.parent(x, y, settings );
        this.addAnim( 'idle' , 1, [0]);
	this.time.set(0);
    },
    update : function(){
        if (this.time.delta() > 20) {
            ig.game.spawnEntity(EntityGreenBrick, this.pos.x, this.pos.y);
            var obstacle = ig.game.getEntitiesByType(EntityTheWayIsBlocked);
            for (var i = 0; i < obstacle.length; i++) {
                obstacle[i].kill();
		farts = true;
	    }
            this.kill();
        }
    },
    draw: function() {
	this.parent();
	this.gmaFont.draw("you can walk when there's a commercial", 340, 500, ig.Font.ALIGN.CENTER);
	
    }
});

});