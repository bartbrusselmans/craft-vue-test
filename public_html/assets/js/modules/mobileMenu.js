function mobileMenu() {
	const toggleButton = document.querySelector('.js-menu-toggle');
	const menu = document.querySelector('.js-mobile-menu');
	toggleButton.addEventListener('click', () => {
		toggleButton.classList.toggle('active');
		menu.classList.toggle('active');
		document.body.classList.toggle('mobile-menu-open');
	});
}

export default mobileMenu;
