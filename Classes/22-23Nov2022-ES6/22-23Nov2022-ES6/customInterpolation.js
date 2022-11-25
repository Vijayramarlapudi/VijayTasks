// Custom Interpolation:

// Problem Statement:

// X Company wants to give hikes to their employees and want to comminucate 
// the same over emails.


var employees = [{
    name:"Ravi",
    role: "software developer",
    revised_role: "senior software engineer",
    manager: "kiran"
},

{
    name:"Rajesh",
    role: "Junior software developer",
    revised_role: "software engineer",
    manager: "Anil"
},
{
    name:"Anil",
    role: "test engineer",
    revised_role: "senior test engineer",
    manager: "Ramesh"
}
];

for(i=0;i<employees.length;i++){
    // console.log("Dear" + employees[i].name + ",")
    // console.log(`Dear ${employees[i].name},`)

    console.log(
        `
        Dear ${employees[i].name},
        
        
        Congratulations, you are promoted from ${employees[i].role}
        to ${employees[i].revised_role}.
        
        
        Best Regards,
        ${employees[i].manager}
        `
    )
}