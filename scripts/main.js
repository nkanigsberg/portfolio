/** @namespace app */
const app = {};



app.init = () => {
	// console.log('ready');
}

// document ready
(() => {
	app.init();

	// reCAPTCHA setup
	onloadCallback = () => {
		console.log('reCAPTCHA ready');
		grecaptcha.render('g-recaptcha', {
			'sitekey': '6Lel5dcZAAAAAKj9ykypzYXrDkeQ5IR1QdELKAEv',
			
		})
		// console.log(grecaptcha.getResponse());
	}
})()