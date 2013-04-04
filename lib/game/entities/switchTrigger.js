ig.module(
	'game.entities.switchTrigger'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntitySwitchTrigger = ig.Entity.extend({
    size: {x: 64, y: 64},
    
    checkAgainst: ig.Entity.TYPE.BOTH,
    
    animSheet: new ig.AnimationSheet ('media/images/powerUps/powerUpPedestal.png', 64,64),
    
    init : function( x, y, settings ) {
        this.parent(x, y, settings );
    
        this.addAnim( 'idle' , 1, [0]); //should just hold first and only frame
    
    },
    
    update: function(){}, //overrides update
    
    check: function( other ){
        //remove block while covered    
    } 
});

});