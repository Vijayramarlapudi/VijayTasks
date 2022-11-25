// spread operator:

function f1(a,b,c,d,...restparams){ //Rest Parameters
    console.log(a,b,c,d);
    console.log(restparams)
    console.log(arguments)
}

var arr = [10,20,30,40,50,60]

f1(...arr); //Spread Operator