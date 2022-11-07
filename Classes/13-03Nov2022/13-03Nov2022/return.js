// return - to terminate functon

function f1(){

    var a=10;

    if(a < 20){
        console.log('before return keyword',a);
        return; //terminates the function
        console.log('after return keyword',a-2);
    }
    console.log('after return keyword',a+20);
}

f1();