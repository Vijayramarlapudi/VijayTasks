// Call by reference:
// When we pass non primitive types as an argument to a function,
// then the address/reference will be passed instedad of the value.
    
    var a=[10,20,40];

    function f1(x){
        x.push(100);
    }

    f1(a); // call by reference

    console.log(a.length);