// Raf scrollhandler
function scroller(startFunction, updateFunction, endFunction) {
	let timer = '';
	let fired = false;

	//	Event listener
	window.addEventListener('scroll', (e) => {
		//	fire start event
		if (!fired) {
			startFunction();
		}
		fired = true;

		//	update scrollposition with RAF
		let ticking = false;
		let lastKnownScrollPosition = 0;

		lastKnownScrollPosition = window.scrollY;
		if (!ticking) {
			window.requestAnimationFrame(() => {
				updateFunction(lastKnownScrollPosition);
				ticking = false;
			});
		}
		ticking = true;

		//	listen for stop
		clearTimeout(timer);
		timer = setTimeout(() => {
			//	reset fired and start endfunction
			fired = false;
			endFunction();
		}, 150);
	});
}

export default scroller;
