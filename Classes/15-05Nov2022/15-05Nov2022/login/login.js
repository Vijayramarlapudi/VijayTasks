function login(){
    event.preventDefault();

    var email = document.getElementById("email").value;
    var pwd = document.getElementById("pwd").value;

    if(localStorage.getItem('user')!==null){
        var rUser = JSON.parse(localStorage.getItem('user'))

        if(email==rUser.kEmail && pwd==rUser.kPwd){
            sessionStorage.setItem('uname',rUser.kEmail)
            window.location.href = "../dashboard/dashboard.html"
        }else{
            alert('invalid credentials')
        }

    }else{
        alert('no user found with provided email id')
    }

}