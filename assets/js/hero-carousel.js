(function ($) {
    'use strict';

    var $carousel = $('#hero-carousel');
    var $toggle = $carousel.find('.hero-carousel__toggle');
    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var paused = reduceMotion;

    function updateToggle() {
        var label = paused ? 'Mulai carousel otomatis' : 'Jeda carousel otomatis';
        var icon = paused ? 'fa-play' : 'fa-pause';

        $toggle.attr({
            'aria-label': label,
            'aria-pressed': paused.toString()
        }).find('i').removeClass('fa-play fa-pause').addClass(icon);
    }

    $carousel.carousel({
        interval: 5000,
        keyboard: true,
        pause: 'hover',
        wrap: true
    });

    if (reduceMotion) {
        $carousel.carousel('pause');
    }

    $toggle.on('click', function () {
        paused = !paused;
        $carousel.carousel(paused ? 'pause' : 'cycle');
        updateToggle();
    });

    updateToggle();
}(jQuery));
