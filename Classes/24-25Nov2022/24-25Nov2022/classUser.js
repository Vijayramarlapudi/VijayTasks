var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.login = function () {
        console.log("login");
    };
    User.prototype.logout = function () {
        console.log("logout");
    };
    return User;
}());
var user1 = new User();
user1.username = 'venu';
user1.password = "venu";
user1.email = "venu@gmail.com";
user1.mobilenumber = 7207838143;
console.log(user1);
user1.login();
user1.logout();
