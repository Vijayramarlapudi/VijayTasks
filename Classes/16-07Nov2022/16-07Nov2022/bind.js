// bind: 
// it can be handled only individual parameters

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

const handler = employee.details.bind(e2,'dev','js',5);
console.log(handler())