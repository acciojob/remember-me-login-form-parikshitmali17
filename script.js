// // //your JS code here. If required.
// // let submit=document.querySelector("#submit");
// // let ExistingLogInBtn=document.querySelector("#existing");
// // let rememberCheckbox=document.getElementById("checkbox");
// // let username=document.querySelector("#username").value;
// // let password =document.getElementById("password");
// // let isSaved=false;

// // submit.addEventListiner('click',()=>{
// // 	alert(`Logged in as ${username}`)
// // 	if(rememberCheckbox){
// // 		localStorage.setItem(JSON.Stringfy({user: username, pass:password}))
// // 	isSaved=true;
// // 		alert(`Logged in as ${username}`)
// // 	}else{
// // 		localStorage.clear('')	
// // 	}

// // 	(isSaved) ? ExistingLogInBtn : ExistingLogInBtn.style.display=='none'
	
// // })

// let submit = document.querySelector("#submit");
// let existingLogInBtn = document.querySelector("#existing");
// let rememberCheckbox = document.getElementById("checkbox");
// let usernameInput = document.querySelector("#username");
// let passwordInput = document.getElementById("password");

// // Check if credentials exist in localStorage
// document.addEventListener("DOMContentLoaded", () => {
//     let savedCredentials = localStorage.getItem("credentials");
//     if (savedCredentials) {
//         existingLogInBtn.style.display = "block";
//     }
// });

// // Submit button event listener
// submit.addEventListener("click", (event) => {
//     event.preventDefault();  // Prevent form from refreshing the page
    
//     let username = usernameInput.value.trim();
//     let password = passwordInput.value.trim();

//     if (username === "" || password === "") {
//         alert("Please enter both username and password.");
//         return;
//     }

//     alert(`Logged in as ${username}`);

//     if (rememberCheckbox.checked) {
//         localStorage.setItem("credentials", JSON.stringify({ user: username, pass: password }));
//         existingLogInBtn.style.display = "block"; // Show "Login as existing user" button
//     } else {
//         localStorage.removeItem("credentials"); // Remove saved credentials
//         existingLogInBtn.style.display = "none";
//     }
// });

// // Existing user login event listener
// existingLogInBtn.addEventListener("click", () => {
//     let savedCredentials = JSON.parse(localStorage.getItem("credentials"));
//     if (savedCredentials) {
//         alert(`Logged in as ${savedCredentials.user}`);
//     }
// });

document.addEventListener("DOMContentLoaded", function () {
    // Ensure username and password inputs exist
    if (!document.getElementById("username")) {
        let form = document.getElementById("loginForm");

        let usernameLabel = document.createElement("label");
        usernameLabel.setAttribute("for", "username");
        usernameLabel.textContent = "Username:";
        let usernameInput = document.createElement("input");
        usernameInput.type = "text";
        usernameInput.id = "username";
        usernameInput.name = "username";

        let passwordLabel = document.createElement("label");
        passwordLabel.setAttribute("for", "password");
        passwordLabel.textContent = "Password:";
        let passwordInput = document.createElement("input");
        passwordInput.type = "password";
        passwordInput.id = "password";
        passwordInput.name = "password";

        let rememberLabel = document.createElement("label");
        rememberLabel.setAttribute("for", "checkbox");
        rememberLabel.textContent = "Remember me:";
        let checkboxInput = document.createElement("input");
        checkboxInput.type = "checkbox";
        checkboxInput.id = "checkbox";

        let submitButton = document.createElement("input");
        submitButton.type = "submit";
        submitButton.id = "submit";
        submitButton.value = "Submit";

        form.appendChild(usernameLabel);
        form.appendChild(usernameInput);
        form.appendChild(passwordLabel);
        form.appendChild(passwordInput);
        form.appendChild(rememberLabel);
        form.appendChild(checkboxInput);
        form.appendChild(submitButton);
    }

    // Login Function
    function loginUser(username, password) {
        document.getElementById("username").value = username;
        document.getElementById("password").value = password;

        let existingButton = document.getElementById("existing");
        existingButton.style.display = "block";
        existingButton.textContent = `Login as existing user (${username})`;
    }

    // Form Submission
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent actual form submission
        let username = document.getElementById("username").value;
        if (username) {
            alert(`Logged in as ${username}`);
            loginUser(username, document.getElementById("password").value);
            localStorage.setItem("username", username);
            localStorage.setItem("password", document.getElementById("password").value);
        }
    });

    // Clear Local Storage on Page Load
    localStorage.removeItem("username");
    localStorage.removeItem("password");
});


