/*
    MAIN SCRIPTS - Last updated: 00-00-00
*/
//-----------------------------------------------------------------
// Variables
//-----------------------------------------------------------------

var TOUCH_ENABLED = $(".touch").length;

//-----------------------------------------------------------------
// Document Ready
//-----------------------------------------------------------------

$(document).ready(function() {
    NProgress.start(); // Start preloader bar
});

$(window).load(function() {
    NProgress.done();

    $('.media-symbol').each(function(index){
        $(this).css({ opacity: 0 }).transition({ opacity: 1, delay: 400*index }, 2000);
    });
});

//-----------------------------------------------------------------
//
//-----------------------------------------------------------------

// $(document).ready(function() {
//     $('.lv-scrollerX').mCustomScrollbar({
//         axis: "x",
//         autoWidth: true
//     });

    // $('.lv-scroller').mCustomScrollbar("destroy");
// });

$(function() {

    // onload
    if (document.body.clientWidth >= 1024) {
        $('video').attr('autoplay', true);
    }

    // If you want to autoplay when the window resized wider than 1024px
    // after load, you can add this:

    $(window).resize(function() {
        if (document.body.clientWidth >= 1024) {
            $('video').attr('autoplay', true);
        }
    });
});

//-----------------------------------------------------------------
//
//-----------------------------------------------------------------

$('.js-media-symbol').each(function(){
    var $closeBtn = $('.media-symbol-close-btn', $(this).parent());

    // click to show the text
    $(this).click(function(event){
        event.preventDefault();

        $mediaSymbolText = $('.media-symbol-text', $(this).parent());

        if ($mediaSymbolText.is(':visible')) {
            $mediaSymbolText.addClass('hide').removeClass('animated pulse').attr('style', '');
        } else {
            $mediaSymbolText.removeClass('hide').addClass('animated pulse').css({ 'opacity': 0 }).transition({ opacity: 1 }); //.addClass('animated fadeIn');
        }
    });

    // Close the text
    $closeBtn.click(function(event){
        event.preventDefault();
        $(this).parent().parent().addClass('hide').removeClass('animated pulse');
    });
});

//-----------------------------------------------------------------
// Horizontal Scrolling
//-----------------------------------------------------------------

$("html, body").mousewheel(function(event, delta) {
    if ($(window).width() > 767) {
        this.scrollLeft -= (delta * 1);
        event.preventDefault();
    }
});

//-----------------------------------------------------------------
// <= IE8 Caution Message
//-----------------------------------------------------------------

//$('.lv-alert .close-btn').click(function(){$(this).parent().hide();});

//-----------------------------------------------------------------
// +++ HELPERS +++
//-----------------------------------------------------------------
//==================================================
// Developer: COMMAND+S for screen width
//==================================================

// $(document).keypress(function(event) {
//     if (event.which == 115 && (event.ctrlKey||event.metaKey)||(event.which == 19)) {
//         event.preventDefault();
//         alert("(w) "+$(window).width()+" (h) "+$(window).height());
//         return false;
//     }
//     return true;
// });
//==================================================
//
//==================================================