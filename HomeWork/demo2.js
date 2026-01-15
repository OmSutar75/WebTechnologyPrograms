// This demonstrate Difference Between let var and const variable declearation method 


const pi = 3.14;

console.log(pi);


// pi = 45 -->Can't be Reassign if it is declear as const 

var a= 10 // it is legacy method of declearing variable in js 
           // it make overhead when using same variable name in different block 
          // it as higher scope and it also do not give error if it is redecleared in different block

//e.g

let b = 20;
console.log("Outer block Before Value of a :"+a);
console.log("Outer block Before Value of b :"+b);
{
    var a = 100;// decleared inside a block 
    let b = 200;
    console.log("Inner block value of a :"+a);
    console.log("Inner block value of b :"+b);
}
console.log("Outer block After Value of a :"+a);// this will override the value of a in outer block due to inner block so therefore refered to use let
                                    // which as local scope
    
console.log("Outer block After Value of b "+b);