//sync js -->code execute line by line 
// each task wait to end previous task to finish(blocking nature)


// js by default sync and single threaded 

console.log("start");

let add = (a,b)=>
{
    return a+b;
}

let result = add(10,20);

console.log(result);

console.log("end");

// Async in Javascript 

/*
some task take time like api calls, file reading ,featch data from database and timer

js does not wait it move to next line behaviour(non blocking)

used 
1)featching data from server 
2)reading file 
3)set time out 
4)api calls 


example 




*/


console.log("Start");
setTimeout(()=>{
    console.log("Hello");
},1000);

console.log("End");

/*
settime out is async it wait 1 second me will js print end after print hello 
activitys
1)guess the output game 
2)blocking and non blocking 2 example
3)real time example of async and sync
4)api featch method 
*/