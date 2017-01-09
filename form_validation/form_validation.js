function register(e){
	e.preventDefault();

	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var password1 = document.getElementById("password").value;
	var password2 = document.getElementById("password2").value;
	var msg = document.getElementById("msg");

	if (name == "" || email == "" || password1 == "" || password2 == ""){
		msg.className = "alert alert-danger";
		msg.innerHTML = "Please fill out the form";
	} else {
		if (name.length < 3){
			msg.className = "alert alert-danger";
			msg.innerHTML = "Name have to be more than three characters";
		} else {
			var atSign = email.indexOf("@");
			var dotSign = email.lastIndexOf(".");
			if (atSign == -1 || dotSign == -1 || dotSign == atSign - 1 || dotSign == atSign + 1){
				msg.className = "alert alert-danger";
				msg.innerHTML = "Invalid email format";
			} else {
				if (password1 !== password2){
					msg.className = "alert alert-danger";
					msg.innerHTML = "Two password not match";
				} else {
					// success
					msg.className = "alert alert-success";
					msg.innerHTML = "Successfully Submit";
				}
			}
		}
		
	}
}


document.getElementById("reg-form").addEventListener("submit", register, false);