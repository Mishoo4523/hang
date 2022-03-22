var flag = false ;
var attemps = 10;
var words = [
	"car","monkey","tall","thinking","amazing","cool","absar","great",
	];

var word = words[Math.floor(Math.random() * words.length)];


var answerArray = [];

for( var i=0; i < word.length; i++) {
	answerArray[i] = "_";
}

var remainingLetters = word.length;
var guessesNr = 10;
var flag = false;

while((remainingLetters > 0) && (guessesNr > 0)) {
	//  players  progress
	alert("The word is from " + word.length + " letters " + answerArray.join(" "));
	// input 
	var guess = prompt("Guess a letter");

	if(guess===null) {
		
		break;
	
	} else if(guess.length !== 1) {
		alert("Please enter a one  letter each time !");
	} else if(typeof guess !== 'string') {
		alert("Please enter only letters!");
	} else {
		for(var j = 0; j < word.length; j++) {
			if(word[j] === guess) {
				
				answerArray[j] = guess;
				remainingLetters--;
				flag = true;
			
			} 
		}
		if(!flag) {
			guessesNr--;
			alert("You have " + guessesNr + " more lives");
			if(guessesNr === 0) {
				alert("GAME OVER");
				break;
			}
			
		}
		
	}
	
}

//alert(answerArray.join(" "));
alert("cool ! The answer was " + word);