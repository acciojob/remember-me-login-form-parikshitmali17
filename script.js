//your JS code here. If required.
let submit=document.querySelector("#submit");
let ExistingLogInBtn=document.querySelector("#existing");
let rememberCheckbox=document.getElementById("checkbox");
let username=document.querySelector("#username").value;
let password =document.getElementById("password");
let isSaved=false;

submit.addEventListiner('click',()=>{
	alert(`Logged in as ${username}`)
	if(rememberCheckbox){
		localStorage.setItem(JSON.Stringfy({user: username, pass:password}))
	isSaved=true;
		alert(`Logged in as ${username}`)
	}else{
		localStorage.clear('')	
	}

	(isSaved) ? ExistingLogInBtn : ExistingLogInBtn.style.display=='none'
	
})


