var myv;
function mymove() {
    document.querySelector(".right").innerHTML="frame sent"
    myMove1()
    
    myv=setTimeout(myMove2,1000)
    myv= setTimeout(myMove3,2000)

}

function myMove2() {
    document.querySelector(".right").innerHTML="ack sent";
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
  function myMove3() {
    var elem = document.getElementById("animate");   
    var posx = 0;
    var posy = 0;
    var id = setInterval(frame, 5);
    function frame() {
      if (posx == 75 & posy == 75) {
        clearInterval(id);
      } else {
        posx++;
        posy++; 
        elem.style.top = posy + "px"; 
        elem.style.left = posx + "px"; 
         
        
      }
    }
  }

  