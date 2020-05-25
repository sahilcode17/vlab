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



var button1 = document.querySelector('#b1');
var button2 = document.querySelector('#b2');
var button3 = document.querySelector('#b3');
var button4 = document.querySelector('#b4');
var button5 = document.querySelector('#b5');
var button6 = document.querySelector('#b6');
var button7 = document.querySelector('#b7');
var button8 = document.querySelector('#b8');
var button9 = document.querySelector('#b9');
var button10 = document.querySelector('#b10');



function mymove_k1() {
    Go_1()
    Go_2()
    Go_3()
    Go_4()
}


function Go_1() {

    var elem = document.getElementById("animate1");
    var posx = 0;
    var posy = 0;
    var id = setInterval(frame, 5);

    function frame() {
        if (posx == 120 & posy == 120) {
            clearInterval(id);
        } else {
            posx++;
            posy++;
            elem.style.top = posy + "px";
            elem.style.left = posx + "px";


        }
    }
}

function Go_2() {

    var elem = document.getElementById("animate2");
    var posx = 25;
    var posy = 25;
    var id = setInterval(frame, 5);

    function frame() {
        if (posx == 175 & posy == 175) {
            clearInterval(id);
        } else {
            posx++;
            posy++;
            elem.style.top = posy + "px";
            elem.style.left = posx + "px";


        }
    }
}

function Go_3() {

    var elem = document.getElementById("animate3");
    var posx = 50;
    var posy = 50;
    var id = setInterval(frame, 5);

    function frame() {
        if (posx == 150 & posy == 150) {
            clearInterval(id);
        } else {
            posx++;
            posy++;
            elem.style.top = posy + "px";
            elem.style.left = posx + "px";


        }
    }
}

function Go_4() {

    var elem = document.getElementById("animate4");
    var posx = 75;
    var posy = 75;
    var id = setInterval(frame, 5);

    function frame() {
        if (posx == 225 & posy == 225) {
            clearInterval(id);
        } else {
            posx++;
            posy++;
            elem.style.top = posy + "px";
            elem.style.left = posx + "px";


        }
    }
}