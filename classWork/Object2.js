// singalton objects 

const user = new Object();

console.log(user);

const user1 = {}; // non singalton object 

user1.id = 1234;
user1.name = "Hacker OM ";
user1.islogin = true;

console.log(user1);


// object inside object 


const user3 = {
    email : "Hackeromsutar@gmail.com",
    username :{
        fullName :{
            fname : "Om",
            sname :"Sutar"
        }

    }
}

console.log(user3);
console.log(user3.username.fullName.fname); 