// console.log("Hello world");
// // class and object
// class Person{
//     constructor(name, age, address){
//         this.name = name;
//         this.age = age;
//         this.address = address;
//     }
// }
// console.log(Person)
// let c = new Person();
// c.name = "Shishir";
// console.log(c.name);
// c.address = "manamaiju";
// console.log(c.address);
// c.age = 27;
// console.log(c.age);
// d = new Person("shishir", "20", "shankhamul")
// console.log(d.name);


class Animal{
    name;
    isWild;
    breed;
    constructor(name, isWild, breed){
        this.name = name;
        this.isWild = isWild;
        this.breed = breed;
    }
}
let e = new Animal("tiger", true, "bengal tiger")
console.log(e);

//es6 => 2015
///rest operator and spread operator
// backtrick
// arrow function
// destricturing
// for of
// constructor
// this

//arrow function
let a = ()=>{
    console.log("first arrow function");
}
a();
b = [1,2,3,4,5];
b.forEach(element => {
    console.log(element);
});
console.log("for of in js")
for(index of b){
    console.log(index);
}
for(i= 0; i< b.length; i++){
    console.log(b[i]);
}

//rest operators and spread operators
//spread operators
let f = [6,7,8,9,10];
console.log(...b,...f);
//rest operators
function g(name, ...other){
    console.log(name);
    console.log(other.toString());
}
g("hari", "manamaiju","nepal",'earth');