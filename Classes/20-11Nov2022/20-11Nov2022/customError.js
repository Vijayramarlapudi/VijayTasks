// Custom Error using 'throw' keyword:

var i=0;
// var x="abc";

// console.log(i - x);

try{
    if(i < 6){
        throw new Error("I is less than the value 6")
    }
}
catch(error){
    console.log('error',error.message)
}