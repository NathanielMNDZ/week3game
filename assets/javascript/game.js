var win = 0
var loss = 0
var guess = 0
var guessLeft = 9
var letterArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


var rand = letterArray[Math.floor(Math.random() * letterArray.length)];
console.log(rand);

var userGuess = prompt("pick a letter:")
for (i = 9 ; i = 0 ; i--){

	if (userGuess === rand) {
		console.log(win + 1)
	}
	else {
		console.log(guessLeft - 1)
	}
}

