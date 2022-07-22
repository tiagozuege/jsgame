//Jogo criado com Vanilla JS

const HEIGHT = 500;
const WIDTH = 500;
const BOUNDS = 0;
const BLOCK_SIZE = 20;
const REFRESH_INTERVAL = 150;
const PTS_ELEMENT = document.getElementById('points');

var context;
var x = 1;
var y = 20;
var cont = 0;
var direction = '';
var playerHasMoved = false;
var snakeHasEaten = true;
var newBlockPositionX = 0;
var newBlockPositionY = 0;

window.onload = function() {
  PTS_ELEMENT.innerHTML = 0;
  startGame();
}

function startGame() {
  var canvas = document.getElementById('gameCanvas');
  context = canvas.getContext('2d');
  context.canvas.width = WIDTH;
  context.canvas.height = HEIGHT;

  var canvasUpdate = setInterval(function (x, y, h, w) {

    direction = keyPressedHandler();

    if (playerHasMoved && snakeHasEaten) {
      newBlockPositionX = generateRandomBlockPosition();
      newBlockPositionY = generateRandomBlockPosition();
      context.fillRect(newBlockPositionX, newBlockPositionY, 15, 15);
      snakeHasEaten = false;
    }
    

    // verifica se nao houve colisao nos limites do canvas
    if (this.x >= HEIGHT - 9 || this.x <= BOUNDS) { 
      clearInterval(canvasUpdate);
      alert('Game Over!');
    }
    if (this.y >= WIDTH - 9 || this.y <= BOUNDS) {
      clearInterval(canvasUpdate);
      alert('Game Over!');
    }

    
    //directions:

    if (direction == 'right') {
      playerHasMoved = true;
      this.x += 10;
      context.clearRect( (this.x - 10), this.y, BLOCK_SIZE, BLOCK_SIZE);
    }

    if (direction == 'left') {
      playerHasMoved = true;
      this.x -= 10;
      context.clearRect( (this.x + 10), this.y, BLOCK_SIZE, BLOCK_SIZE);

    }

    if (direction == 'up') {
      playerHasMoved = true;
      this.y -= 10;
      context.clearRect(this.x, (this.y + 10), BLOCK_SIZE, BLOCK_SIZE);

    }

    if (direction == 'down') {
      playerHasMoved = true;
      this.y += 10;
      context.clearRect(this.x, (this.y - 10), BLOCK_SIZE, BLOCK_SIZE);

    }

    // posicao atualizada apos os movimentos
    context.fillRect(this.x, this.y, BLOCK_SIZE, BLOCK_SIZE);

  }, REFRESH_INTERVAL); 


}

var generateRandomBlockPosition = function () {
  rnd = Math.floor(Math.random() * 490) + 10;
  return rnd;
}

function keyPressedHandler() {

  document.addEventListener("keydown", function(event) {

    switch (event.keyCode) {
      case 40:
        direction = 'down';
        console.log('Down');
        break;

      case 39:
        direction = 'right';
        console.log('Right');
        break;

      case 38:
        direction = 'up';
        console.log('Up');
        break;

      case 37:
        direction = 'left';
        console.log('Left');
        break;
    }

  });

  return direction;
}
