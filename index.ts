/// <reference path="typings/jquery.d.ts"/>
/// <reference path="typings/fullPage.d.ts"/>

$(function() {
    $('#fullpage').fullpage({
        loopHorizontal: false,
        slidesNavigation: true,
        verticalCentered: false
    });

    setTimeout(function() {
        $('#loader').fadeOut(1000)
    }, 1500);
});
