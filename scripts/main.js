/** @namespace app */
const app = {};

/** open hamburger menu on focus of nav element */
app.toggleHamburger = () => {
	const hamburger = document.querySelector('#hamburger');
	const label = document.querySelector('label[for="hamburger"] i');
	const nav = document.querySelector('.top-nav ul');

	nav.addEventListener('focusin', () => {
		hamburger.checked = true;
		toggle();
	})

	hamburger.addEventListener('change', () => {
		toggle();
	})

	const toggle = () => {
		if (hamburger.checked) {
			label.classList.remove('fa-bars');
			label.classList.add('fa-times');
		} else {
			label.classList.add('fa-bars');
			label.classList.remove('fa-times');
		}
	}
}


/** initialize app */
app.init = () => {
	app.toggleHamburger();
}


/** document ready */
(() => {
	app.init();

	// reCAPTCHA setup
	onloadCallback = () => {
		console.log('reCAPTCHA ready');
		grecaptcha.render('g-recaptcha', {
			'sitekey': '6Lel5dcZAAAAAKj9ykypzYXrDkeQ5IR1QdELKAEv',
		})
	}
})()