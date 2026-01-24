//act 1  Create one array fucntion and object and print using console.log

let arr = [1,2,3,4,5];
obj = {
    fname:"Om",
    
}

function hello(){
    console.log("hello world");
}

console.log(arr);
console.log(obj);
console.log(hello());


//act 2  reverse number 

reverseNumber = (num)=>{

    var num1  = num;
    var res = 0;
    var q = 0;
    while(num1 != 0){
        q = num1%10;
        res = res*10 + q;
        num1 = Math.floor(num1/10);
    }
    console.log(res);
    return res;
}

reverseNumber(1234);
//act 3  check  number palidrome
function palidrome(val){
    let rev = reverseNumber(val);

    if(val == rev)
        console.log("Value is palidrome ");
    else
        console.log("Value is not palidrome");

}

palidrome(121);
//act 4  fibonacci series 

function fibonacci(val){
    let first = 0;
    let second = 1;
    let next = 0;
    let res;
    while(next <= val){
        console.log(first);
        next = first + second;
        first = second;
        second = next;
    }
}

fibonacci(10);


//act 5  find largest element in array 

function findLargest(arr){
    let i = 1 ;
    let res = arr[0];
    while(i<arr.length){

        if(arr[i]>res){
            res = arr[i];
        }
        i++;
    }
    return res;
}
let arr1 = [1,2,3,4,5,6];
console.log("Max in array : "+findLargest(arr));

//act 6  remove duplicate  element in array 

function removeDuplicate(arr){
    let set = new Set();

    let i = 0;
    while(i<arr.length){
        
        if(!set.has(arr[i])){
            set.add(arr[i]);
        }
        i++;
    }
    
    console.log(set);
    
}

arr1 = [1,2,2,3,3,4,5,10];
console.log("Removed duplicate in array : ");
removeDuplicate(arr1);
//act 7  find missing  number array

function findMissingElement(arr){
    let val = arr[0];
    let res = new Array();

    for(let i = 1 ;i<arr.length;i++){
        
        if(arr[i] != val )
        {
            while(val+1 < arr[i]){
                val++;
                res.push(val);
            }
            val = arr[i];
        }
    }
    console.log("Array element are : "+arr);

    console.log("Missing element are : "+res);
}

findMissingElement(arr1);
//act 8  reverse a string 

function reverseString(str){
    let rev = "";
    for(let i = str.length-1;i>=0;i--){

        rev = rev + str[i];
    }
    console.log("Reverse string :"+rev);
    return rev;

}

reverseString("Hacker");
//act 9  count vawels in string  

function countVowel(str){
    str.toLowerCase();
    let count = 0;
    for(let i = 0 ;i<str.length;i++){
        if(str[i] == 'a' || str[i] == 'e' || str[i] == 'o' || str[i] == 'u')
        {
            count++;
        }
    }
    console.log("Count : "+count);
    return count;
}

countVowel("Hacker");
//act 10  check palidrome in string 
function checkPalidromeString(str){
    
    if(str == reverseString(str)){
        console.log("String is Palindrome ....");
    }
    else{
        console.log("String is not a Palindrome ....")

    }
}
checkPalidromeString("MOM");
// act 11 check pirme number 

function checkPrime(num){
    let flag = true;
    for(let i = 2 ;i <= (num/2) ;i++)
    {
        if(num%i == 0){
            flag = false;
            break;
        }
    }
    if(flag ){
        console.log("Number is Prime");
    }
    else{
        console.log("Number is not prime ");
    }
}

checkPrime(7);
//act 12 factorial number 

function factorialOfNum(num){
    if(num == 1)
        return 1;
    else
    {
        return num*factorialOfNum(num-1);
    }
}
console.log("Factorial of Number is :"+factorialOfNum(5));
//act 13 find even or odd 

function evenOrOdd(num){
    return (num%2 == 0 )? "Number is Even" : "Number is Odd";
}

console.log(evenOrOdd(11));


//act 14 func to find sum of array  

function sumOfArray(arr){
    let sum = 0;
    for(let i = 0 ;i<arr.length;i++){
        sum += arr[i];
    }
    return sum;
}

console.log("Sum of Array is "+sumOfArray([1,2,3,4,5,6]));

 



