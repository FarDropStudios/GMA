ig.module(
	'game.entities.theWayIsBlocked'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntityTheWayIsBlocked = ig.Entity.extend({
    size: {x: 60, y: 60},
    _wmDrawBox: true,
    _wmDrawColor: 'rbga(100,50,100,0.2)',
    _wmResizable: true,
    
    collides: ig.Entity.COLLIDES.FIXED,
    
    //check for intersection with player
    //"hey i'm watching that"
});

});