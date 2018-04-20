function flyout() {
	const triggers = document.querySelectorAll('.js-flyout-trigger');
	Array.from(triggers).forEach(($trigger) => {
		const $flyout = $trigger.querySelector('.flyout');
		$trigger.addEventListener('mouseenter', () => {
			$flyout.classList.add('flyout-active');
		});
		$trigger.addEventListener('mouseleave', () => {
			$flyout.classList.remove('flyout-active');
		});
	});
}

export default flyout();
