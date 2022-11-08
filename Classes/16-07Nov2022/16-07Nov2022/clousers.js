// Clousers: 
// the clousers are nothing but nested functions.
// clousers allows us to create private functions.

    function outer(){

        var a=10, b=20;

        function inner1(){
            console.log(a);
            console.log(b);
        }

        inner1();
    }

    outer();