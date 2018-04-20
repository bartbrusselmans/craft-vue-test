App.prototype.getMagentoInfo = function () {
	var self = this;
	// get cart info
  $.ajax({
      method   : "GET",
      url      : MAGENTO_LINK + 'get_cart',
      data     : '',
      xhrFields: {
          withCredentials: true
      }
  }).done(function(result) {
  	if (result['get_cart']['items'] != 0){
  		$('#cart-qty').html('<span class="cart-qty">' + result['get_cart']['items'] + '</span>');
  	}
	});
	// get account info
  $.ajax({
      method   : "GET",
      url      : MAGENTO_LINK + 'get_account',
      data     : '',
      xhrFields: {
          withCredentials: true
      }
  }).done(function(result) {
  	if(result['get_account']['logged_in'] == true){
  		$('#account-label .account--logged-out').addClass("hide");
  		$('#account-label .account--logged-in').removeClass("hide");
  	}else{
  		$('#account-label .account--logged-out').removeClass("hide");
  		$('#account-label .account--logged-in').addClass("hide");
  	}
  });
};
