/** @namespace app */
const app = {};

/**
 * Listen for click on hamburger button and toggle nav
*/
app.toggleDropdown = function () {
	/** @type {object} the hamburger button */
	const button = document.querySelector('button.dropdown-button');

	/** @type {object} the nav menu to be toggled */
	const navUl = document.querySelector('.top-nav ul');

	const header = document.querySelector('header');


	// toggle dropdown on button click
	button.addEventListener('click', function() {
		// if currently hidden
		if (navUl.classList.contains('hidden')) {
			show(this);
			// if not hidden
		} else {
			hide(this);
		}
	});

	// close dropdown on link click
	navUl.addEventListener('click', function(e) {
		if (e.target.nodeName === 'A') {
			hide(button);
		}
	});


	/** Show the dropdown */
	const show = function (element) {
		navUl.classList.remove('hidden');

		// display down arrow
		element.innerHTML = '<i class="fas fa-times"></i>';

		header.classList.add('floating');
		navUl.classList.add('floating');
	};

	/** Hide the dropdown */
	const hide = function (element) {
		navUl.classList.add('hidden');

		// display up arrow
		element.innerHTML = '<i class="fas fa-bars"></i>';

		// if scrolled up, remove floating class from header
		if (window.scrollY < 5) {
			header.classList.remove('floating');
			navUl.classList.remove('floating');
		}
	};
};

/** Scroll handler - used to change nav to floating on scroll */
app.handleScroll = () => {
	const header = document.querySelector('header');
	const navUl = document.querySelector('.top-nav ul');

	if (window.scrollY > 5) {
		header.classList.add('floating');
		navUl.classList.add('floating');
	} else {
		if (navUl.classList.contains('hidden')) {
			header.classList.remove('floating');
			navUl.classList.remove('floating');
		}
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