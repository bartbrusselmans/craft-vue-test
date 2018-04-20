import svg4everybody from 'svg4everybody';

//	Load SVG sprite
function loadSvgSprite() {
	const baseUrl = window.location.host;
	const spriteDiv = document.getElementById('svgSprite');
	const file = spriteDiv.getAttribute('data-file');
	const url = `${window.location.protocol}//${baseUrl}${file}`;

	const ajax = new XMLHttpRequest();
	ajax.open('GET', url, true);
	ajax.send();
	ajax.onload = (e) => {
		spriteDiv.innerHTML = ajax.responseText;
		// polyfill for older browsers
		svg4everybody();
	};
}
export default loadSvgSprite;
