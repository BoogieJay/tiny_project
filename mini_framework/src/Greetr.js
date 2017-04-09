(function(global, $){

	var Greetr = function(firstName, lastName, language) {
		return new Greetr.init(firstName, lastName, language);
	}

	var supportedLangs = ['en', 'es'];

	var greeting = {
		en: 'Hello',
		es: 'Hola'
	};

	var formalGreetings = {
		en: 'Greetings',
		es: 'Saludos'
	};

	var logMessage = {
		en: 'Logged in',
		es: 'Inició sesión'
	}


	Greetr.prototype = {

		fullName: function() {
			return this.firstName + ' ' + this.lastName;
		},

		validate: function() {
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

			this.language = lang;

			this.validate();

			return this;
		},

		HTMLGreeting: function(selector, formal) {
			if (!$) {
				throw "jQuery not loadded";
			}

			if (!selector) {
				throw "Missing jQuery selector";
			}

			var msg;
			if (formal) {
				msg = this.formalGreetings();
			} else {
				msg = this.greeting();
			}

			$(selector).html(msg);

			return this;
		}

	};

	Greetr.init = function(firstName, lastName, language) {

		var self = this;
		self.firstName = firstName || "Jie";
		self.lastName = lastName || "Wang";
		self.language = language || "en";

	}

	Greetr.init.prototype = Greetr.prototype;

	global.Greetr = global.G$ = Greetr;

}(window, jQuery));