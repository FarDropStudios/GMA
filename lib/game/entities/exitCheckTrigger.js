ig.module(
	'game.entities.exitCheckTrigger'
)
.requires(
	'impact.entity',
        'game.levels.junkRoom',
	'game.entities.player',
	'game.entities.grandmaEnemy'
)
.defines(function(){

EntityExitCheckTrigger = ig.Entity.extend({
    size: {x: 64, y: 64},
    _wmDrawBox: true,
    _wmDrawColor: 'rbga(100,50,100,0.5)',
    
    checkAgainst: ig.Entity.TYPE.BOTH,
    
    
    init : function( x, y, settings ) {
        this.parent(x, y, settings );
    },
    
    update: function(){}, //overrides update
    
    check: function(other){
	if (other instanceof EntityPlayer) {
	    ig.game.currentLevel = LevelJunkRoom;
	    ig.game.loadLevel(LevelJunkRoom);
	} else if (other instanceof EntityGrandmaEnemy) {
	    other.kill();   
	}
    } 
});

});