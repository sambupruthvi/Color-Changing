var numSquares = 6;
var colors;
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.getElementsByTagName("h1")[0];
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons(){

	for(var i = 0; i < modeButtons.length; i++){
			modeButtons[i].addEventListener("click", function(){
				modeButtons[0].classList.remove("selected");
				modeButtons[1].classList.remove("selected");
				this.classList.add("selected");
				if(this.textContent === "Easy"){
					numSquares = 3;
				}else{
					numSquares = 6;
				}
				reset();		
			});
		}
}

function setupSquares(){

	for(var i = 0; i < squares.length; i++){
			//Add click listeners to squares
			squares[i].addEventListener("click", function(){
				//grad color of clicked square
				var clickedColor = this.style.backgroundColor;
				//compare color to picked color
				if(clickedColor === pickedColor){
					changeColors(clickedColor);
					messageDisplay.textContent = "Correct!";
					h1.style.backgroundColor = clickedColor;
					resetButton.textContent = "PlayAgain?";		
				}else{
					messageDisplay.textContent = "Try Again!";
					this.style.backgroundColor = "#232323";
				}
			});
		}
}

function reset(){
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
}

/*
easyButton.addEventListener("click", function(){
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
});

hardButton.addEventListener("click", function(){
	easyButton.classList.remove("selected");
	hardButton.classList.add("selected");
	//generate all new colors
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		//Add initial colors to squares
		squares[i].style.backgroundColor = colors[i];
		//display all blocks
		squares[i].style.display = "block";
	}
});
*/

resetButton.addEventListener("click", function(){	
	reset();
});

colorDisplay.textContent = pickedColor;
modeButtons[1].classList.add("selected");

function changeColors(color){
	//loop through all squares each color to match given color
	for(var i = 0; i  < colors.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var randomNumber = Math.floor(Math.random()*colors.length);
	return colors[randomNumber];
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	//add num random colors to array
	for(var i = 0; i < num; i++){
		//get Random color and push into array
		arr.push(randomColor());
	}
	//return that array at very end
	return arr;
}

//returns a randomcolor to generateRandomCOlors
function randomColor(){
	//pick a "red" from o - 255
	var redPixel = Math.floor(Math.random() * 256);
	//pick a "green" from o - 255	
	var greenPixel = Math.floor(Math.random() * 256);
	//pick a "blue" from o - 255
	var bluePixel = Math.floor(Math.random() * 256);

	return "rgb("+redPixel+", "+greenPixel+", "+bluePixel+")";
}