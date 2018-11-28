function randRange(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


$(function() {
    // Convert img.svg to inline svg
    $('.svg-icon').each(function() {
        var $img = $(this);
        $.get($img.attr('src'), function(data) {
            var $svg = $(data).find('svg');
            $svg.addClass('svg-icon');
            $img.replaceWith($svg);
        });
    });

    // Heck?
    $('.question').on('click', function() {
        $t = $('.info-bar');
        $t.stop(true, true);
        if ($t.css('opacity') == '0') {
            $t.animate({ 'opacity': '0.5' });
            $t.css({ display: 'block' });
        }
        else {
            $t.animate({ 'opacity': '0' }, function() {
                $t.css({ display: 'none' });
            });
        }
    });

    console.log("loaded");

});


$("html, body, #container").css({
    height: $(window).height()
});
