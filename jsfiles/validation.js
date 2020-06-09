$(document).ready(function(){
  $("#myBtn").click(function(){
    $("#myModal").modal();
  });
});


function validate(callback){
    var username = document.getElementById("usrname").value;
    var password = document.getElementById("psw").value;
    
    if(username =="admin" && password =="12345"){
        callback();
    }
    
    else{
      alert("Your attempt is failed. Try with USERNAME: admin & PASSWORD: 12345");
      return true;
      }
    }
    function display(){
    window.location="todo.html"; //Redirecting to another page
    return false;
    }