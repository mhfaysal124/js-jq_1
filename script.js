function darkTheme(){
  document.body.style.backgroundColor = "black";
};
function lightTheme(){
  document.body.style.backgroundColor = "#c3c3c3";
};
function fontItalick(){
  document.body.style.fontStyle = "italic";
}


//======== Selector =========
function idText(){
  document.getElementById('idText').innerHTML = 
      "Mehedi Hasan Faysal.";
}

function btn2(){
  document.getElementsByClassName('btn2')[0].innerHTML = 
      "World Wide Web";
}

function btn3(){
  document.getElementsByName('btn3')[0].innerHTML = 
      "Mehedi Hasan Faysal";
}

function btn4(){
  document.getElementsByTagName('h3')[0].innerHTML = 
      "Mehedi Hasan Faysal"
}

//===== Events ========

function event1(){
  document.getElementById('event1').innerHTML =
      "Mehedi Hasan Faysal.";
};

function event2(x){
  x.style.width = "200px";
};
function event22(x){
  x.style.width = "150px";
};

function event3(){
  document.getElementById('event3').innerHTML = 
      "Mehedi Hasan Faysal."
};

function event4(){
  document.getElementById('event4').innerHTML =
      "Mehedi Hasan Faysal."
};

function event5(){
  document.getElementById('event5').innerHTML = 
  "Mehedi Hasan Faysal";
};
function imgLight(){
  var image = document.getElementById('imgLight');

  if(image.src.match('bulbon')){
      image.src='img/pic_bulboff.gif';
     
  }
  else{
      image.src='img/pic_bulbon.gif';  
  }
};





//===== output mehtods ========

var a, b, c;
    a = 5;
    b = 6;
    c = a + b;
function outputOne(){
  document.getElementById('outputOne').innerHTML =
      c;
};

//window.alert("HI, I am here with the window alert !!");
//alert("Hello!! This is only alert");

console.log("Hi this is console.log")


//===== Oparators ========


function opt(){
  document.getElementById('opt').innerHTML =
      "= (x+y) * (x-y)";
};
function optOne(){  
  document.getElementById('optOne').innerHTML =
      "= 7 * 5";
};
function opttwo(){  
  document.getElementById('opttwo').innerHTML =
      "= 35.";
};

var x, y, z, xy;
    x = 10;
    y = 20;
    z = 25;
    xy = 55;
    xy++;
    x1 = x + y;
document.getElementById('math').innerHTML =
    "x + y = " + x1;
document.getElementById('math1').innerHTML =
    "x * z = " + x * z;
document.getElementById('math2').innerHTML =
    "x / y = " + x / y;
document.getElementById('math3').innerHTML =
    "x * z + y = " + (x * z + y);
document.getElementById('math3').innerHTML =
    "xy++  = " + xy;
document.getElementById('math4').innerHTML =
    "x ** 2 = " + x ** 2;
document.getElementById('math5').innerHTML =
    "math.paw(x,2) = " + Math.pow(x,2);

//===== Functions ========

function myFunctions(f1){
  document.getElementById('f1').innerHTML =
      "myFunctions('f1')";
};



function myFunction(p1, p2){
  return p1 * p2;
}document.getElementById('f2').innerHTML =
    myFunction(2 , 4);



function myFunction1(p3, p4){
  return p3 / p4;
}document.getElementById('f3').innerHTML =
    "(p3 / p4) or " + "myFunction1(8, 2) = " + 
    myFunction1(8, 2);



function myFunction2(m1, m2, m3, m4){
  return m1 + m3 * m4 - m2;
}document.getElementById('f4').innerHTML =
      myFunction2(3, 4, 5, 6);



function myFunction3(s1, s2){
  return s1 * s2;
}var s = myFunction3(3,4);
  document.getElementById('f5').innerHTML =
      "s1 * s2 = " +
      s + " ..................[when s1= 4, s2= 4] ";



function myFunction4(t){
  return (150/3) * (t - 5);
}
document.getElementById('f6').innerHTML =
      myFunction4 + ' = ' + myFunction4(15);