function getTimeStamp(){
    var date = new Date();

    var d = date.getDate()+1+"/"+(date.getMonth()+1)+"/"+date.getFullYear();

    var t = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();

    return d + "\t" + t;
}

console.log(getTimeStamp());