// Used for cookie-banners and notification banners
// Helpers
const currentUrl = window.location.href;
const urlRegex = /[\w\d]+\.[\w\d]+\//;
const domain = currentUrl.match(urlRegex)[0];
const url = domain.slice(0, domain.length - 1);

// Cookie functions (set, get)
function setCookie(cname, cvalue, exdays) {
	const d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	const expires = `expires=${d.toUTCString()}`;
	document.cookie = `${cname}=${cvalue};${expires};domain=.${url};path=/`;
}
function getCookie(cname) {
	const name = `${cname}=`;
	const decodedCookie = decodeURIComponent(document.cookie);
	const ca = decodedCookie.split(';');
	for (let i = 0; i < ca.length; i += 1) {
		let c = ca[i];
		while (c.charAt(0) === ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) === 0) {
			return c.substring(name.length, c.length);
		}
	}
	return '';
}

// If notificaton banner
const banner = document.querySelector('.js-notificaton-banner');
if (banner) {
	const dateUpdated = document.querySelector('.js-notification-banner').dataset.updated;
	const notificationBanner = getCookie(`HIDE_NOTIFICATION_BAR_${dateUpdated}`);

	// Check for empty Cookies
	if (notificationBanner === '') {
		banner.classList.add('active');
	}
	// Set cookies on close
	const notificationClose = document.querySelector('.js-notification-close');
	notificationClose.addEventListener('click', (e) => {
		e.preventDefault();
		setCookie(`HIDE_NOTIFICATION_BAR_${dateUpdated}`, '1', 365);
		banner.classList.remove('active');
	});
}
// If Cookie banner
const cookiesBanner = document.querySelector('.js-cookie-banner');
if (cookiesBanner) {
	// Cookies
	const cookieBanner = getCookie('HIDE_COOKIE_BAR');
	// Check for empty cookies
	if (cookieBanner === '') {
		cookiesBanner.classList.add('active');
	}
	const cookieClose = document.querySelector('.js-cookie-close');
	cookieClose.addEventListener('click', (e) => {
		e.preventDefault();
		setCookie('HIDE_COOKIE_BAR', '1', 365);
		cookiesBanner.classList.remove('active');
	});
}
