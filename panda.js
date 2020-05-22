
// function sc()
// {
//     var xv1 = document.getElementsByClassName('v1');
//     var xv2 = document.querySelectorAll('v1');
//     var xp1 = document.querySelectorAll('path1');
//     var xp2 = document.querySelector('path2'); 
//      xv1.style.display="block";    
// }

//eel code
   var xv1 = document.getElementById('v1');
    var xv2 = document.getElementById('v2');
    var xp1 = document.getElementById('path1');
    var xp2 = document.getElementById('path2'); 
    var start = document.getElementById("start");
    // xv1.style.visibility="hidden"
    // xv2.style.visibility="hidden"
    // xp1.style.visibility="hidden"
    // xp2.style.visibility="hidden"
   
    start.addEventListener("click", function(){
        // xv1.classList.add("run");
          xv1.classList.toggle("run");
          xv2.classList.toggle("run");
          xp1.classList.toggle("run");
          xp2.classList.toggle("run");
        
      });
      

    // xv1.style.visibility='visible';
    // xv2.style.visibility='visible';
    // xp1.style.visibility='visible';
    // xp2.style.visibility='visible';
      function myMove() {
        var elem = document.getElementById("myAnimation");   
        var posx = 810;
        var posy = 200;
        var id = setInterval(frame, 10);
        function frame() {
          if (posy == 360 && posx==970) {
            clearInterval(id);
          } else {
            posx++; 
            posy++;
            elem.style.top = posy + 'px'; 
            elem.style.left = posx + 'px'; 
          }
        }
      }