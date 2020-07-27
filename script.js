//number of letters
length = 3;
backwards = 0;

//autoclick the submit button if enter key is hit
var response = document.getElementById("answerinput");
response.addEventListener("keyup", function(event){
	if (event.keyCode ==13){
		event.preventDefault();
		document.getElementById("").click();
	}
});

//generate the "length" number of random letters and pronounce them
function speak(){
	document.getElementById("answerinput").value = "";
	let gibberish = "";
	for(i = 0; i < length; i++){
		random_ascii = Math.floor((Math.random()*25)+97);
		gibberish = gibberish + String.fromCharCode(random_ascii) + ","
	}
	console.log(gibberish, backwards); //delete later
	responsiveVoice.speak(gibberish);
	backwards = gibberish.split(",").reverse().join("");
	document.getElementById("answerinput").focus();
	document.getElementById("wrong").style.display = "none"
	document.getElementById("correct").style.display = "none"

}

function check(){
	//toggled when enter is clicked
	var response = document.getElementById("answerinput").value;
	var result = 0;
	console.log(response);
	//screen.style.display = "none";
	if (response == backwards){
		result = "correct";
	}
	
	else{
		result = "wrong";
		reveal()
		
	}
	var screen = document.getElementById(result);
	screen.style.display = "block";
	console.log(result);
	
}

function reveal(){
	var reveal_p = document.getElementById("reveal")
	feedback = "The correct answer was: ".concat(backwards);
	reveal_p.innerHTML = feedback;
	console.log(feedback);
}

function letters_only(event){
	var char_code = event.keyCode;
	var lower = char_code > 96 && char_code < 123;
	var upper = char_code > 64 && char_code < 91;
	var allowed = upper || lower;
	//add the enter key (33)
	if (!allowed){
		return false;
	}
}