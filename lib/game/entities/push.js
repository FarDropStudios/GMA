ig.module(
	'game.entities.push'
)
.requires(
	'impact.entity'
)
.defines(function() {

EntityPush = ig.Entity.extend({
	_wmDrawBox: true,
	_wmBoxColor: 'rgba(255, 100, 0, 0.7)',
	
        size: {x:50, y:50},
        animSheet: new ig.AnimationSheet('media/images/MiscImages/energySheet.png', 64, 64),
        collides: ig.Entity.COLLIDES.PASSIVE,
	type: ig.Entity.TYPE.B,
	
        
	init: function( x, y, settings) {
            this.maxVel.x = 400;
            this.maxVel.y = 400;
            this.offset.x = 5;
            this.offset.y = 5;
            this.addAnim('fire', .1, [0,1,2,3,4,3,2,1,0]);
            this.killTimer = new ig.Timer();
            this.parent( x, y, settings );
	},
	
	update: function() {
            if (this.killTimer.delta() > 0.2) {
                this.killTimer.reset();
                this.kill();
            }
            this.parent();
	},
});

});