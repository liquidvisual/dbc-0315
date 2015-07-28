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
// Media Symbol Click - Show Text
//-----------------------------------------------------------------

$('.js-media-list-item').each(function(){
    var transition = 'animated fadeIn';

    // click to show the text
    $(this).click(function(event){

        var $this = $(this);

        $mediaSymbolText = $('.media-symbol-text', $this);

        if ($mediaSymbolText.is(':visible')) {
            $mediaSymbolText.addClass('hide').removeClass(transition);
        } else {
            $mediaSymbolText.removeClass('hide').addClass(transition);
        }
    });
});

// Stop links from triggering the show/hide of above - links do their own thing
$('.media-symbol-text-content a:not(.media-symbol-close-btn)').click(function(event){
    event.stopPropagation();
})

//-----------------------------------------------------------------
// Best Performance Horizontal Scrolling
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