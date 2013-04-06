ig.module(
	'game.entities.exitCheckBossFightTrigger'
)
.requires(
	'impact.entity',
        'game.levels.Bedroom'
)
.defines(function(){

EntityExitCheckBossFightTrigger = ig.Entity.extend({
    size: {x: 64, y: 64},
    _wmDrawBox: true,
    _wmDrawColor: 'rbga(100,50,100,0.5)',
    
    checkAgainst: ig.Entity.TYPE.A,
    
    
    init : function( x, y, settings ) {
        this.parent(x, y, settings );
    
    },
    
    update: function(){}, //overrides update
    
    check: function( other ){
	ig.game.currentLevel = bedroom;
	ig.game.loadLevel( LevelBedRoom ); 
    } 
});

});