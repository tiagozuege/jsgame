//Creating a simple game with VanillaJS

const HEIGHT = 500;
const WIDTH = 500;

var context;
var x = 1;
var y = 20;
var cont = 0;
var direction = '';

window.onload = function() {

  startGame();
}

function startGame() {
  var canvas = document.getElementById('gameCanvas');
  context = canvas.getContext('2d');
  context.canvas.width = WIDTH;
  context.canvas.height = HEIGHT;



  var canvasUpdate = setInterval(function (x, y, h, w) {

    direction = keyPressedHandler();
    // console.log(direction);

    if (this.x >= HEIGHT || this.x <= 0) {    //atingiu o final do eixo x
      clearInterval(canvasUpdate);
      alert('Game Over!');
    }
    if (this.y >= WIDTH || this.y <= 0) {
      clearInterval(canvasUpdate);
      alert('Game Over!');
    }

    context.clearRect( (this.x - 10), this.y, 15, 15);  //limpa o 'x' anterior do canvas
    context.fillRect(this.x, this.y, 15, 15);

    if (direction == 'right') {
      this.x += 10;
    }

    if (direction == 'left') {
      this.x -= 10;
      console.log('x: ' + this.x);
    }

    if (direction == 'down') {
      this.y += 10;
    }

  }, 100);   //diminuir para que o canvas renderize mais rápido (dificuldade)


}

function keyPressedHandler() {

  document.addEventListener("keydown", function(event) {

    switch (event.keyCode) {
      case 40:
        for (var i = 0; i < 1000; i++);
        direction = 'down';
        console.log('Down');
        break;

      case 39:
        for (var i = 0; i < 1000; i++);
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
