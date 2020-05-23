
function myMove() {
    alert("frame sent")
    myMove1()
    
    setTimeout(myMove2,1000)
}

function myMove2() {
    alert("ack sent")
    var elem = document.getElementById("animate"); 
    

    var posx = 150;
    var posy = 150;
    var id = setInterval(frame, 5);
    function frame() {
      if (posx == 0 & posy == 300) {
        clearInterval(id);
      } else {
        posx--;
        posy++; 
        elem.style.top = posy + "px"; 
        elem.style.left = posx + "px"; 
         
        
      }
    }
    
  }
  function myMove1() {
    var elem = document.getElementById("animate");   
    var posx = 0;
    var posy = 0;
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
  