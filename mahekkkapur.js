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

alert("Let's start, select the first five frames to be sent");

// import {myMove} from 'panda';
//last_call_yellow();
var flag = 0;
var arr = [1, 1, 1, 1, 1, 0, 0, 0, 0, 0];

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



function last_call_yellow() {
    button1.style.backgroundColor = "yellow";
    button2.style.backgroundColor = "yellow";
    button3.style.backgroundColor = "yellow";
    button4.style.backgroundColor = "yellow";
    button5.style.backgroundColor = "yellow";
    button6.style.backgroundColor = "yellow";
    button7.style.backgroundColor = "yellow";
    button8.style.backgroundColor = "yellow";
    button9.style.backgroundColor = "yellow";
    button10.style.backgroundColor = "yellow";
}


function GB_5() {
    alert("in gb5");
    GB5_1();
    setTimeout(GB5_2, 5000);
    last_call_yellow()

}


function GB5_1() {
    alert("in gb1");
    var elem1 = document.getElementById("animate");
    var elem2 = document.getElementById("animate");
    var elem3 = document.getElementById("animate");
    var elem4 = document.getElementById("animate");
    var elem5 = document.getElementById("animate");
    var posx1 = 0;
    var posy1 = 0;
    var posx2 = 1;
    var posy2 = 1;
    var posx3 = 2;
    var posy3 = 2;
    var posx4 = 3;
    var posy4 = 3;
    var posx5 = 4;
    var posy5 = 4;

    //     var id1 = setInterval(frame1, 5);

    //     function frame1() {
    //         if (posx1 == 150 & posy1 == 5) {
    //             clearInterval(id1);
    //         } else {
    //             posx1++;
    //             posy1++;
    //             elem1.style.top = posy1 + "px";
    //             elem1.style.left = posx1 + "px";
    //         }
    //     }

    //     var id2 = setInterval(frame2, 5);

    //     function frame2() {
    //         if (posx2 == 150 & posy2 == 6) {
    //             clearInterval(id2);
    //         } else {
    //             posx2++;
    //             posy2++;
    //             elem2.style.top = posy2 + "px";
    //             elem2.style.left = posx2 + "px";
    //         }
    //     }

    //     var id3 = setInterval(frame3, 5);

    //     function frame3() {
    //         if (posx1 == 150 & posy == 7) {
    //             clearInterval(id3);
    //         } else {
    //             posx3++;
    //             posy3++;
    //             elem3.style.top = posy3 + "px";
    //             elem3.style.left = posx3 + "px";
    //         }
    //     }

    //     var id4 = setInterval(frame4, 5);

    //     function frame4() {
    //         if (posx4 == 150 & posy4 == 8) {
    //             clearInterval(id4);
    //         } else {
    //             posx4++;
    //             posy4++;
    //             elem4.style.top = posy4 + "px";
    //             elem4.style.left = posx4 + "px";
    //         }
    //     }

    //     var id5 = setInterval(frame5, 5);

    //     function frame5() {
    //         if (posx4 == 150 & posy4 == 9) {
    //             clearInterval(id5);
    //         } else {
    //             posx5++;
    //             posy5++;
    //             elem5.style.top = posy5 + "px";
    //             elem5.style.left = posx5 + "px";
    //         }
    //     }
    // }

    // function GB5_2() {
    //     alert("Ack Sent for frame 1");
    //     arr = [0, 0, 0, 0, 0, 1, 0, 0, 0, 0];
    //     var elem1 = document.getElementById("animate");
    //     var posx1 = 75;
    //     var posy1 = 75;
    //     var id1 = setInterval(frame1, 1);

    //     function frame1() {
    //         if (posx1 == 0 & posy1 == 150) {
    //             clearInterval(id1);
    //             alert("Select next frame");
    //         } else {
    //             posx1--;
    //             posy1++;
    //             elem1.style.top = posy1 + "px";
    //             elem1.style.left = posx1 + "px";
    //         }
    //     }


    // }







    var count = 0;
    if (count == 0) {
        alert(0);
    }

    if (flag == 0) {
        button1.onclick = function() {
            if (!(arr[0])) {
                wrongclick();
                button1.style.backgroundColor = "red";
                flag = 0;
            } else {
                button1.style.backgroundColor = "green";
                count += 1;
            }

        };
        button2.onclick = function() {
            if (!(arr[1])) {
                wrongclick();
                button2.style.backgroundColor = "red";
                flag = 0;
            } else {
                button2.style.backgroundColor = "green";
                count = count + 1;
            }

        };

        button3.onclick = function() {
            if (!(arr[2])) {
                wrongclick();
                button3.style.backgroundColor = "red";
                flag = 0;
            } else {
                count += 1;
                button3.style.backgroundColor = "green";
            }

        };

        button4.onclick = function() {
            if (!(arr[3])) {
                wrongclick();
                button4.style.backgroundColor = "red";
                flag = 0;
            } else {
                button4.style.backgroundColor = "green";
                count = count + 1;


            }

        };

        button5.onclick = function() {
            if (!(arr[4])) {
                wrongclick();
                button5.style.backgroundColor = "red";
                flag = 0;
            } else {
                button5.style.backgroundColor = "green";
                count = count + 1;
                if (count == 5) {
                    alert("cnt=5")
                    overwrite();
                    GB_5();
                };

            }

        };

        button6.onclick = function() {
            if (!(arr[5])) {
                wrongclick();
                button6.style.backgroundColor = "red";
                flag = 0;
            } else {
                button6.style.backgroundColor = "green";
                count += 1;
            }

        };
        button7.onclick = function() {
            if (!(arr[6])) {
                wrongclick();
                button7.style.backgroundColor = "red";
                flag = 0;
            } else {
                button7.style.backgroundColor = "green";
                count = count + 1;
            }

        };

        button8.onclick = function() {
            if (!(arr[7])) {
                wrongclick();
                button8.style.backgroundColor = "red";
                flag = 0;
            } else {
                count += 1;
                button8.style.backgroundColor = "green";
            }

        };

        button9.onclick = function() {
            if (!(arr[8])) {
                wrongclick();
                button9.style.backgroundColor = "red";
                flag = 0;
            } else {
                button9.style.backgroundColor = "green";
                count = count + 1;


            }

        };

        button10.onclick = function() {
            if (!(arr[9])) {
                wrongclick();
                button10.style.backgroundColor = "red";
                flag = 0;
            } else {
                button10.style.backgroundColor = "green";
                count = count + 1;

            }

        };



    };