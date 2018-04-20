import Flickity from 'flickity';

function carousels() {
	const hero = document.querySelector('.js-hero-slider');
	const heroSlider = new Flickity(hero, {
		cellSelector: '.slide',
		contain: true,
		wrapAround: true,
		prevNextButtons: false
	});

	const productList = document.querySelector('.js-product-slider');
	const productSlider = new Flickity(productList, {
		cellSelector: '.slide',
		contain: false,
		wrapAround: true,
		prevNextButtons: true,
		pageDots: false
		// arrowShape: 'M 0,50 L 60,00 L 50,30 L 80,30 L 80,70 L 50,70 L 60,100 Z'
	});
}

export default carousels();
