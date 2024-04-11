document.addEventListener("DOMContentLoaded", () => {
    var userObject = {
        username: "",
        password: "",
    }
    userObject.username = prompt("Enter a username");
    if(userObject.username == ""){
        return false
    }
    while (userObject.username.length > 10){
        userObject.username = prompt("Enter a username that is less than ten characters");  
    }
    userObject.password = prompt("Enter a password");
    if (userObject.password == ""){
        return false
    }
    while (userObject.password.length <= 6){
        userObject.password = prompt("Enter a password that is greater than six");  
    }

    var confirmPassword = prompt("Confirm Password");

    while (confirmPassword !== userObject.password){
        confirmPassword = prompt("Confirm Password");
    }

    console.log("You are there everything is valid");
    console.log(userObject.username, userObject.password);
});





