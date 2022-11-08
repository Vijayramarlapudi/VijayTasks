// call: 
//     calling a function from one object to another object
//     borrowing a function from another object
//     Note: keys must be same in all the objects.


// object contains properties, methods
var employee={
    name:"ravikumar", //property -- (key,value(string/number/boolean/array/object))
    address:"hyderabd", //property -- (key,value(string/number/boolean/array/object))
    //property -- (key,value(function/method))
    details:function(){
        return this.name + "\t" + this.address
    } 
}

// console.log(employee.details())

// var employee1={
//     name:"kumar",
//     address:"sec",
//     details:function(){
//         return this.name + "\t" + this.address
//     } 
// }

// console.log(employee1.details())

var employee1={
    name:"kumar",
    address:"sec",
}

console.log(employee.details.call(employee1))