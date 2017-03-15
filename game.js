//Creating a simple game with VanillaJS

const HEIGHT = 500;
const WIDTH = 500;

var context;
var x = 0;
var y = 0;

window.onload = function() {

  startGame();
}

function startGame() {
  var canvas = document.getElementById('gameCanvas');
  context = canvas.getContext('2d');
  context.canvas.width = WIDTH;
  context.canvas.height = HEIGHT;



  var canvasUpdate = setInterval(function (x, y, h, w) {

    document.addEventListener("keydown", function(event) {        //imprime msg caso tecla 'para baixo' for pressionado
      if (event.keyCode == 40) { console.log('Down key pressed!'); }
    });

    if (this.x == HEIGHT) {    //atingiu o final do eixo x
      clearInterval(canvasUpdate);
      alert('Game Over!');
      // console.log(this.x);
      // context.clearRect(this.x, this.y, 15, 15);
      // this.x = 0;
      // this.y += 10;
    }

    context.clearRect( (this.x - 10), this.y, 15, 15);  //limpa o 'x' anterior do canvas
    context.fillRect(this.x, this.y, 15, 15);
    this.x += 10;
    // this.y += 10;

  }, 100);   //diminuir para que o canvas renderize mais rápido (dificuldade)


}

function keyPressedHandler() {

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
