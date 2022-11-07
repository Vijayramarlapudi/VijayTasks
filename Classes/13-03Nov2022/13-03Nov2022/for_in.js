// for in:
    // can be used to loop through objects.

    function f1(){
        const object = { a: 1, b: 2, c: 3 };

        for (let property in object) {
            console.log(object[property]);
        }
    }

    f1();
 