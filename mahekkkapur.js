//case 1

function mymove_k1() {
    alert("frame sent");
    myMove1_1();
    
    setTimeout(myMove2_1,1000);
}

function myMove2_1() {
    alert("ack sent");
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
  function myMove1_1() {
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

  //case 2

  function mymove_k2() {
    alert("frame sent");
    myMove1_1();
    
    setTimeout(myMove2_2,1000);
}

function myMove2_2() {
    alert("ack sent");
    var elem = document.getElementById("animate"); 
    var posx = 150;
    var posy = 150;
    var id = setInterval(frame, 5);
    function frame() {
      if (posx == 0 & posy == 225) {
        clearInterval(id);
      } else {
        posx--;
        posy++; 
        elem.style.top = posy + "px"; 
        elem.style.left = posx + "px"; 
         
        
      }
    }
    
  }

  //case 3
  
  function mymove_k1() {
    alert("frame sent");
    myMove1();
    
}

  function myMove1_3() {
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
