let myArr = [0,1,2,3,4,5];


console.log(`My Array values : ${myArr}`);
console.log(`My Array check type : ${typeof(myArr)}`);


const arr = new Array(0,1,2);

console.log(arr[1]);

// Array methods 

arr.push(7);

console.log(arr); // add values in array 

arr.pop(); // remove last element from array 

arr.unshift(9); // shifts all elements and add at first position 

console.log(arr); 


arr.shift(); // remove the first element in array 

console.log(arr)

console.log(arr.includes(1)) // used to check element in array 


console.log(arr.indexOf(1));

// split and slice  

// The split() method is exclusively a string method. It divides a string into an ordered list of substrings based on a specified separator and returns the substrings as a new array. The original string is not modified.

// Syntax: string.split(separator, limit)