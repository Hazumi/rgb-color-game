var numSquares = 6;
var colors = [];
var pickedColor;
var header = document.querySelector('header');
var h1 = document.querySelector('h1');
var squares = document.querySelectorAll('.square');
var messageDisplay = document.querySelector('#message');
var colorDisplay = document.createElement('h2');
var resetButton = document.querySelector('#reset');
var modeButtons = document.querySelectorAll('.mode');

init();

function init() {
  setupModeButtons();
  setupSquares();
  reset();
}

function setupModeButtons() {
  for(var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener('click', function() {
      modeButtons[0].classList.remove('selected');
      modeButtons[1].classList.remove('selected');
      this.classList.add('selected');
      this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
      reset();
    });
  }
}

function setupSquares() {
  for(var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', function() {
      if(this.style.backgroundColor === pickedColor) {
        var clickedColor = this.style.backgroundColor;
        changeColors(clickedColor);
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "Play Again?";
        h1.style.backgroundColor = clickedColor;
        header.style.backgroundColor = clickedColor;
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Wrong!";
      }
    });
  }
}

function reset() {
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = '';
  for(var i = 0; i < squares.length; i++) {
    if(colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "steelblue";
  header.style.backgroundColor = "steelblue";
}

header.appendChild(colorDisplay);

resetButton.addEventListener('click', function() {
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  this.textContent = "New Colors";
  messageDisplay.textContent = '';
  for(var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "steelblue";
  header.style.backgroundColor = "steelblue";
});


function changeColors(color) {
  for(var i = 0; i < 6; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  var arr = [];
  for(var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
