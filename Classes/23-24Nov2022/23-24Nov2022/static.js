// Static members:

// We can define the members(variables, methods) of a class by using static 
// keyword.

// when we make a member as static, then it belongs to a class,

// that means, it gets only one copy of the memory and it can be accessed 
// only through the class.


// class StaticDemo{

//    static name="ravi";
//    static address="hyderabad";
//       id;
//       age;

//     static getDetails(){
//         return StaticDemo.name+"\t"+ StaticDemo.address;
//     }
// }

// var sd= new StaticDemo();
// sd.id=900;
// console.log(sd.id);
// sd.name="kiran";
// console.log(sd.name);
// console.log(StaticDemo.name);



class StaticDemo{

   static name="ravi";
   static address="hyderabad";
      id;
      age;

    static getDetails(){
        return StaticDemo.name+"\t"+ StaticDemo.address;
    }
}

var sd= new StaticDemo();
sd.id=900;
console.log(sd.id);
sd.name="kiran";
console.log(sd);
console.log(StaticDemo.name);

console.log(StaticDemo.getDetails());