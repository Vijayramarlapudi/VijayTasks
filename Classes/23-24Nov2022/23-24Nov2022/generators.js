// Generators:


// function f2(){
//     console.log('x')
//     console.log('Y')

//     console.log(1)

//     console.log(2)
// }

// f2();


function* f1(){
    console.log("line 1");
    console.log("line 2");
    yield "block-1";
    console.log("line 3");
    console.log("line 4");
    yield "block-2";
    console.log("line 5");
    yield "block-3";
    console.log("line 6");
    console.log("line 7");
}

function f2(){
    console.log('Hi, I am function 2')
}


var generator=f1();
generator.next();
f2();
generator.next()
