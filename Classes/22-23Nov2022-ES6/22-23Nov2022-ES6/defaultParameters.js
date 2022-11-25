// Default Parameter Values:

function f1(a=10,b=20){
    console.log(a,b);
}

f1(100,200);


// 
function login(username="guest",password="guest"){
    if(username  == "guest" && password  == "guest"){
        console.log("guest login!!");
    }
    if(username  == "abc" && password  == "xyz"){
        console.log("abc logged in!!");
    }
    console.log(arguments)
}

login();
