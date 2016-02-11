var palettes = require('../palettes.json');

exports.randomPalette = function(req, res) {
	// get a random palette from the top ones
	var randomPalette = palettes[Math.floor(palettes.length * Math.random())];
	// res.send('Your random palette is called: ' + randomPalette['title']);
	res.json(randomPalette);

	// var numColors = randomPalette["colors"]["hex"].length;
	// var colors = new Array(numColors);


	// for (var i = 0; i < numColors; i++) {
	// 	colors[i] = randomPalette["colors"]["hex"][i];
	// }

}