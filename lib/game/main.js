ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font',
	
	//entities
	'game.entities.player',
	'game.entities.dogEnemy',
	'game.entities.coin',
	'impact.debug.debug',
	'game.entities.singleGUIBorder',
	'game.entities.grandmaEnemy',
	'game.entities.checkForCatEmail',
	'game.entities.checkOven',
	
	//levels
	'game.levels.Bedroom'
	
)
.defines(function(){

MyGame = ig.Game.extend({
	
	// Load a font
	font: new ig.Font('media/04b03.font.png'),
	gmaFont: new ig.Font('media/gmaFont.png'),
	
	
	init: function() {
		//scores
		ig.game.timerClocker = new ig.Timer();
		ig.game.leaderboard = new Clay.Leaderboard( { id: 1 } );
		
		//global music
		ig.game.television = new ig.Sound('media/sounds/television.ogg');
		ig.game.catHurt = new ig.Sound('media/sounds/catHurt.ogg');
		ig.game.dogHurt = new ig.Sound('media/sounds/dogHurt.ogg');
		ig.game.dialup = new ig.Sound('media/sounds/dialup.ogg');
		ig.game.gunshot = new ig.Sound('media/sounds/gunshot.ogg');
		ig.music.add('media/sounds/WelcomeToGrandmas.ogg');
		ig.music.play();
		
		//global misc
		ig.game.currentLevel = LevelBedroom;
		ig.game.playerHasGun = false;
		// Initialize your game here; bind keys etc.
		ig.input.bind( ig.KEY.UP_ARROW, 'up');
		ig.input.bind( ig.KEY.DOWN_ARROW, 'down');
		ig.input.bind( ig.KEY.LEFT_ARROW, 'left');
		ig.input.bind( ig.KEY.RIGHT_ARROW, 'right');
		ig.input.bind( ig.KEY.X, 'push');
		ig.input.bind( ig.KEY.R, 'restart');
		ig.input.bind( ig.KEY.D, 'shoot right');
		ig.input.bind( ig.KEY.A, 'shoot left');
		ig.input.bind( ig.KEY.W, 'shoot up');
		ig.input.bind( ig.KEY.S, 'shoot down');

		this.loadLevel(LevelBedroom);
	},
	
	update: function() {
		// Update all entities and backgroundMaps
		this.parent();
		
		// Add your own, additional update code here
	},
	
	draw: function() {
		// Draw all entities and backgroundMaps
		this.parent();
		
		
		// Add your own drawing code here
		if(ig.game.currentLevel === LevelBedroom) {
			this.gmaFont.draw("can you email the cat for me? < >", 350, 650, ig.Font.ALIGN.CENTER);
		}
		else if (ig.game.currentLevel === LevelJunkRoom) {
			this.gmaFont.draw("WASD to atk", 350, 650, ig.Font.ALIGN.CENTER);
		} 
		else if (ig.game.currentLevel === LevelShopRoom) {
			this.gmaFont.draw("its dangerous to go alone", 350, 650, ig.Font.ALIGN.CENTER);
		}
		else if (ig.game.currentLevel === LevelLivingRoom) {
			this.gmaFont.draw("im watching my program. shut these dogs up.", 355, 650, ig.Font.ALIGN.CENTER);
		}
		else if (ig.game.currentLevel === LevelKitchen) {
			this.gmaFont.draw("can you fix something for supper?", 350, 650, ig.Font.ALIGN.CENTER);
		}
		else if (ig.game.currentLevel === LevelBossFight) {
			this.gmaFont.draw("did u feed that to poor gma y did u", 350, 650, ig.Font.ALIGN.CENTER);
		}
		else if (ig.game.currentLevel === LevelEndRoom) {
			this.gmaFont.draw("can you email my cat to me?", 350, 650, ig.Font.ALIGN.CENTER);
		}
	}
});


// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
ig.main( '#canvas', MyGame, 60, 934, 740, 1);

});
