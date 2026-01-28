let mydate = new Date();
console.log(mydate);
console.log(typeof(mydate));
console.log(mydate.toString());
console.log(mydate.toISOString());
console.log(mydate.toLocaleString());
console.log(mydate.toLocaleDateString());


console.log(mydate.getDate());
console.log(mydate.getMonth());
console.log(mydate.getDay());
console.log(mydate.getFullYear());
console.log(mydate.getUTCDate());
console.log(mydate.getMilliseconds());
console.log(mydate.toLocaleDateString('en-US'));

let timestamp = Date.now();

console.log(timestamp);
console.log(timestamp/1000);

// Activite 2 to get proper time what need to do  