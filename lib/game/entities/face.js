ig.module(
	'game.entities.face'
)
.requires(
	'game.entities.enemy'
)
.defines(function(){

EntityFace = EntityEnemy.extend({

    animSheet: new ig.AnimationSheet ('media/endsheet.png', 500, 500),
    
    init : function( x, y, settings ) {
        this.addAnim( 'idle' , .1, [0, 1, 2, 1, 0]); //should just hold first and only frame
	var endScore = ig.game.timerClocker.delta();
	ig.game.leaderboard.post( { score:  endScore}, function( response ) {
	    // Callback
	    console.log( response );
	} );
	this.parent(x, y, settings);
	
	var options = { // all of these are optional
	    html: "<strong>Handsome Boy</strong>", // Optional, any custom html you want to show below the name
	    recent: 3600, // Optional, to limit scores to ones posted in last x seconds
	    sort: 'asc', // Optional, sorting by "asc" will show the lowest scores first (ex. for fastest times)
	    filter: ['day', 'month'], // Optional, Array of filters to narrow down high scores
	    cumulative: false, // Optional, if set to true grabs the sum of all scores for each player
	    best: false, // Optional, if set to true grabs the best score from each player
	    limit: 10, // Optional, how many scores to show (0 for all). Default is 10
	    self: false, // Optional, Boolean if set to true shows just the scores of the player viewing
	    friends: false, // Optional, Boolean if set to true shows just the scores of the player viewing AND their Clay.io friends
	    showPersonal: true // Optional, Boolean on if the player's stats (rank & high score) should show below the name. Default is false
	};
	var callback = function( response ) { // Optional
	    console.log( response );
	};
	ig.game.leaderboard.show( options, callback );
	
    },
	
    update: function() {
	this.parent();
    }

});

});