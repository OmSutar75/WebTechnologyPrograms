

const superheros = ['SuperMan','SpiderMan','BatMan','AquaMan'];

const v = 'DrDoom';

superheros.push(v);


console.log(superheros);

console.log(superheros[3]);
console.log(superheros[3][2]);


const ab = superheros.concat(v); // concat two arrays 

console.log(ab);

const anotherarray = [1,2,3,[4,5,6,[1,2,3,4]],7,8];

console.log(anotherarray);

const anotherarray1 = anotherarray.flat(Infinity);   // used to convert subarray into single array 
                                                    // faltten all levels no matter how deep 
                                                    //flat does not change original array it returns single array used to handle nested data

console.log(anotherarray1);

const anotherarray2 = anotherarray.flat(1);  //how depth a nested array should be falttened default value is one 
console.log(anotherarray2);

// data scripting using these methods 

console.log(Array.isArray("hacker")); // check given value is array or not 
console.log(Array.isArray(anotherarray2));

//

console.log(Array.from("Om"));      // converts and iterable object into array e.g.(string array list etc)

console.log(Array.from({'name':'Om'}));// convert iterable into array 
console.log(Object.keys('Name'));
console.log(Object.keys('Value'));

let scoreOne = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(scoreOne,score2,score3)); // create new array from give values no matter how many 
                                               // convert values to array 



