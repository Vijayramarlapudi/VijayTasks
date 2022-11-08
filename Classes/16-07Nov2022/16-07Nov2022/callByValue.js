// Call by value:
// If we pass primitive values as arguemnts while invoking a function then 
// the primitive values will be passed instead of address /reference of a variables.
    
    var a=10, b=20;

    function f1(x,y){
        x=30,
        y=40
    }

    f1(a,b); // call by value

    console.log(a+b);

