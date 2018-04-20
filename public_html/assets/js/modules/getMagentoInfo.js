// Get Cart info and Logged in status from Magento
function getMagentoInfo() {
	const shopUrl = MAGENTO_LINK;
	const ajax = new XMLHttpRequest();
	const ajax2 = new XMLHttpRequest();

	const cartUrl = `${shopUrl}/get_cart`;
	const accountUrl = `${shopUrl}/get_account`;

	// Cart info
	ajax.open('GET', cartUrl, true);
	ajax.withCredentials = false;

	ajax.onload = () => {
		if (ajax.status >= 200 && ajax.status < 400) {
			const data = JSON.parse(ajax.response);
			const cartQtyWrapper = document.querySelector('.js-cart-qty-wrapper');
			if (data.get_cart.items !== '0') {
				cartQtyWrapper.innerHTML = `<span class="cart-qty">${data.get_cart.items}</span>`;
			}
		} else {
			console.log('oops, no cart data');
		}
	};
	ajax.send();

	// // Account info
	ajax2.open('GET', accountUrl, true);
	ajax2.onload = () => {
		if (ajax2.status >= 200 && ajax2.status < 400) {
			const data = JSON.parse(ajax2.response);
			if (data.get_account.logged_in === true) {
				document.querySelector('.account-label .account--logged-out').classList.add('hide');
				document.querySelector('.account-label .account--logged-in').classList.remove('hide');
			} else {
				document.querySelector('.account-label .account--logged-out').classList.remove('hide');
				document.querySelector('.account-label .account--logged-in').classList.add('hide');
			}
		}
	};
	ajax2.send();
}

export default getMagentoInfo();
