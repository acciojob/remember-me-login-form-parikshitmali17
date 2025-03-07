// //your JS code here. If required.
// let submit=document.querySelector("#submit");
// let ExistingLogInBtn=document.querySelector("#existing");
// let rememberCheckbox=document.getElementById("checkbox");
// let username=document.querySelector("#username").value;
// let password =document.getElementById("password");
// let isSaved=false;

// submit.addEventListiner('click',()=>{
// 	alert(`Logged in as ${username}`)
// 	if(rememberCheckbox){
// 		localStorage.setItem(JSON.Stringfy({user: username, pass:password}))
// 	isSaved=true;
// 		alert(`Logged in as ${username}`)
// 	}else{
// 		localStorage.clear('')	
// 	}

// 	(isSaved) ? ExistingLogInBtn : ExistingLogInBtn.style.display=='none'
	
// })

let submit = document.querySelector("#submit");
let existingLogInBtn = document.querySelector("#existing");
let rememberCheckbox = document.getElementById("checkbox");
let usernameInput = document.querySelector("#username");
let passwordInput = document.getElementById("password");

// Check if credentials exist in localStorage
document.addEventListener("DOMContentLoaded", () => {
    let savedCredentials = localStorage.getItem("credentials");
    if (savedCredentials) {
        existingLogInBtn.style.display = "block";
    }
});

// Submit button event listener
submit.addEventListener("click", (event) => {
    event.preventDefault();  // Prevent form from refreshing the page
    
    let username = usernameInput.value.trim();
    let password = passwordInput.value.trim();

    if (username === "" || password === "") {
        alert("Please enter both username and password.");
        return;
    }

    alert(`Logged in as ${username}`);

    if (rememberCheckbox.checked) {
        localStorage.setItem("credentials", JSON.stringify({ user: username, pass: password }));
        existingLogInBtn.style.display = "block"; // Show "Login as existing user" button
    } else {
        localStorage.removeItem("credentials"); // Remove saved credentials
        existingLogInBtn.style.display = "none";
    }
});

// Existing user login event listener
existingLogInBtn.addEventListener("click", () => {
    let savedCredentials = JSON.parse(localStorage.getItem("credentials"));
    if (savedCredentials) {
        alert(`Logged in as ${savedCredentials.user}`);
    }
});



