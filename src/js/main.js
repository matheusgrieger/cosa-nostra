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
 * Fixed sticky for tutorial
 */
(function() {
    $('.steps.fixedsticky').fixedsticky();
})();
