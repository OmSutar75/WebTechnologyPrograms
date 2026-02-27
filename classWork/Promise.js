/*promise

it is a object that represent future result of an async operation

promise means i promise to give result later 
e.g zomato application 


rpomise as three states 
1)pending(waiting)
2)resovled (success)
3)rejected (failed)

    pending
       |----------|
       resolve  rejected 

*/

let mypromise = new Promise((resolve,rejected )=>{
    let success = true;
    if(success)
    {
        resolve("data fetached"); // run when success
    }
    else{
        rejected('not featch'); //run when error
    }
});

mypromise.then((result)=>{
    console.log(result);
}).catch((error)=>
{
    console.log(error);
})



// activity : why promise is better than callback 

let prom = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("async task complete");
        resolve();
    },2000);

});

prom.then(()=>{
    console.log("promise is consume ");
});

prom.catch(()=>{
    console.log("promise not resolved");s
})

//example 2

const prom3 = new Promise((res,rej)=>
{
    setTimeout(()=>{
        res({'name':'Om',
            'id': 23
        });
    },2000);
});

prom3.then((user)=>{
    console.log(user);
});

// activity create 4 promise examples  how to write function inside promise


// featch
/*
featch is js building method used to make http request featch method return promises


*/

// example

// fetch('www.google.com'); -- it returns promise

fetch("https://jsonplaceholder.typicode.com/users/2").then((respnose)=>
{
    return respnose.json();
}).then((data)=>{
    console.log(data);
}).catch((error)=>
{
    console.log(error);
})

// activity async await example with fetch method 
// activity 3 fetch users display name in html list ,fetch post show only frist 5 records 
// create a feak promise manually resovle after 3 sec and reject after 3 sec 
// what is promise in js
// what is promise states 
// different between callback promises 
// whaat is fetch method in javascript 
// what does fetch return 
// why do we use response.json
// diff betw then and catch and async await 
// what is promise chaining
