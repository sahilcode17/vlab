.getvar button1 = document.get('#bt1');
var button2 = document.getElementById('#bt2');
var button3 = document.getElementById('#bt3');
var button4 = document.getElementById('#bt4');
var button5 = document.getElementById('#bt5');
var button6 = document.getElementById('#bt6');
var button7 = document.getElementById('#bt7');
var button8 = document.getElementById('#bt8');
var button9 = document.getElementById('#bt9');
var button10 = document.getElementById('#bt10');
var path2 = document.getElementById("line1frame")
var path4 = document.getElementById("line2frame")
var path6 = document.getElementById("line3frame")
var path8 = document.getElementById("line4frame")
var flag = 0;
arr = [1, 1, 1, 1, 0, 0, 0, 0, 0, 0];
var count = 0;

function wrongclick() {
    alert("Wrong frame selected");
}


function f1() {
    path2.style.animationPlayState = "running";
};


function f2() {
    if (!(arr[1])) {
        wrongclick();
        button2.style.background= 'red';
        flag = 0;
    } else {
        button2.style.background= 'green';
        count += 1;
        alert(count.valueOf())
    }
};

function f3() {
    if (!(arr[2])) {
        wrongclick();
        button3.style.background= 'red';
        flag = 0;
    } else {
        button3.style.background= 'green';
        count += 1;
        alert(count.valueOf())
    }
};

function f4() {
    if (!(arr[3])) {
        wrongclick();
        button4.style.background= 'red';
        flag = 0;
    } else {
        button4.style.background= 'green';
        count += 1;
        alert(count.valueOf())
    }
};

function f5() {
    if (!(arr[4])) {
        wrongclick();
        button5.style.background= 'red';
        flag = 0;
    } else {
        button5.style.background= 'green';
        count += 1;

    }
};

function f6() {
    if (!(arr[5])) {
        wrongclick();
        button6.style.background= 'red';
        flag = 0;
    } else {
        button6.style.background= 'green';
        count += 1;

    }
};

function f7() {
    if (!(arr[6])) {
        wrongclick();
        button7.style.background= 'red';
        flag = 0;
    } else {
        button7.style.background= 'green';
        count += 1;

    }
};

function f8() {
    if (!(arr[7])) {
        wrongclick();
        button8.style.background= 'red';
        flag = 0;
    } else {
        button8.style.background= 'green';
        count += 1;

    }
};

function f9() {
    if (!(arr[8])) {
        wrongclick();
        button9.style.background= 'red';
        flag = 0;
    } else {
        button9.style.background= 'green';
        count += 1;

    }
};

function f10() {

    if (!(arr[9])) {
        wrongclick();
        button10.style.background= 'red';
        flag = 0;
    } else {
        button10.style.background= 'green';
        count += 1;

    }
};



