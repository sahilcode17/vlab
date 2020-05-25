// //       //export{myMove};

// //       // function one(callback) {
// //       //   setTimeout(function() {
// //       //     console.log("first function executed");
// //       //     callback();
// //       //   }, 3000);
// //       // }

// //       // function two() {
// //       //   console.log("second function executed");
// //       // }

// //       myMove(myMove2)

// var myGamePiece;
// var myGamePiece123;


// function startGame() {
//     myGamePiece = new component(30, 30, "red", 10, 120);
//     myGamePiece123=new component(30, 30, "yellow", 10, 120);
//     myGameArea.start();
// }

// var myGameArea = {
//     canvas : document.createElement("canvas"),
//     start : function() {
//         this.canvas.width = 480;
//         this.canvas.height = 270;
//         this.context = this.canvas.getContext("2d");
//         document.body.insertBefore(this.canvas, document.body.childNodes[0]);
//         this.interval = setInterval(updateGameArea, 20);
//     },
//     clear : function() {
//         this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
//     }
// }


// function component(width, height, color, x, y) {
//   this.width = width;
//   this.height = height;
//   this.speedX = 0;
//   this.speedY = 0;
//   this.x = x;
//   this.y = y;
//   this.update = function() {
//     ctx = myGameArea.context;
//     ctx.fillStyle = color;
//     ctx.fillRect(this.x, this.y, this.width, this.height);
//   }
//   this.newPos = function() {
//     this.x += this.speedX;
//     this.y += this.speedY;
//   }
// }

// function updateGameArea() {
//   myGameArea.clear();
//   myGamePiece.newPos();
//   myGamePiece.update();
//   myGamePiece123.newPos();
//   myGamePiece1.update();
// }


// //var myVar = setInterval(moveup, 1000);

// function moveright() {

//   myGamePiece.speedX = 1; 
//   myGamePiece123.speedX = 0; 
// }
// function moveleft() {
//   myGamePiece.speedX =0; 
//   myGamePiece123.speedX = 1; 
// }