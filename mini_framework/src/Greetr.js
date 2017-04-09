;(function(global, $){

	// 'new' an object
	var Greetr = function(firstName, lastName, language) {
		return new Greetr.init(firstName, lastName, language);
	}

	// hidden within the scope of IIFE and never directly accessible
	var supportedLangs = ['en', 'es'];

	// informal greetings
	var greeting = {
		en: 'Hello',
		es: 'Hola'
	};

	// formal greetings
	var formalGreetings = {
		en: 'Greetings',
		es: 'Saludos'
	};

	// logger messages
	var logMessage = {
		en: 'Logged in',
		es: 'Inició sesión'
	}


	// prototype holds methods (to save memory space)
	Greetr.prototype = {

		fullName: function() {
			return this.firstName + ' ' + this.lastName;
		},

		validate: function() {
			// check that is a valid language
			// references the external inaccessable 'supportedLangs' within the closure
			if(supportedLangs.indexOf(this.language) === -1) {
				throw "Invalid Language";
			}
		},


		greeting: function() {
			return greeting[this.language] + ' ' + this.firstName + "!";
		},

		formalGreetings: function() {
			return formalGreetings[this.language] + ", " + this.fullName();
		},

		// chainable methods return their own containing object
		greet: function(formal) {

			var msg;

			// if undefied or null it will be coerced to 'false'
			if (formal) {
				msg = this.formalGreetings();
			} else {
				msg = this.greeting();
			}

			if (console) {
				console.log(msg);
			}


			// 'this' refer to the calling object at excution time
			// make the method chainable
			return this;
		},

		log: function() {

			if (console) {
				console.log(logMessage[this.language] + ": " + this.fullName());
			}

			return this;
		},

		setLang: function(lang) {

			// set language
			this.language = lang;

			// validate
			this.validate();

			// make chainable
			return this;
		},

		HTMLGreeting: function(selector, formal) {
			if (!$) {
				throw "jQuery not loadded";
			}

			if (!selector) {
				throw "Missing jQuery selector";
			}

			// determine the message
			var msg;
			if (formal) {
				msg = this.formalGreetings();
			} else {
				msg = this.greeting();
			}

			// inject the message in the chosen place in the DOM
			$(selector).html(msg);

			return this;
		}

	};

	// the actual object is created here, allowing us to 'new' an object without calling 'new'
	Greetr.init = function(firstName, lastName, language) {

		var self = this;
		self.firstName = firstName || "Jie";
		self.lastName = lastName || "Wang";
		self.language = language || "en";

		self.validate();
	}

	// trick borrowed from jQuery so we don't have to use the 'new' keyword
	Greetr.init.prototype = Greetr.prototype;

	// trick borrowed from jQuery so we don't have to use the 'new' keyword
	global.Greetr = global.G$ = Greetr;

}(window, jQuery));