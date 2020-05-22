var button1 = document.querySelector('#b1');
var button2 = document.querySelector('#b2');
var button3 = document.querySelector('#b3');
var button4 = document.querySelector('#b4');
var button5 = document.querySelector('#b5');
last_call_yellow();


var arr = [1,0,1,0,1];

function wrongclick()
{
    alert("Wrong frame selected");
}

function alertmsg()
{
    alert("click on the NEXT FRAMES\n that would be sent from te reciever to ");
}


function last_call_yellow()
{
    
    button1.style.backgroundColor = "yellow";
    button2.style.backgroundColor = "yellow";
    button3.style.backgroundColor = "yellow";
    button4.style.backgroundColor = "yellow";
    button5.style.backgroundColor = "yellow";
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

button1.onclick = function ()
{
    if(!(arr[0]))
    {
        wrongclick();
        button1.style.backgroundColor = "red";
    }

    else
    {
        button1.style.backgroundColor = "green";
    }

};
button2.onclick = function ()
{
    if(!(arr[1]))
    {
        wrongclick();
        button2.style.backgroundColor = "red";
    }

    else
    {
        button2.style.backgroundColor = "green";
    }

};

button3.onclick = function ()
{
    if(!(arr[2]))
    {
        wrongclick();
        button3.style.backgroundColor = "red";
    }

    else
    {
        button3.style.backgroundColor = "green";
    }

};

button4.onclick = function ()
{
    if(!(arr[3]))
    {
        wrongclick();
        button4.style.backgroundColor = "red";
    }

    else
    {
        button4.style.backgroundColor = "green";
    }

};

button5.onclick = function ()
{
    if(!(arr[4]))
    {
        wrongclick();
        button5.style.backgroundColor = "red";

    }

    else
    {
        button5.style.backgroundColor = "green";
    }

};

   