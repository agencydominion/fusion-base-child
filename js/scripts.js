//scroll to anchor
jQuery(document).ready(function() {
    jQuery('a[href*="#"]:not([href="#"]):not([data-toggle])').on('click', function(event) {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = jQuery(this.hash);
            target = target.length ? target : jQuery('[name="' + this.hash.slice(1) +'"]');
            if (target.length > 0) {
                var additionalOffset = jQuery('.locking-menu').length > 0 ? jQuery('.locking-menu').outerHeight() : 0;
                if (jQuery('body').hasClass('admin-bar')) {
                    var offset = target.offset().top - additionalOffset - 32;
                } else {
                    var offset = target.offset().top - additionalOffset;
                }
                var isSmoothScrollSupported = 'scrollBehavior' in document.documentElement.style;
                if (isSmoothScrollSupported) {
                    // Native smooth scrolling
                    var scrollToOptions = {
                        top: offset,
                        left: 0,
                        behavior: 'smooth'
                    };
                    window.scroll(scrollToOptions);
                } else {
                    // jQuery smooth scrolling
                    jQuery('html, body').animate({
                        scrollTop: offset
                    }, 1000);
                }
                return false;
            }
        }
    });
    //deep linking
    jQuery(window).on('load', function() {
        var targetID = window.location.hash;
        var targetTabTrigger = jQuery('a[data-toggle="tab"][href="'+ targetID +'"]');
        var targetModalTrigger = jQuery('a[data-toggle="modal"][href="'+ targetID +'"]');
        if (targetTabTrigger.length > 0) {
            var additionalOffset = jQuery('.locking-menu').length > 0 ? jQuery('.locking-menu').outerHeight() : 0;
            if (jQuery('body').hasClass('admin-bar')) {
                var offset = targetTabTrigger.offset().top - additionalOffset - 32;
            } else {
                var offset = targetTabTrigger.offset().top - additionalOffset;
            }
            jQuery(window).scrollTop(offset);
            targetTabTrigger.trigger('click');
        } else if (targetModalTrigger.length > 0) {
            targetModalTrigger.first().trigger('click');
        } else if (targetID != '') {
            var target = jQuery(targetID);
            if (target.length > 0) {
                var additionalOffset = jQuery('.locking-menu').length > 0 ? jQuery('.locking-menu').outerHeight() : 0;
                if (jQuery('body').hasClass('admin-bar')) {
                    var offset = target.offset().top - additionalOffset - 32;
                } else {
                    var offset = target.offset().top - additionalOffset;
                }
                var isSmoothScrollSupported = 'scrollBehavior' in document.documentElement.style;
                if (isSmoothScrollSupported) {
                    // Native smooth scrolling
                    var scrollToOptions = {
                        top: offset,
                        left: 0,
                        behavior: 'smooth'
                    };
                    window.scroll(scrollToOptions);
                } else {
                    // jQuery smooth scrolling
                    jQuery('html, body').animate({
                        scrollTop: offset
                    }, 1000);
                }
                return false;
            }
        }
    });
});