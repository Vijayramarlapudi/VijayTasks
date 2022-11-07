// do-while: similar to while, 

// syntax:

// do{

// }while(test-condition);

i = 20
do{
    console.log(i)
    i++;
}while(i<10)


var isServerInitialized=false;

var i=0;

do{
    if(isServerInitialized==false){
        console.log("server initialized")
        isServerInitialized=true;
    }
    
    console.log(i);
    i++;
}while(i<=10)
