var x, y;
var X, Y;
var flag = 0;
var count = 0;
var x1, y1, a1, b1, x2, y2, aa, bb;

function setup() {
    createCanvas(800, 800);
    x = 400;
    y = 0;
    X = 1;
    Y = 0.1;
    a = 800;
    b = 40;
    A = -1;
    B = 0.1;
    x1 = 400;
    y1 = 160;
    a1 = 800;
    b1 = 80;
    x2 = 400;
    y2 = 200;
    aa = 0;
    bb = 0;

    arr = [1, 1, 1, 1, 0, 0, 0, 0, 0, 0];
    button1 = createButton('1');
    button1.style('font-size', '10px');
    button1.style('background-color', 'yellow');
    button1.position(10, 19);
    button1.mousePressed(f1);
    button2 = createButton('2');
    button2.style('font-size', '10px');
    button2.style('background-color', 'yellow');
    button2.position(30, 19);
    button2.mousePressed(f2);
    button3 = createButton('3');
    button3.style('font-size', '10px');
    button3.style('background-color', 'yellow');
    button3.position(50, 19);
    button3.mousePressed(f3);
    button4 = createButton('4');
    button4.style('font-size', '10px');
    button4.style('background-color', 'yellow');
    button4.position(70, 19);
    button4.mousePressed(f4);
    button5 = createButton('5');
    button5.style('font-size', '10px');
    button5.style('background-color', 'yellow');
    button5.position(90, 19);
    button5.mousePressed(f5);
    button6 = createButton('6');
    button6.style('font-size', '10px');
    button6.style('background-color', 'yellow');
    button6.position(110, 19);
    button6.mousePressed(f6);
    button7 = createButton('7');
    button7.style('font-size', '10px');
    button7.style('background-color', 'yellow');
    button7.position(130, 19);
    button7.mousePressed(f7);
    button8 = createButton('8');
    button8.style('font-size', '10px');
    button8.style('background-color', 'yellow');
    button8.position(150, 19);
    button8.mousePressed(f8);
    button9 = createButton('9');
    button9.style('font-size', '10px');
    button9.style('background-color', 'yellow');
    button9.position(170, 19);
    button9.mousePressed(f9);
    button10 = createButton('10');
    button10.style('font-size', '10px');
    button10.style('background-color', 'yellow');
    button10.position(190, 19);
    button10.mousePressed(f10);


}

function yellowch() {
    button1.style('background-color', 'yellow');
    button2.style('background-color', 'yellow');
    button3.style('background-color', 'yellow');
    button4.style('background-color', 'yellow');
    button5.style('background-color', 'yellow');
    button6.style('background-color', 'yellow');
    button7.style('background-color', 'yellow');
    button8.style('background-color', 'yellow');
    button9.style('background-color', 'yellow');
    button10.style('background-color', 'yellow');

}


function wrongclick() {
    alert("Wrong frame selected");
}


count = 0;

function f1() {
    if (!(arr[0])) {
        wrongclick();
        button1.style('background-color', 'red');
        flag = 0;
    } else {
        button1.style('background-color', 'green');
        count += 1;
        if ((count == 4) || (count == 5) || (count == 6) || (count == 10) || (count == 14) || (count == 18)) {
            yellowch();
        }

    }
};


function f2() {
    if (!(arr[1])) {
        wrongclick();
        button2.style('background-color', 'red');
        flag = 0;
    } else {
        button2.style('background-color', 'green');
        count += 1;
        if ((count == 4) || (count == 5) || (count == 6) || (count == 10) || (count == 14) || (count == 18)) {
            yellowch();
        }
    }
};

function f3() {
    if (!(arr[2])) {
        wrongclick();
        button3.style('background-color', 'red');
        flag = 0;
    } else {
        button3.style('background-color', 'green');
        count += 1;
        if ((count == 4) || (count == 5) || (count == 6) || (count == 10) || (count == 14) || (count == 18)) {
            yellowch();
        }
    }
};

function f4() {
    if (!(arr[3])) {
        wrongclick();
        button4.style('background-color', 'red');
        flag = 0;
    } else {
        button4.style('background-color', 'green');
        count += 1;
        if ((count == 4) || (count == 5) || (count == 6) || (count == 10) || (count == 14) || (count == 18)) {
            yellowch();
        }
    }

};

function f5() {
    if (!(arr[4])) {
        wrongclick();
        button5.style('background-color', 'red');
        flag = 0;
    } else {
        button5.style('background-color', 'green');
        count += 1;
        if ((count == 4) || (count == 5) || (count == 6) || (count == 10) || (count == 14) || (count == 18)) {
            yellowch();
        }
    }

};

function f6() {
    if (!(arr[5])) {
        wrongclick();
        button6.style('background-color', 'red');
        flag = 0;
    } else {
        button6.style('background-color', 'green');
        count += 1;
        if ((count == 4) || (count == 5) || (count == 6) || (count == 10) || (count == 14) || (count == 18)) {
            yellowch();
        }

    }
};

function f7() {
    if (!(arr[6])) {
        wrongclick();
        button7.style('background-color', 'red');
        flag = 0;
    } else {
        button7.style('background-color', 'green');
        count += 1;
        if ((count == 4) || (count == 5) || (count == 6) || (count == 10) || (count == 14) || (count == 18)) {
            yellowch();
        }

    }
};

function f8() {
    if (!(arr[7])) {
        wrongclick();
        button8.style('background-color', 'red');
        flag = 0;
    } else {
        button8.style('background-color', 'green');
        count += 1;
        if ((count == 4) || (count == 5) || (count == 6) || (count == 10) || (count == 14) || (count == 18)) {
            yellowch();
        }

    }
};

