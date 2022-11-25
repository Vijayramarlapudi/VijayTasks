class User{
    username:string;
    password:string;
    email:string;
    mobilenumber:number;

    login(){
        console.log("login");
    }

    logout(){
        console.log("logout");
    }

}

var user1=new User();

user1.username='venu';
user1.password="venu";
user1.email="venu@gmail.com";
user1.mobilenumber=7207838143;

console.log(user1);
user1.login();
user1.logout();