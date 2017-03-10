/**
 * Submit form behavior
 */
(function() {
	var $form = $('.support-form form');
	var $success = $('#success-modal');
	var $error = $('#error-modal');
	$form.find('input, textarea')
		.on('blur change input', function() {
			var $self = $(this);

			if ($self.val()) {
				$self.addClass('filled');
			}
			else {
				$self.removeClass('filled');
			}
		});

	$form.validate({
		submitHandler: function() {
			$.ajax({
				url: feedback_endpoint,
				method: 'POST',
				dataType: 'JSON',
				data: $form
					.serialize(),
				success: function(r) {
					if (r.error_code == 0) {
						$success
							.iziModal('open');
						$form
							.trigger('reset');
					}
					else {
						$error
                            .iziModal('setSubtitle', r.message);
                        $error
							.iziModal('open');
					}
				},
				error: function() {
					$error
                        .iziModal('setSubtitle', 'There was an error processing your request. Please try again.');
                    $error
						.iziModal('open');
				}
			});
		},
		invalidHandler: function() {
			$error
                .iziModal('setSubtitle', 'Check your data and try again!');
            $error
				.iziModal('open');
		},
		errorPlacement: function() {}
	});

	$success
		.iziModal({
			title: 'Your feedback was received. Thank you!',
			headerColor: '#00af66',
			width: 600,
			timeout: 10000,
			timeoutProgressbar: true,
			pauseOnHover: false,
            history: false
		});

	$error
		.iziModal({
			title: "Oops!",
            subtitle: '',
			headerColor: '#BD5B5B',
			width: 600,
			timeout: 5000,
			timeoutProgressbar: true,
			pauseOnHover: false,
            history: false
		});
})();


/**
 * Opens video modal
 */
(function() {
	var $videoModal = $('#video-modal');

	if ($videoModal.length > 0) {
		$('.video .button')
			.on('click', function(event) {
				$videoModal.iziModal('open');
				return false;
			});

		$videoModal.iziModal({
			iframe: true,
			iframeHeight: 720,
			iframeURL: 'https://www.youtube.com/embed/SfbbhshhBQ4',
			history: false,
			fullscreen: true
		});
	}
})();


/**
 * Fixed sticky for tutorial
 */
(function() {
	$('.steps.fixedsticky')
		.fixedsticky();
})();
