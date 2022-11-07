// Function expression: if we can refer a function with a variable, then it is function expression.
// Anonymous function: function without name is called as anonymous function.


function f1(input){
    input(); 
}

function f2(input){
    input(); 
}

function f3(input){
    input(); 
}

// calling f1 function with reference variable.
x=function(){
    console.log("I am an anonymous function");
}

f1(x);
f2(x);
f3(x);


// realtime example

var users=["ravi","kiran","madhu"]

users.forEach(function(user){
    console.log(user);
})

