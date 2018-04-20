//AJAX Submithandler
e.preventDefault();

$.ajax({
	url: $("input[name=action]").val(),
	type: "post",
	dataType: "json",
	data: $self.serialize(),
	success: function (response) {
		if (response.success && response.finished) {
			$('.js-success-banner').removeClass('hide');
			$self[0].reset();
		} else if (response.errors) {
			 $('.js-error-submit-banner').removeClass('hide');
		}
	}
});
return false;
