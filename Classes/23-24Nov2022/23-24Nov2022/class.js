class Customer{

    name;
    accountNumber;
    balance;
    mbno;

    constructor(){
        console.log("constructor called");
    }

    getAccountDetails(){
        return this.name+"\t"+ this.accountNumber+"\t"+ this.balance+"\t"+ this.mbno;
    }
}

var ravi = new Customer

ravi.name="ravi"
ravi.accountNumber=16165
ravi.balance=10000
ravi.mbno=9010484733

console.log(ravi);


// Inheritance:

// It is the process where a class inherits / reuses the other class 
// resources.

// we use extends keyword to inherit a class. 

class Bank{
    bankname ="icici";
    city="hyderabad";
}

// Parent
class Branch extends Bank{
    branch="madhapur";
    ifscode="ICICI0965687";
}

// Child
class Customer1 extends Branch{
    name;
    accountNumber;
    balance;
    mbno;

     getAccountDetails(){
         return this.name+"\t"+ this.accountNumber+"\t"+ this.balance+"\t"+ this.mbno;
     }
}

var kiran = new Customer1

kiran.name="Kiran"
kiran.accountNumber=15656
kiran.balance=100000
kiran.mbno=8985865865

console.log(kiran)
