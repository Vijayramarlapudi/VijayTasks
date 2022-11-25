// Rest parameter:

function f1(a,b,...restParams){
    console.log(a,b);
    // console.log(restParams)

    var x = restParams
    x.push(60)
    console.log(x)
    console.log(arguments)
}
f1(10,20,30,40,50);