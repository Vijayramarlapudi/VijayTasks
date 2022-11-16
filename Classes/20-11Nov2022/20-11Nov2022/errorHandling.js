// Handling Error:

var a=100;

console.log(a);
// console.log(b);
try{
    console.log("Open Database")
    console.log(b);
}
catch(error){
    console.log('error',error.message);
}
finally{
    console.log("Close Database")
}

console.log(a+2)