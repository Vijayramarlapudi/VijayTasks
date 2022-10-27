var a=100; //declaring a variable - assigning some value;
var b=200; //declaring a variable - assigning some value;

function f1(){
    console.log(a) //100
    console.log(b) //200
    a=20
    b=6   
    console.log(a)
    console.log(b)
};

function f2(){
    console.log(a) //100
    console.log(b)  //200  
};

f2();
f1();
