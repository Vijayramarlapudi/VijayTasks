function check_Format(overs){
    var result;

    if(overs==20){
        result="T20"
    }else if(overs==50){
        result="ODI"
    }else if(overs==90){
        result="Test"
    }else{
        result="Invalid format"
    }

    return result;
}

var output = check_Format(20);
console.log(output)