var Customer = /** @class */ (function () {
    function Customer() {
    }
    Customer.prototype.withdraw = function () {
        console.log("withdraw");
    };
    Customer.prototype.deposit = function () {
        console.log("deposit");
    };
    return Customer;
}());
var customer1 = new Customer();
customer1.accountBalance = 9000;
customer1.accountNumber = 1568619798846;
customer1.mobileNumber = 8985865865;
customer1.name = 'ravi';
console.log(customer1);
customer1.deposit();
customer1.withdraw();
var customer2 = new Customer();
customer2.accountBalance = 9000;
customer2.accountNumber = 1568619798846;
customer2.mobileNumber = 8985865865;
customer2.name = 'venu';
console.log(customer2);
customer1.deposit();
customer1.withdraw();
