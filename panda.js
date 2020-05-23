


// function myMove2() {
       
//   var elem = document.getElementById("myAnimation1");   
//   var posx = 700;
//   var posy = 100;
//   var id = setInterval(frame, 10);
//   function frame() {
//     if (posy == 200 && posx==800) {
//       clearInterval(id);
//     } else {
//       posx++;
//       posy++;
//       elem.style.top = posy + 'px'; 
//       elem.style.left = posx + 'px'; 
//     }
//   }
// }



//       function myMove(callback) {
        
//         var elem = document.getElementById("myAnimation");   
//         // var posx = 840;
//         // var posy = 180;
//         var posx = 0;
//         var posy = 0;
//         var id = setInterval(frame, 10);
//         function frame() {
//           // if (posy == 340 && posx==1000) {
//             setTimeout(function() {
//             if (posy == 100 && posx==100) {
//             f1=1;
//             clearInterval(id);
//           } else {
//             posx++;
//             posy++;
//             elem.style.top = posy + 'px'; 
//             elem.style.left = posx + 'px'; 
//           }
          
//         }
//         callback();
//       }, 3000);
//     }
//       }
      

//       //export{myMove};

//       // function one(callback) {
//       //   setTimeout(function() {
//       //     console.log("first function executed");
//       //     callback();
//       //   }, 3000);
//       // }
      
//       // function two() {
//       //   console.log("second function executed");
//       // }
      
//       myMove(myMove2)

var myGamePiece;
var myGamePiece1;


function startGame() {
    myGamePiece = new component(30, 30, "red", 10, 120);
    myGamePiece1=new component(30, 30, "yellow", 10, 120);
    myGameArea.start();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}


function component(width, height, color, x, y) {
  this.width = width;
  this.height = height;
  this.speedX = 0;
  this.speedY = 0;
  this.x = x;
  this.y = y;
  this.update = function() {
    ctx = myGameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  this.newPos = function() {
    this.x += this.speedX;
    this.y += this.speedY;
  }
}

function updateGameArea() {
  myGameArea.clear();
  myGamePiece.newPos();
  myGamePiece.update();
  myGamePiece1.newPos();
  myGamePiece1.update();
}


//var myVar = setInterval(moveup, 1000);

function moveright() {
  
  myGamePiece.speedX = 1; 
  myGamePiece1.speedX = 0; 
}
function moveleft() {
  myGamePiece.speedX =0; 
  myGamePiece1.speedX = 1; 
}