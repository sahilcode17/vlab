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
var count = 0;

function mymove_k1() {
    alert("frames sent");
    myMove1_1();
    setTimeout(myMove2_1, 1000);
}

function myMove1_1() {

    var elem1 = document.getElementById("animate");
    var elem2 = document.getElementById("animate");
    var elem3 = document.getElementById("animate");
    var elem4 = document.getElementById("animate");
    var elem5 = document.getElementById("animate");
    var posx1 = 0;
    var posy1 = 0;
    var posx2 = 15;
    var posy2 = 15;
    var posx3 = 30;
    var posy3 = 30;
    var posx4 = 45;
    var posy4 = 45;
    var posx5 = 60;
    var posy5 = 60;

    var id1 = setInterval(frame1, 2.5);

    function frame1() {
        if (posx1 == 75 & posy1 == 75) {
            clearInterval(id1);
        } else {
            posx1++;
            posy1++;
            elem1.style.top = posy1 + "px";
            elem1.style.left = posx1 + "px";
        }
    }

    var id2 = setInterval(frame2, 2.5);

    function frame2() {
        if (posx2 == 90 & posy2 == 90) {
            clearInterval(id2);
        } else {
            posx2++;
            posy2++;
            elem2.style.top = posy2 + "px";
            elem2.style.left = posx2 + "px";
        }
    }

    var id3 = setInterval(frame3, 2.5);

    function frame1() {
        if (posx1 == 75 & posy == 75) {
            clearInterval(id);
        } else {
            posx1++;
            posy1++;
            elem1.style.top = posy1 + "px";
            elem1.style.left = posx1 + "px";
        }
    }

    var id1 = setInterval(frame1, 2.5);

    function frame1() {
        if (posx1 == 75 & posy == 75) {
            clearInterval(id);
        } else {
            posx1++;
            posy1++;
            elem1.style.top = posy1 + "px";
            elem1.style.left = posx1 + "px";
        }
    }
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

    if (count == 5): {
        overwrite();
        mymove_k1();
    }
    if ()

};