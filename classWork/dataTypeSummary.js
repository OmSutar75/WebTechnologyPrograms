

// non primative types 
    // 1)Array
    // 2)Object
    // 3)Functions

const anotherId = Symbol("123");
console.log(typeof(anotherId));

const id =123;

console.log(id===anotherId);

// js is dynamic in nature

// Array 

const  cars = ['tata','audi','toyata','suzuki'];

const num = [1,2,3]


const obj = {
        Filename : "Js",
        age : 24
};

console.log(obj.Filename);

// Functions 

// Activity 1 : Functions Deep Study declare ,defination ,calling 




function addTwo(){
    console.log("2+2 :"+(2+2))
}

addTwo();
const func = function (){
    console.log("hello Hackers");
}
func();