
function verifyPassword() {  
  var pw = document.getElementById("pswd").value;  
  var msg = document.getElementById("name").value;
  var  yo = document.querySelector('.yoyo');

  //check empty password field  
  if(pw === "" || msg === "") {  
     document.getElementById("message").innerHTML = "**Fill the password please!"; 

     return false;  
  }
 
 //minimum password length validation  
  if(pw.length < 8) {  
     document.getElementById("message").innerHTML = "**Password length must be atleast 8 characters";  
     return false;  
  }  
  
//maximum length of password validation  
  if(pw.length > 15) {  
     document.getElementById("message").innerHTML = "**Password length must not exceed 15 characters";  
     return false;  
  } 
    else {  
 
        document.querySelector(".yo").innerHTML= 'password coreect';
             document.querySelector(".yo").fontcolor("green");
   
  }  
 
 }