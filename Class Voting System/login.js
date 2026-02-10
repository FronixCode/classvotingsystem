const matricInput = document.getElementById("matric");
const passwordInput = document.getElementById("password");



function login(){
  if(!matricInput.value || !passwordInput.value){
    alert("All fields are required");
    return;
  }

  


  let users = JSON.parse(localStorage.getItem("users")) || [];

  let user = users.find(
    u => u.matric === matricInput.value );


   

  

  if(!user){
    alert("Invalid login details");
    return;
  }


  
  if (user.password !== passwordInput.value) {
    alert("Wrong password");
    return;
  }

    

  if(user.voted){
    alert("You have already voted");
    return;
  }

  localStorage.setItem("currentUser", JSON.stringify(user));
  location.href = "voting.html";
}