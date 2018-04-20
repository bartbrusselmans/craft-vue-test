function collapseLists() {
	const lists = document.querySelectorAll('.js-collapse');
	Array.from(lists).forEach(($list) => {
		$list.addEventListener('click', (e) => {
			const parent = e.target.parentNode;
			const sibling = parent.nextSibling;
			if (parent.classList.contains('collapse__q')) {
				const wrapper = sibling.querySelector('.collapse__a-wrapper');
				if (parent.classList.contains('active')) {
					// close it
					parent.classList.remove('active');
					sibling.setAttribute('style', '0');
				} else {
					parent.classList.add('active');
					const height = wrapper.offsetHeight;
					sibling.setAttribute('style', `max-height:${height}px`);
				}
			}
		});
	});
	window.addEventListener('resize', () => {
		const openQs = document.querySelectorAll('.collapse__q.active');
		Array.from(openQs).forEach((openQ) => {
			const sibling = openQ.nextSibling;
			const wrapper = sibling.querySelector('.collapse__a-wrapper');
			const height = wrapper.offsetHeight;
			sibling.setAttribute('style', `max-height:${height}px`);
		});
	});
}

export default collapseLists;
