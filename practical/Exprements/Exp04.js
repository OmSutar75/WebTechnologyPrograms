
function submitButtonClick(){

    let emailRegex = "/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ "
    let passRegex = "/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])[a-zA-Z0-9^#?!@$%^&*-]+$/"
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let pass = document.getElementById("password");

    // console.log("working ... ");

    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";

    let isValid = true;

    if(name.value == "")
    {
        document.getElementById("nameError").innerHTML = "Name should not be blank";
        isValid = false;
    }
     if(email.value == "" )
    {
        document.getElementById("emailError").innerHTML = "email should not be blank";
        isValid = false;
    }
     if(pass.value == "")
    {
        document.getElementById("passwordError").innerHTML = "Password should not be blank";
        isValid = false;
    }

    if(pass.value.length() < 5)
    {
        document.getElementById("passwordError").innerHTML = "password should now be less than 6";
        isValid = false;
    }

    if(!emailRegex.test(email.value))
    {
        document.getElementById("emailError").innerHTML = "email is not valid";
        isValid = false;
    }

    if(!passRegex.test(pass.value))
    {
        document.getElementById("passwordError").innerHTML = "Password must be strong ";
        isValid = false;
    }

}