function f1(){
    // 2 seconds
    setTimeout(function(){
        console.log('Step 1')
    },2000)
    console.log('Step 2')
}

f1();
