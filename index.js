/// <reference path="typings/jquery.d.ts"/>
/// <reference path="typings/jquery.scrollTo.d.ts"/>
var currentPage = 2;
var numPages = 4;
var defaultScrollToOptions = { duration: 200 };
$(function () {
    doScroll(pageId(), { duration: 0 });
    updatePrevNextButtons();
    $('.next-button').on('click', handleNext);
    $('.prev-button').on('click', handlePrev);
    $('#wrapper').on('swipeleft', handleNext).on('swiperight', handlePrev);
});
function handleNext() {
    console.log('click next-button', currentPage);
    if (currentPage == numPages) {
        return;
    }
    currentPage += 1;
    updatePrevNextButtons();
    doScroll(pageId(), defaultScrollToOptions);
}
function handlePrev() {
    console.log('click prev-button', currentPage);
    if (currentPage == 1) {
        return;
    }
    currentPage -= 1;
    updatePrevNextButtons();
    doScroll(pageId(), defaultScrollToOptions);
}
function pageId() {
    return "#page" + currentPage;
}
function doScroll(element, options) {
    $('#wrapper').scrollTo(element, options);
}
function updatePrevNextButtons() {
    if (currentPage == 1) {
        $('.prev-button').hide();
    }
    else if (currentPage == numPages) {
        $('.next-button').hide();
    }
    else {
        $('.prev-button').show();
        $('.next-button').show();
    }
}
//# sourceMappingURL=index.js.map