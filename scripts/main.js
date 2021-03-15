/** @namespace app */
const app = {};

// /** open hamburger menu on focus of nav element */
// app.toggleHamburger = () => {
// 	const hamburger = document.querySelector('#hamburger');
// 	const label = document.querySelector('label[for="hamburger"] i');
// 	const nav = document.querySelector('.top-nav ul');

// 	nav.addEventListener('focusin', () => {
// 		hamburger.checked = true;
// 		toggle();
// 	})

// 	hamburger.addEventListener('change', () => {
// 		toggle();
// 	})

// 	const toggle = () => {
// 		if (hamburger.checked) {
// 			label.classList.remove('fa-bars');
// 			label.classList.add('fa-times');
// 		} else {
// 			label.classList.add('fa-bars');
// 			label.classList.remove('fa-times');
// 		}
// 	}
// }

/**
 * Listen for click on hamburger button and toggle nav
*/
app.toggleDropdown = function () {
	/** @type {object} the hamburger button */
	const button = document.querySelector('button.dropdown-button');

	/** @type {object} the nav menu to be toggled */
	const navUl = document.querySelector('.top-nav ul');

	// toggle dropdown on button click
	button.addEventListener('click', function () {
		// if currently hidden
		if (navUl.classList.contains('hidden')) {
			show(this);

			// if not hidden
		} else {
			hide(this);
		}
	});


	/** Show the dropdown */
	const show = function (element) {
		navUl.classList.remove('hidden');

		// display down arrow
		element.innerHTML = '<i class="fas fa-times"></i>';
	};

	/** Hide the dropdown */
	const hide = function (element) {
		navUl.classList.add('hidden');

		// display up arrow
		element.innerHTML = '<i class="fas fa-bars"></i>';

	};
};

/** Scroll handler - used to change nav to floating on scroll */
app.handleScroll = () => {
	const header = document.querySelector('header');
	const navUl = document.querySelector('.top-nav ul');

	if (window.scrollY > 1) {
		header.classList.add('floating');
		navUl.classList.add('floating');
	} else {
		header.classList.remove('floating');
		navUl.classList.remove('floating');
	}
}

/** initialize app */
app.init = () => {
	// app.toggleHamburger();
	app.toggleDropdown();

	document.addEventListener('scroll', app.handleScroll);
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