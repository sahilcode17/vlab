var x, y;
var X, Y;
var flag = 0;
var count = 0;
var x1, y1, a1, b1, x2, y2, aa, bb, x4, y4, a4, b4, x5, y5, a5, b5;

function setup() {
    createCanvas(800, 800);
    x = 400;
    y = 0;
    X = 1;
    Y = 0.5;
    a = 800;
    b = 200;
    A = -1;
    B = 0.5;
    x1 = 400;
    y1 = 0;
    a1 = 800;
    b1 = 200;
    x2 = 400;
    y2 = 0;
    a2 = 800;
    b2 = 200;
    x3 = 400;
    y3 = 0;
    a3 = 800;
    b3 = 200;
    x4 = 400;
    y4 = 0;
    x5 = 400;
    y5 = 0;
    a5 = 800;
    b5 = 200;
    x6 = 400;
    y6 = 0;
    a6 = 800;
    b6 = 200;

    arr = [1, 0, 0, 0, 0];
    button1 = createButton('1');
    button1.style('font-size', '17px');
    button1.style('background-color', 'yellow');
    button1.position(10, 19);
    button1.mousePressed(f1);
    button2 = createButton('2');
    button2.style('font-size', '17px');
    button2.style('background-color', 'yellow');
    button2.position(30, 19);
    button2.mousePressed(f2);
    button3 = createButton('3');
    button3.style('font-size', '17px');
    button3.style('background-color', 'yellow');
    button3.position(50, 19);
    button3.mousePressed(f3);
    button4 = createButton('4');
    button4.style('font-size', '17px');
    button4.style('background-color', 'yellow');
    button4.position(70, 19);
    button4.mousePressed(f4);
    button5 = createButton('5');
    button5.style('font-size', '17px');
    button5.style('background-color', 'yellow');
    button5.position(90, 19);
    button5.mousePressed(f5);
    //button6 = createButton('6');
    // button6.style('font-size', '17px');
    // button6.style('background-color', 'yellow');
    // button6.position(110, 19);
    // button6.mousePressed(f6);
    // button7 = createButton('7');
    // button7.style('font-size', '17px');
    // button7.style('background-color', 'yellow');
    // button7.position(130, 19);
    // button7.mousePressed(f7);
    // button8 = createButton('8');
    // button8.style('font-size', '17px');
    // button8.style('background-color', 'yellow');
    // button8.position(150, 19);
    // button8.mousePressed(f8);
    // button9 = createButton('9');
    // button9.style('font-size', '17px');
    // button9.style('background-color', 'yellow');
    // button9.position(170, 19);
    // button9.mousePressed(f9);
    // button10 = createButton('10');
    // button10.style('font-size', '17px');
    // button10.style('background-color', 'yellow');
    // button10.position(190, 19);
    // button10.mousePressed(f10);


}

function overwrite() {
    button1.disabled = true;
    button2.disabled = true;
    button3.disabled = true;
    button4.disabled = true;
    button5.disabled = true;
    // button6.disabled = true;
    // button7.disabled = true;
    // button8.disabled = true;
    // button9.disabled = true;
    // button10.disabled = true;
    var millisecondsToWait = 4000;
    setTimeout(function() {
        button1.disabled = false;
        button2.disabled = false;
        button3.disabled = false;
        button4.disabled = false;
        button5.disabled = false;
        // button6.disabled = false;
        // button7.disabled = false;
        // button8.disabled = false;
        // button9.disabled = false;
        // button10.disabled = false;
        yellowch();
    }, millisecondsToWait);}


