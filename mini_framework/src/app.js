
$("input#login").on("click", function(){

	// create a new Greetr object (let's pretend we know the name of the login)
	var g = G$("Shiyao", "Liu");

	// hide the login from the screen
	$("div#logindiv").hide();

	// fire off the HTML greeting, passing the "h1#greeting" as the selector and the chosen language, and log the welcome as well
	g.setLang($("#lang").val()).HTMLGreeting("h1#greeting", true).log();
});