let myobj ={
    "name" : "Om Narayan Sutar",
    // [mySymbol] : "SKey",   // --> creating symbol in object 
    "age" : 21,
    "location":"ichalkarnagi"
    ,"email" : "omsutar@gmail.com"
    ,"isLogin": false 
    ,"lastloginDay" : ['Mon',"Tue","Wed"]   // object letrals (key value pairs)
}

// there are three types of object literals , second contructor third singalton 

// when we create constrcutor then it creates singlaton object it means itself object 
// when we create object leteral then singloton object not create 
// object constructor create singlaton 
// obj leteral --> not singlaton
// obj constructor --> singlaton


console.log(myobj.email);
// console.log(myobj["full Name"]);
// console.log(typeof(myobj[mySymbol]));

// symbol example 

const mysymbol = Symbol("Key");

const myobj2 = {
    [mysymbol] : "ONS"
}

console.log(myobj2);
console.log(typeof(myobj2));



myobj.email = "HackerOmsutar@gmail.com";

console.log(myobj.email);

// Object.freeze(myobj);  // to make object can not be changable 

myobj.age = 20;
console.log(myobj.age);

myobj.greeting = function (){
    console.log("hello Hackers");
}

console.log(myobj.greeting());

