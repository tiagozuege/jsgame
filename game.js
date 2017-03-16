//Creating a simple game with VanillaJS

const HEIGHT = 500;
const WIDTH = 500;

var context;
var x = 0;
var y = 0;
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

    if (this.x == HEIGHT) {    //atingiu o final do eixo x
      clearInterval(canvasUpdate);
      alert('Game Over!');
    }
    if (this.y == WIDTH) {
      clearInterval(canvasUpdate);
      alert('Game Over!');
    }

    context.clearRect( (this.x - 10), this.y, 15, 15);  //limpa o 'x' anterior do canvas
    context.fillRect(this.x, this.y, 15, 15);
    if (direction == 'right') {
      this.x += 10;
      this.y = 0;
    }
    if (direction == 'down') {
      this.x = 0;
      this.y -= 10;
      console.log('x = ' + this.x);
      console.log('y = ' + this.y);
    }

  }, 100);   //diminuir para que o canvas renderize mais rápido (dificuldade)


}

function keyPressedHandler() {

  document.addEventListener("keydown", function(event) {

    switch (event.keyCode) {
      case 40:
        for (var i = 0; i < 1000; i++);
        direction = 'down';
        // y += 10;
        break;

      case 39:
        for (var i = 0; i < 1000; i++);
        direction = 'right';
        console.log('Right');
        break;

      case 38:
        console.log('Up');
        break;

      case 37:
        console.log('Left');
        break;
    }

  });

  return direction;
}


// function gameComponent(width, heigth, color, x, y, type) {
//   this.width = width;
//   this.height = height;
//   this.color = color;
//   this.x = x;
//   this.y = y;
//
//   this.draw = function () {
//     ctx =
//   }
// }
