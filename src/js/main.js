/**
 * Submit form behavior
 */
(function() {
    $('.support-form input, .support-form textarea').on('blur change input', function() {
        var $self = $(this);

        if ($self.val()) {
            $self.addClass('filled');
        }
        else {
            $self.removeClass('filled');
        }
    });
})();


/**
 * Opens video modal
 */
(function() {
    var $videoModal = $('#video-modal');

    if ($videoModal.length > 0) {
        $('.video .button').on('click', function(event) {
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
    $('.steps.fixedsticky').fixedsticky();
})();
