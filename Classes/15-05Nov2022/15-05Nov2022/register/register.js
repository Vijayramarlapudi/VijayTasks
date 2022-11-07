function registerUser(){
    event.preventDefault();

    var email = document.getElementById("email").value;
    var pwd = document.getElementById("pwd").value;
    var dob = document.getElementById("dob").value;
    var color = document.getElementById("color").value;

    var user = {
        kEmail:email,
        kPwd:pwd,
        kDob:dob,
        kColor:color
    }

    window.localStorage.setItem('user',JSON.stringify(user))
    // console.log('user',user)

    if(localStorage.getItem('user')!==null){
        alert('registration successful')
    }else{
        alert('registration unsuccessful')
    }

}