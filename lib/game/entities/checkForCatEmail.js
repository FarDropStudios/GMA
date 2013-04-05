ig.module(
	'game.entities.checkForCatEmail'
)
.requires(
	'impact.entity',
        'game.entities.catEnemy',
	'game.entities.emailSeq'
)
.defines(function(){

EntityCheckForCatEmail = ig.Entity.extend({
    size: {x: 64, y: 64},
    _wmDrawBox: true,
    _wmDrawColor: 'rbga(100,50,100,0.2)',
    
    checkAgainst: ig.Entity.TYPE.B,
    
    
    init : function( x, y, settings ) {
        this.parent(x, y, settings );
    
    },
    
    update: function(){}, //overrides update
    
    check: function( other ){
        if(other instanceof EntityCatEnemy){
            other.kill();
	    ig.game.spawnEntity(EntityEmailSeq, this.pos.x, this.pos.y - 60);
	    unlock();
        //send email (entity with animation then self destruct) emailAnimation.js
        //function: unlock -- grandma walk out door (grandmaLevelEndState function
        //if door is locked unlock it in grandmaLevelEndState
        }    
        
    },
    
    unlock: function() {
	this.vel.x = 50;
    }
});

});