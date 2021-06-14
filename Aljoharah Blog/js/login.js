function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ( username == "Admin" && password == "Admin123"){
    alert ("Login successfully");
    window.location = "Article.html"; 
    return false;
    }else{
        alert("The entered username or password is incorrect")
    }}