function blastOff() {
    $('.rocket').show();
    $('.doge-center').each(function() {
        $t = $(this);
        $t.animate({
            'margin-top': '-200vh',
        }, 3000);
    });                                
}


function prepareForLaunch() {
    var c = 20;
    var $prep = $('<div/>', {
        'class': 'prep',
    });
    $('<div/>', {
        text: 'Preparing to Launch'
    }).appendTo($prep);
    var $countdown = $('<div/>', {
        text: c
    }).appendTo($prep);
    var vis = 'hidden';
    var blink = setInterval(function() {
        if ($prep.css('opacity') == '0')
            $prep.animate({ 'opacity': '1' });
        else
            $prep.animate({ 'opacity': '0' });
    }, 500);
    var countdown = setInterval(function() {
        c = c - 1;
        $countdown.text(c);
    }, 1000);
    setTimeout(function() {
        clearInterval(blink);
        clearInterval(countdown);
        $prep.remove();
        blastOff();
    }, 20000);
    $img = $('<img/>', {
        src: 'static/img/rocket.gif',
        'class': 'rocket',
    }).appendTo('.doge-center');
    $img.css({ display: 'none' });
    $prep.appendTo('.countmedown');
}


function memeMePls() {
    var $v = $('<video/>', {
        height: '0',
        width: '0',
        src: 'static/shootingstars.webm',
    }).appendTo('body');
    $v.get(0).play();
    prepareForLaunch();
}


$(function() {
    // Walk the doge
    var dogeidx = 0;
    var dance = function () {
        $('.doge').css({ display: 'none', opacity: '0' });
        var doge = $('.doge' + dogeidx);
        doge.css({ display: 'block', opacity: '1'  });
        dogeidx += 1;
        if (dogeidx == 4)
            dogeidx = 0;
    };
    dance();
    setInterval(dance, 1000);

    // Wow the dog
    var front_wows = ['much ', 'such ', 'very ', 'so ', ''];
    var back_wows = ['wow', 'doge', 'space', 'amaze'];
    var colors = ['red', 'lime', 'blue', 'yellow', 'magenta', 'cyan'];
    var wow = function () {
        var $wow = $('.wow' + randRange(0, 10));
        while ($wow.text() != '')
            $wow = $('.wow' + randRange(0, 10));
        var wow = back_wows[randRange(0, back_wows.length)];
        wow = front_wows[randRange(0, front_wows.length)] + wow;
        $wow.text(wow);
        $wow.css({ 'color': colors[randRange(0, colors.length)] });
        setTimeout(function() { $wow.text(''); }, 1000);
    };
    var wow = setInterval(wow, 500);

    // Woof the doge
    var woof = new Audio('static/woof.wav');
    woof.playbackRate = 1.5;
    $('.doge').on('click', function() {
        woof.pause();
        woof.currentTime = 0;
        woof.play();
    });

    var szInit = parseInt($('.doge').css('width'), 10) + 'px';
    var szNew = (parseInt($('.doge').css('width'), 10) / 1.5) + 'px';
    var mtNew = (parseInt(szInit, 10) - parseInt(szNew, 10)) / 2 + 'px';

    // Pat the doge
    $('.doge').on('click', function() {
        $('.doge').each(function() {
            $t = $(this);
            $t.stop(true, true);
            $t.animate({ 
                width: szNew,
                height: szNew,
                'margin': mtNew,
            }, 400);
            $t.animate({
                width: szInit,
                height: szInit,
                'margin': '0px',
            }, 400);
        });
    });

    $('.to-andromeda').on('click', function() {
        $(this).hide();
        clearInterval(wow);
        memeMePls();
    });
});


$(document).ready(function(){
    $('.doge0').ready(function() {
        $('#container').fadeTo(800, 1);
    });
});
