// apply: 

var employee={
    name:"ravikumar",
    address:"hyderabd",
    details: function(role,skill,a){
        return this.name + "\t" + this.address + "\t" + role + "\t" + skill  + "\t" + a 
    }
}

var e2={
    name:"venu",
    address:"Guntur",
}

// working with array using "call"
// var array=['dev','js']
// console.log(employee.details.call(e2,'dev','js',5));


// working with array using "apply"
var array=['dev','js',5]
console.log(employee.details.apply(e2,array));
