button 1
 arr=[0,1,0,0,0];

button 2

if(count==2)
                {
                    arr=[0,1,0,0,0];
                }
                else
                {
                    arr=[0,0,1,0,0];
                }
                
button 3

arr=[0,0,0,1,0];
                
button 4

  if(count==5)
                {
                    arr=[0,0,0,1,0];
                }
                else
                {
                    arr=[0,0,0,0,1];
                }
                
button 5

arr=[0,0,0,0,0];


mahekkkapur.js


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
      if (posx == 75 & posy == 225) {
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
  
  function mymove_k3() {
    alert("frame sent");
    myMove1_3();
    
}

  function myMove1_3() {
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
