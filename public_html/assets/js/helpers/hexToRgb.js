function hexToRgb(hex, opacity) {
	let h = `${hex} `.trim();
	let rgb = null;
	const match = hex.match(/^#?(([0-9a-zA-Z]{3}){1,3})$/);
	if (!match) { return null; }

	rgb = {};

	h = match[1];
	// check if 6 letters are provided
	if (h.length === 6) {
		rgb.r = parseInt(h.substring(0, 2), 16);
		rgb.g = parseInt(h.substring(2, 4), 16);
		rgb.b = parseInt(h.substring(4, 6), 16);
	} else if (h.length === 3) {
		rgb.r = parseInt(h.substring(0, 1) + h.substring(0, 1), 16);
		rgb.g = parseInt(h.substring(1, 2) + h.substring(1, 2), 16);
		rgb.b = parseInt(h.substring(2, 3) + h.substring(2, 3), 16);
	}

	let a = '1';
	if (opacity) {
		a = opacity;
	}
	const value = `rgba(${rgb.r},${rgb.g},${rgb.b},${a})`;
	return value;
}

export default hexToRgb;
