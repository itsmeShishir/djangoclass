//function
function shishir(name){
    console.log("hi " + name);
}
function a(){
    return "hello";
}
let c = a();
console.log(c);


shishir("gautam");
shishir("sita");
shishir("ram");
shishir("hari");
console.log("hi");



function add(x,y,z,i){
    console.log(x+y+z+i);
}
add(3,2,3,2);

function sub(x,y,z,i){
    return (x-y-z-i);
}
console.log(sub(3,2,3,2));



//Es6 = 2015
function f(v=10){
    console.log(v);
}

f();
f(20);

// Anormous function
let u = function(){
    console.log("Anormous")
}
u();

//arrow function
let h = (a=10, c= 20)=> a+c;
console.log(h());
