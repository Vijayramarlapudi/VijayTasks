// arrow function
// var varName = () => {}

// var sqr = (a) => a * a;
// console.log(sqr(20));



function validate(username,password){
    if(username == undefined){
       return "username required";
    }
    if(username == "abc" && password  == "xyz"){
        return "valid";
    }
}

var output = validate("abc","xyz")


// multi line arrow function
var output = (username,password) => {

    if(username == undefined){
        console.log("username required");
    }
    if(username == "abc" && password  == "xyz"){
        console.log("valid");
    }
}

output("abc",'xyz');


// Arrow single line without () and {}
var cube = a => console.log(a*a*a);

cube(10);


// default and arrow
var x= (a=90) => console.log(a);

x(100);