function yellowch() {
    button1.style('background-color', 'yellow');
    button2.style('background-color', 'yellow');
    button3.style('background-color', 'yellow');
    button4.style('background-color', 'yellow');
    button5.style('background-color', 'yellow');
    // button6.style('background-color', 'yellow');
    // button7.style('background-color', 'yellow');
    // button8.style('background-color', 'yellow');
    // button9.style('background-color', 'yellow');
    // button10.style('background-color', 'yellow');

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
        if ((count == 1) || (count == 2) || (count == 3) || (count == 4) || (count == 5) || (count == 6)|| (count == 7)) {
           overwrite();
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
        if ((count == 1) || (count == 2) || (count == 3) || (count == 4) || (count == 5) || (count == 6)|| (count == 7)) {
            overwrite();
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
        if ((count == 1) || (count == 2) || (count == 3) || (count == 4) || (count == 5) || (count == 6)|| (count == 7)) {
            overwrite();
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
        if ((count == 1) || (count == 2) || (count == 3) || (count == 4) || (count == 5) || (count == 6)|| (count == 7)) {
            overwrite();
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
        if ((count == 1) || (count == 2) || (count == 3) || (count == 4) || (count == 5) || (count == 6)|| (count == 7)) {
            overwrite();
         }
    }

};

// function f6() {
//     if (!(arr[5])) {
//         wrongclick();
//         button6.style('background-color', 'red');
//         flag = 0;
//     } else {
//         button6.style('background-color', 'green');
//         count += 1;
//         if ((count == 4) || (count == 5) || (count == 6) || (count == 10) || (count == 14) || (count == 18)) {
//             overwrite();
//         }

//     }
// };

// function f7() {
//     if (!(arr[6])) {
//         wrongclick();
//         button7.style('background-color', 'red');
//         flag = 0;
//     } else {
//         button7.style('background-color', 'green');
//         count += 1;
//         if ((count == 4) || (count == 5) || (count == 6) || (count == 10) || (count == 14) || (count == 18)) {
//             overwrite();
//         }

//     }
// };

// function f8() {
//     if (!(arr[7])) {
//         wrongclick();
//         button8.style('background-color', 'red');
//         flag = 0;
//     } else {
//         button8.style('background-color', 'green');
//         count += 1;
//         if ((count == 4) || (count == 5) || (count == 6) || (count == 10) || (count == 14) || (count == 18)) {
//             overwrite();
//         }

//     }
// };

// function f9() {
//     if (!(arr[8])) {
//         wrongclick();
//         button9.style('background-color', 'red');
//         flag = 0;
//     } else {
//         button9.style('background-color', 'green');
//         count += 1;
//         if ((count == 4) || (count == 5) || (count == 6) || (count == 10) || (count == 14) || (count == 18)) {
//             overwrite();
//         }

//     }
// };

// function f10() {

//     if (!(arr[9])) {
//         wrongclick();
//         button10.style('background-color', 'red');
//         flag = 0;
//     } else {
//         button10.style('background-color', 'green');
//         count += 1;
//         if ((count == 4) || (count == 5) || (count == 6) || (count == 10) || (count == 14) || (count == 18)) {
//             overwrite();
//         }

//     }
// };

function alert1() {
    document.querySelector(".right").innerHTML="Select the next frame to be sent..."
}

cnt1 = 0;
cnt2 = 0;
cnt3 = 0;
cnt4 = 0;
cnt5 = 0;
cnt6 = 0;
cnt7=0; 


function coloursq1()
{
    stroke(400);
    fill('red');
    square(60, 100, 40);
    
}
function coloursq4()
{
    stroke(400);
    fill(255, 204, 0);
    square(60, 150, 40);
    
}

function lines(){
    strokeWeight(4);
    stroke('black');
    line(400, 0, 400, 500);
    line(799, 0, 799, 500);
}

function texts(){
    fill(0);
    text('Reciever', 740, 640);
    text('Sender', 405, 640);
//     text('1', 380, 15);
//    text('5', 780, 215);
   
    text('represents a normal frame sent',110,125);
    text('represents an ACK',110,175);
    textSize(25);
    stroke(0);
    strokeWeight(2);
    text('STOP-AND-WAIT ARQ',20,375);
    stroke(400);
    strokeWeight(4);
}

document.querySelector(".right").innerHTML="select the first frame to be sent..."

function draw() {
    background(400);
    strokeWeight(4);
   
    // text('6', 380, 215);
    // text('7', 380, 255);
    // text('8', 380, 295);
    // text('9', 380, 335);
    // text('10', 380, 375);
   
    coloursq1();
    coloursq4();
    texts();
    textSize(15);
    
    lines();
    textSize(15);
    stroke('black');
    fill(400);


    strokeWeight(4);
    stroke('black');
    if (count == 1) { cnt1 = 1; }
    if (count == 2) { cnt2 = 1; }
    if (count == 3) { cnt3 = 1; }
    if (count == 4) { cnt4 = 1; }
    if (count == 5) { cnt5 = 1; }
    if (count == 6) { cnt6 = 1; }
    if (count == 7) { cnt7 = 1; }

    if (cnt1 == 1) {

        if (x <= 5000) {
            stroke('red');
            x = x + X; //400  1
            y = y + Y; //0    0.1
            if (x <= 1000) {
                line(x, y, 400, 0);
                if(x<=770){xx=x; yy=y;}
                else{xx=770; yy=185;}
                fill('red');
                square(xx,yy,30);
                fill(400);
                textSize(15);
                text('1', xx+7.5, yy+15);
            }
        fill('white');
        if (x >= 950) {
            stroke(255, 204, 0);
            if (a >= 400) {
                a = a + A;
                b = b + B;
                line(a, b, 800, 200);
                if(a>=430){aa=a-30; bb=b;}
                else{aa=400; bb=382.5;}
                fill(255, 204, 0)
                square(aa,bb,30);
                fill(400)
                textSize(15);
                text('A1', aa, bb+15);
            }
            fill(400)
            // alert("select next frame");
            if (a == 400) {
                arr = [0, 1,0,0,0];
               
                document.querySelector(".right").innerHTML="ACK 1 received, select the next frame to be sent.."
                
            }
        }
    }}

    if (cnt2 == 1) {
        
        if (x <= 5000) {
            stroke('red');
            x1 = x1 + X; //400  1
            y1 = y1 + Y; //0    0.1
            if (x1 <= 1000) {
                line(x1, y1, 400, 0);
                if(x1<=770){xx=x1; yy=y1;}
                else{xx=770; yy=185;}
                fill('red');
                square(xx,yy,30);
                fill(400);
                textSize(15);
                text('2', xx+7.5, yy+15);
            }
        fill('white');
        if (x1 >= 950) {
            stroke(255, 204, 0);
            if (a1 >= 600) {
                a1 = a1 + A;
                b1 = b1 + B;}
            if(cnt3!=1){
                line(a1, b1, 800, 200);
                if(a1>=630){aa=a1-30; bb=b1;}
                else{aa=600; bb=282.5;}
                fill(255, 204, 0)
                square(aa,bb,30);
                fill(400);
                textSize(15);
                text('A2', aa, bb+15);   
            }         
            if (a1 == 600) {
                arr = [0, 1,0,0,0];
              
                document.querySelector(".right").innerHTML="A2 Stopped in between, Select the next frame.."
                
            }
        }
    }}
    if (cnt3 == 1) {
        if (x2 <= 5000) {
            stroke('red');
            x2 = x2 + X; //400  1
            y2 = y2 + Y; //0    0.1
            if (x2 <= 1000) {
                line(x2, y2, 400, 0);
                if(x2<=770){xx=x2; yy=y2;}
                else{xx=770; yy=185;}
                fill('red');
                square(xx,yy,30);
                fill(400);
                textSize(15);
                text('2', xx+7.5, yy+15);
            }
        fill('white');
        if (x2 >= 950) {
            stroke(255, 204, 0);
            if (a2 >= 400) {
                a2 = a2 + A;
                b2 = b2 + B;
                line(a2, b2, 800, 200);
                if(a2>=430){aa=a2-30; bb=b2;}
                else{aa=400; bb=382.5;}
                fill(255, 204, 0)
                square(aa,bb,30);
                fill(400)
                textSize(15);
                text('A2', aa, bb+15);
            }
            fill(400)
            // alert("select next frame");
            if (a2 == 400) {
                arr = [0, 0,1,0,0];
               
                document.querySelector(".right").innerHTML="ACK 2 received, select the next frame to be sent"

            }
        }
    }
    }
    if (cnt4 == 1) {
        if (x3 <= 5000) {
            stroke('red');
            x3 = x3 + X; //400  1
            y3 = y3 + Y; //0    0.1
            if (x3 <= 1000) {
                line(x3, y3, 400, 0);
                if(x3<=770){xx=x3; yy=y3;}
                else{xx=770; yy=185;}
                fill('red');
                square(xx,yy,30);
                fill(400);
                textSize(15);
                text('3', xx+7.5, yy+15);
            }
        fill('white');
        if (x3 >= 950) {
            stroke(255, 204, 0);
            if (a3 >= 400) {
                a3 = a3 + A;
                b3 = b3 + B;
                line(a3, b3, 800, 200);
                if(a3>=430){aa=a3-30; bb=b3;}
                else{aa=400; bb=382.5;}
                fill(255, 204, 0)
                square(aa,bb,30);
                fill(400)
                textSize(15);
                text('A3', aa, bb+15);
            }
            fill(400)
            // alert("select next frame");
            if (a3 == 400) {
                arr = [0, 0,0,1,0];
               
                document.querySelector(".right").innerHTML="ACK 3 received, select the next frame to be sent"
            }
        }
    }
    }
    if (cnt5 == 1) {
        stroke('red');
        if (cnt6!=1) {
        if (x4 <= 600) {
            x4 = x4 + X; //400  1
            y4 = y4 + Y;} //0    0.1
            
            line(x4, y4, 400, 0);
            if(x4<=570){xx=x4; yy=y4;}
            else{xx=570; yy=85;}
            fill('red');
            square(xx,yy,30);
            fill(400);
            textSize(15);
            text('4', xx+7.5, yy+15);
            if (x4 == 600) {
                arr = [0, 0,0,1,0];
                
                document.querySelector(".right").innerHTML="Frame 4 got lost, which frame will be sent next?"

            }
        }     
    }

    if (cnt6 == 1) {
        if (x5 <= 5000) {
            stroke('red');
            x5 = x5 + X; //400  1
            y5 = y5 + Y; //0    0.1
            if (x5 <= 1000) {
                line(x5, y5, 400, 0);
                if(x5<=770){xx=x5; yy=y5;}
                else{xx=770; yy=185;}
                fill('red');
                square(xx,yy,30);
                fill(400);
                textSize(15);
                text('4', xx+7.5, yy+15);
            }
        fill('white');
        if (x5 >= 950) {
            stroke(255, 204, 0);
            if (a5 >= 400) {
                a5 = a5 + A;
                b5 = b5 + B;
                line(a5, b5, 800, 200);
                if(a5>=430){aa=a5-30; bb=b5;}
                else{aa=400; bb=382.5;}
                fill(255, 204, 0)
                square(aa,bb,30);
                fill(400)
                textSize(15);
                text('A4', aa, bb+15);
            }
            fill(400)
            // alert("select next frame");
            if (a5 == 400) {
                arr = [0, 0,0,0,1];
              
                document.querySelector(".right").innerHTML="ACK 4 received, select the next frame to be sent"
            }
        }
        }}

        if (cnt7 == 1) {
            if (x6 <= 5000) {
                stroke('red');
                x6 = x6 + X; //400  1
                y6 = y6 + Y; //0    0.1
                if (x6 <= 1000) {
                    line(x6, y6, 400, 0);
                    if(x6<=770){xx=x6; yy=y6;}
                    else{xx=770; yy=185;}
                    fill('red');
                    square(xx,yy,30);
                    fill(400);
                    textSize(15);
                    text('5', xx+7.5, yy+15);
                }
            fill('white');
            if (x6 >= 950) {
                stroke(255, 204, 0);
                if (a6 >= 400) {
                    a6 = a6 + A;
                    b6 = b6 + B;
                    line(a6, b6, 800, 200);
                    if(a6>=430){aa=a6-30; bb=b6;}
                    else{aa=400; bb=382.5;}
                    fill(255, 204, 0)
                    square(aa,bb,30);
                    fill(400)
                    textSize(15);
                    text('A5', aa, bb+15);
                }
                fill(400)
                // alert("select next frame");
                if (a6 == 400) {
                    arr = [0, 0,0,0,0];
                    
                    document.querySelector(".right").innerHTML="ACK 5 received, ALL FRAMES SENT!"
                }
            }
            }}
};