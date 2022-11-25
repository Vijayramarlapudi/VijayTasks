class A{

    constructor(){
        console.log("Constructor from class A");
    }
}
class B extends A{

    constructor(){
        super();
        console.log("Constructor from class B")
    }
}

var b= new B();