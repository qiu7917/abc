


/*=================================================
アコーディオンメニュー
===================================================*/
jQuery(function ($) {
    $(document).off('click', '.accordion-header').on('click', '.accordion-header', function (e) {
        e.preventDefault();
        e.stopPropagation();

        var $header = $(this);
        var $content = $header.next('.accordion-content');

        if ($header.hasClass('is-active')) {
            $header.removeClass('is-active');
            $content.stop().slideUp(400);
        } else {
            $header.addClass('is-active');
            $content.stop().slideDown(400);
        }
    });
});



/*=================================================
fixedbtn
===================================================*/
$(function () {
    let cta = $(".fixedbtn");
    cta.hide();

    $(window).scroll(function () {
        let scrollThreshold = 500;
        if ($(window).scrollTop() > scrollThreshold) {
            cta.fadeIn();
        } else {
            cta.fadeOut();
        }
    });
});
