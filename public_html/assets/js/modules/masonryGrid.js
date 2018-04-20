import Masonry from 'masonry-layout';

function masonryGrid() {
	const grid = document.querySelector('.js-grid');
	const msnry = new Masonry(grid, {
		itemSelector: '.grid__item',
		masonry: {
			layoutMode: 'packery'
		}
	});
}

export default masonryGrid;
