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

// Selecting elements
let submit = document.querySelector("#submit");
let existingLogInBtn = document.querySelector("#existing");
let rememberCheckbox = document.getElementById("checkbox");
let usernameInput = document.querySelector("#username");
let passwordInput = document.getElementById("password");

// Check if credentials exist in localStorage
const savedCredentials = JSON.parse(localStorage.getItem("credentials"));
if (savedCredentials) {
    existingLogInBtn.style.display = "block";
}

// Form submit event
submit.addEventListener("click", (event) => {
    event.preventDefault(); // Prevents default form submission

    let username = usernameInput.value.trim();
    let password = passwordInput.value.trim();

    if (username === "" || password === "") {
        alert("Username and password cannot be empty.");
        return;
    }

    alert(`Logged in as ${username}`);

    if (rememberCheckbox.checked) {
        // Store credentials in localStorage
        localStorage.setItem("credentials", JSON.stringify({ user: username, pass: password }));
        existingLogInBtn.style.display = "block";
    } else {
        // Clear stored credentials if "Remember Me" is unchecked
        localStorage.removeItem("credentials");
    }
});

// Existing user login button
existingLogInBtn.addEventListener("click", () => {
    if (savedCredentials) {
        alert(`Logged in as ${savedCredentials.user}`);
    }
});



