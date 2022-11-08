// function constructor: 
// can be used to create objects from a template.
// Note: keys must be same in all the objects.

// Multiple objects

    // var emp1={
    //     name:"ravikumar",
    //     address:"hyderabad",
    //     company:"abc techs"
    // }

    // var emp2={
    //     name:"venu",
    //     address:"hyderabad",
    //     company:"abc techs"
    // }

    // var emp3={
    //     name:"gopal",
    //     address:"hyderabad",
    //     company:"abc techs"
    // }

    // console.log(emp1)
    // console.log(emp2)
    // console.log(emp3)


    // template/blueprint/prototype
    function Employee(name, address, company){
        this.name=name;
        this.addres=address;
        this.company=company;
    }

    
   var emp1 = new Employee('venu','hyd','abc tech')
   var emp2 = new Employee('ravi','bng','tech')

   console.log(emp1)
   console.log(emp2)