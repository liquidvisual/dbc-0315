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

// window.onload = function(){
//     // NProgress.done();
// }

// $(document).ready(function() {
//     $('.lv-scrollerX').mCustomScrollbar({
//         axis: "x",
//         autoWidth: true
//     });

    // $('.lv-scroller').mCustomScrollbar("destroy");
// });

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
            $mediaSymbolText.addClass('hide').attr('style', '');
        } else {
            $mediaSymbolText.removeClass('hide').css({ 'opacity': 0 }).transition({ opacity: 1 }); //.addClass('animated fadeIn');
        }
    });

    // Close the text
    $closeBtn.click(function(event){
        event.preventDefault();
        $(this).parent().addClass('hide');
    });
});

//-----------------------------------------------------------------
//
//-----------------------------------------------------------------

$("html, body").mousewheel(function(event, delta) {
    if ($(window).width() > 640) {
        this.scrollLeft -= (delta * 1);
        event.preventDefault();
    }
});





//-----------------------------------------------------------------
// Offcanvas Menu
//-----------------------------------------------------------------

// $("#off-canvas-menu").mmenu({ "offCanvas": { "position": "right" }});

//-----------------------------------------------------------------
// Kickstart Foundation / Touch Conditionals
//-----------------------------------------------------------------

// var touchEvent = TOUCH_ENABLED ? "touchstart" : "click";

//Trigger hamburger by touch on mobile - this eliminates glitch with FastClick.js
// $('.hamburger').bind('click', function(e) {
    // e.preventDefault();
    // $('#off-canvas-menu').trigger('open.mm');
// });

if (TOUCH_ENABLED) {
    // Make Accordion jump to the top of the heading on mobile
    // http://foundation.zurb.com/forum/posts/1316-accordion-jump-to-top-when-active
    /*$(document).foundation('accordion', {
        callback: function (el){
            var containerPos = $(el).parent().offset().top;
            $('html, body').animate({ scrollTop: containerPos }, 300);
        }
    });*/
}
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

$(document).keypress(function(event) {
    if (event.which == 115 && (event.ctrlKey||event.metaKey)||(event.which == 19)) {
        event.preventDefault();
        alert("(w) "+$(window).width()+" (h) "+$(window).height());
        return false;
    }
    return true;
});
//==================================================
//
//==================================================