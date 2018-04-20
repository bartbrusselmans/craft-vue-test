// Language toggle - close when click next to it
function languageToggle() {
	document.addEventListener('click', (e) => {
		const button = document.querySelector('.js-menu-button');
		const flyout = document.querySelector('.js-menu-flyout');

		if (!e.target.closest('.flyout__wrapper')) {
			if (flyout.classList.contains('active')) {
				button.classList.remove('active');
				flyout.classList.remove('active');
			}
		} else {
			button.classList.add('active');
			flyout.classList.add('active');
		}
	});
}

export default languageToggle();
