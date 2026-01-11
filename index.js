function login() {

    var name = "sachindujayshan256@gmail.com";
    var password = "12345";

    var input_name = document.getElementById('name').value;
    var input_password = document.getElementById('password').value;

    if(input_name==name && input_password==password){
        alert("Login Successful!");
        
        window.location.href = "dashboard.html";
    }else{
        alert("Incorrect! Try again");
    }
}