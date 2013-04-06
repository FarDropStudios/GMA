ig.module(
	'game.entities.switchTrigger'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntitySwitchTrigger = ig.Entity.extend({
    size: {x: 50, y: 44},
    offset: {x: 10, y: 14},
    checkAgainst: ig.Entity.TYPE.BOTH,
    
    animSheet: new ig.AnimationSheet ('media/images/powerUps/powerUpPedestal.png', 64,64),
    
    init : function( x, y, settings ) {
        this.parent(x, y, settings );
    
        this.addAnim( 'idle' , 1, [0]); //should just hold first and only frame
    
    },
    
    update: function(){}, //overrides update
    
    check: function( other ){
	var block = ig.game.getEntitiesByType(EntitySwitchPuzzleBlock);
	block[0].moveTo();
    } 
});

});