function f9() {
    if (!(arr[8])) {
        wrongclick();
        button9.style('background-color', 'red');
        flag = 0;
    } else {
        button9.style('background-color', 'green');
        count += 1;
        if ((count == 4) || (count == 5) || (count == 6) || (count == 10) || (count == 14) || (count == 18)) {
            yellowch();
        }

    }
};

function f10() {

    if (!(arr[9])) {
        wrongclick();
        button10.style('background-color', 'red');
        flag = 0;
    } else {
        button10.style('background-color', 'green');
        count += 1;
        if ((count == 4) || (count == 5) || (count == 6) || (count == 10) || (count == 14) || (count == 18)) {
            yellowch();
        }

    }
};

function alert1() {
    alert("Select the next frame to be sent");
}

cnt1 = 0;
cnt2 = 0;
cnt3 = 0;
cnt4 = 0;
cnt5 = 0;


function draw() {
    background(400);
    strokeWeight(4);
    stroke('black');
    line(400, 0, 400, 800);
    line(799, 0, 799, 800);
    if (count == 4) { cnt1 = 1; }
    if (count == 5) { cnt2 = 1; }
    if (count == 6) { cnt3 = 1; }
    if (count == 10) { cnt4 = 1; }
    if (count == 14) { cnt5 = 1; }
    if (count == 18) { cnt6 = 1; }

    if (cnt1 == 1) {

        if (x <= 5000) {
            stroke('red');
            x = x + X; //400  1
            y = y + Y; //0    0.1
            if (x <= 1000) {
                line(x, y, 400, 0);
            }
            if (cnt2 != 1) {
                line(x, y + 40, 400, 40);
            }
            line(x, y + 120, 400, 120);
            // if (x == 600) {
            //     fixx = x;
            //     fixy = y;

            // }
            // if (x >= 600) {
            //     line(fixx, fixy, 400, 80);
            // }
            // if (x < 600) {
            //     line(x, y + 80, 400, 80);
            // }

            if (x >= 600) {
                xx = 600;
                yy = 20;
            } else {
                xx = x;
                yy = y
            }

            line(xx, yy + 80, 400, 80);
        }
        if (x >= 950) {
            stroke(255, 204, 0);
            if (a >= 400) {
                a = a + A;
                b = b + B;
                line(a, b, 800, 40);
            }
            // alert("select next frame");
            if (a == 400) {
                arr = [0, 0, 0, 0, 1, 0, 0, 0, 0, 0];
                alert1();
            }
        }
    }

    if (cnt2 == 1) {
        // line(x, y + 40, 400, 40);
        // line(fixx, fixy, 400, 80);
        // line(x, y + 120, 400, 120);
        stroke('red');
        if (x1 <= 5000) {
            x1 = x1 + X;
            y1 = y1 + Y;
            line(x1, y1, 400, 160);

        }
        if (x1 <= 5000) {
            stroke(255, 204, 0);
            if (a1 >= 400) {
                a1 = a1 + A;
                b1 = b1 + B;
                line(a1, b1, 800, 80);
            }
            if (a1 == 400) {
                arr = [0, 0, 0, 0, 0, 1, 0, 0, 0, 0];
                alert1();
            }


        }
    }
    if (cnt3 == 1) {
        stroke('red');
        if (x2 <= 5000) {
            x2 = x2 + X;
            y2 = y2 + Y;
            line(x2, y2, 400, 200);

        }
        if (x2 == 800) {
            arr = [0, 0, 1, 1, 1, 1, 0, 0, 0, 0];
            alert("The packet 3 is lost, Select the next frames to be sent");


        }

    }
    if (cnt4 == 1) {
        cnt1 = 0;
        cnt2 = 0;
        cnt3 = 0;
        x = 400;
        y = 80;
        if (x <= 5000) {
            stroke('red');
            x = x + X; //400  1
            y = y + Y; //0    0.1

            line(x, y, 400, 80);
            line(x, y + 40, 400, 120);

            line(x, y + 120, 400, 200);
            line(x, y + 80, 400, 160);
        }
        if (x >= 950) {
            stroke(255, 204, 0);
            if (a >= 400) {
                a = a + A;
                b = b + B;
                line(a, b, 800, 40);
                line(a, b + 40, 800, 80);
                line(a, b + 80, 800, 120);
                line(a, b + 120, 800, 160);
            }
            // alert("select next frame");
            if (a == 400) {
                arr = [0, 0, 0, 0, 0, 0, 1, 1, 1, 1];
                alert1();
            }
        }
    }
    if (cnt5 == 1) {
        cnt4 = 0;
        x = 400;
        y = 360;
        if (x <= 5000) {
            stroke('red');
            x = x + X; //400  1
            y = y + Y; //0    0.1
            if (cnt6 != 1) {
                if (x <= 1000) {
                    line(x, y, 400, 240);
                }
                line(x, y + 40, 400, 280);

                line(x, y + 120, 400, 360);
                line(x, y + 80, 400, 320);
            }
        }
        if (x >= 950) {
            stroke(255, 204, 0);
            if (a >= 400) {
                a = a + A;
                b = b + B;
                if (a >= 600) { aa = a; } else {
                    aa = 600;
                    bb = 300;
                }
                if (cnt6 != 1) {
                    line(aa, bb, 800, 280);
                }
            }
            // alert("select next frame");
            if (a == 400) {
                arr = [0, 0, 0, 0, 0, 0, 1, 1, 1, 1];
                alert("ack 7 lost, select the next frames")
            }
        }
    }



};