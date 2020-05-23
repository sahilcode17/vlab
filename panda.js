

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