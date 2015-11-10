/// <reference path="typings/jquery.d.ts"/>
/// <reference path="typings/jquery.scrollTo.d.ts"/>
var currentRow = 1;
var currentColumn = 2;
var numColumns = 4;
var numRows = 2;
var defaultDuration = 200;
var columnsWithContent = [2, 3];
$(function () {
    windowHeight = $(document).height();
    windowWidth = $(document).width();
    $('#mask').css('width', windowWidth * numColumns);
    $('li').css('width', windowWidth);
    $('li').css('height', windowHeight);
    changeScreen(0);
    $('.next-button').on('click', handleNext);
    $('.prev-button').on('click', handlePrev);
    $('#wrapper').on('swipeleft', handleNext).on('swiperight', handlePrev);
    $('.down-button').on('click', handleDown);
});
function handleNext() {
    if (currentColumn == numColumns) {
        return;
    }
    currentColumn += 1;
    changeScreen(defaultDuration);
}
function handlePrev() {
    if (currentColumn == 1) {
        return;
    }
    currentColumn -= 1;
    changeScreen(defaultDuration);
}
function handleDown() {
    console.log('click down', currentColumn, currentRow);
}
function changeScreen(duration) {
    if (duration === void 0) { duration = 200; }
    updatePrevNextButtons();
    updateDownButton();
    doScroll(currentRow, currentColumn, duration);
}
function doScroll(rowNumber, colNumber, duration) {
    if (rowNumber === void 0) { rowNumber = 1; }
    if (colNumber === void 0) { colNumber = 1; }
    if (duration === void 0) { duration = 200; }
    var top = windowHeight * (rowNumber - 1);
    var left = windowWidth * (colNumber - 1);
    $('#wrapper').scrollTo({ top: top, left: left }, { duration: duration });
}
function updatePrevNextButtons() {
    if (currentColumn == 1) {
        $('.prev-button').hide();
    }
    else if (currentColumn == numColumns) {
        $('.next-button').hide();
    }
    else {
        $('.prev-button').show();
        $('.next-button').show();
    }
}
function updateDownButton() {
    if (columnsWithContent.indexOf(currentColumn) == -1) {
        $('.down-button').hide();
    }
    else {
        $('.down-button').show();
    }
}
//# sourceMappingURL=index.js.map