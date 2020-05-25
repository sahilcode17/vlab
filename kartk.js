var button1 = document.querySelector('#b1');
var button2 = document.querySelector('#b2');
var button3 = document.querySelector('#b3');
var button4 = document.querySelector('#b4');
var button5 = document.querySelector('#b5');
alert("Let's start, select the first frame that will be sent");

// import {myMove} from 'panda';
//last_call_yellow();
var flag = 0;
var arr = [1, 0, 0, 0, 0];
var count = 0;
// function myMove3() {
//         alert("My move starting");
//     flag=1;
//         var elem = document.getElementById("animate");   
//         var posx = 0;
//         var posy = 300;
//         var id = setInterval(frame, 5);
//         function frame() {
//           if (posx == 100 & posy == 400) {
//             clearInterval(id);
//           } else {
//             posx++;
//             posy++; 
//             elem.style.top = posy + "px"; 
//             elem.style.left = posx + "px"; 


//           }
//         }
//     flag=0;
//   }
//import { myMove } from './panda.js';
// myMove1();


// button 1
//  arr=[0,1,0,0,0];

// button 2

// if(count==2)
//                 {
//                     arr=[0,1,0,0,0];
//                 }
//                 else
//                 {
//                     arr=[0,0,1,0,0];
//                 }

// button 3

// arr=[0,0,0,1,0];

// button 4

//   if(count==5)
//                 {
//                     arr=[0,0,0,1,0];
//                 }
//                 else
//                 {
//                     arr=[0,0,0,0,1];
//                 }

// button 5

// arr=[0,0,0,0,0];


// mahekkkapur.js


//case 1

function mymove_k1() {
    alert("frame sent");
    myMove1_1();
    setTimeout(myMove2_1, 1000);


}

function myMove2_1() {
    alert("Ack Sent");
    var elem = document.getElementById("animate");
    var posx = 150;
    var posy = 150;
    var id = setInterval(frame, 5);

    function frame() {
        if (posx == 0 & posy == 300) {
            clearInterval(id);
            alert("The Packet is Successfully Sent And The Acknowledgement Is Received");
            alert("Select next frame");
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

    setTimeout(myMove2_2, 1000);
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
            alert("The Acknowledgement is lost !!! Now which frame will be sent?");
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
            alert("The frame got lost, now which frame will be sent")
        } else {
            posx++;
            posy++;
            elem.style.top = posy + "px";
            elem.style.left = posx + "px";


        }
    }

}




function wrongclick() {
    alert("Wrong frame selected");
}

function alertmsg() {
    alert("click on the NEXT FRAMES\n that would be sent from te reciever to ");
}


function last_call_yellow() {
    button1.style.backgroundColor = "yellow";
    button2.style.backgroundColor = "yellow";
    button3.style.backgroundColor = "yellow";
    button4.style.backgroundColor = "yellow";
    button5.style.backgroundColor = "yellow";
}

function overwrite() {
    button1.disabled = true;
    button2.disabled = true;
    button3.disabled = true;
    button4.disabled = true;
    button5.disabled = true;
    var millisecondsToWait = 4000;
    setTimeout(function() {
        button1.disabled = false;
        button2.disabled = false;
        button3.disabled = false;
        button4.disabled = false;
        button5.disabled = false;
        last_call_yellow();
    }, millisecondsToWait);

}


// button1.addEventListener("click" , function(){

//     if((arr[0])==0)
//     {

//         wrongclick();
//         button1.style.backgroundColor = "red";
//     }

//     else
//     {
//         button1.classList.add("butc")
//     }

// }) 

// function setColor(button1, color,arr[0]){

//     var property = document.getElementById(button);
//     if (arr[0] == 0){
//         property.style.backgroundColor = "#FFFFFF"

//     }
//     else{
//         property.style.backgroundColor = "#7FFF00"

//     }}



// while(count<3)
// {   count+=1;
// alert("WHILE LOOP");
if (flag == 0) {
    button1.onclick = function() {
        if (!(arr[0])) {
            wrongclick();
            button1.style.backgroundColor = "red";
            flag = 0;
        } else {
            button1.style.backgroundColor = "green";
            flag = 1;
            overwrite();
            mymove_k1();
            flag = 0;
            count = count + 1;
            arr = [0, 1, 0, 0, 0];

        }

    };
    button2.onclick = function() {
        if (!(arr[1])) {
            wrongclick();
            button2.style.backgroundColor = "red";
            flag = 0;
        } else {
            count = count + 1;
            flag = 0
            if (count == 2) {

                arr = [0, 1, 0, 0, 0];
                setTimeout(function() { button2.style.backgroundColor = "green";
                    overwrite() }, 1000);
                mymove_k2();
                last_call_yellow();
            } else {
                arr = [0, 0, 1, 0, 0];
                setTimeout(function() { button2.style.backgroundColor = "green";
                    overwrite() }, 1000);
                mymove_k1();
                last_call_yellow();
            }

        }

    };

    button3.onclick = function() {
        if (!(arr[2])) {
            wrongclick();
            button3.style.backgroundColor = "red";
            flag = 0;
        } else {
            count += 1;
            arr = [0, 0, 0, 1, 0];
            button3.style.backgroundColor = "green";
            flag = 1;
            overwrite();
            mymove_k1();
            window.setTimeout(backoff, 1000);
            last_call_yellow();



        }

    };

    button4.onclick = function() {
        if (!(arr[3])) {
            wrongclick();
            button4.style.backgroundColor = "red";
            flag = 0;
        } else {
            flag = 1;
            count = count + 1;
            if (count == 5) {
                setTimeout(function() { button4.style.backgroundColor = "green";
                    overwrite() }, 750);
                mymove_k3();
                last_call_yellow();
                arr = [0, 0, 0, 1, 0];
            } else {
                setTimeout(function() { button4.style.backgroundColor = "green";
                    overwrite() }, 1000);
                mymove_k1();
                last_call_yellow();
                arr = [0, 0, 0, 0, 1];
            }

        }

    };

    button5.onclick = function() {
        if (!(arr[4])) {
            wrongclick();
            button5.style.backgroundColor = "red";
            flag = 0;
        }

        // else
        // {
        //     button5.style.backgroundColor = "green";
        //     flag=1;
        //     overwrite();
        //     mymove_k1();
        //     last_call_yellow();
        //     count=count+1;
        //     arr=[0,0,0,0,0];

        // }
        else {
            arr = [0, 0, 0, 0, 0];
            button5.style.backgroundColor = "green";
            flag = 1;
            overwrite();
            mymove_k1();
            flag = 0;
            count = count + 1;

        }

    };

};

//}