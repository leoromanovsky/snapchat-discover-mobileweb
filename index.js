/// <reference path="typings/jquery.d.ts"/>
/// <reference path="typings/jquery.scrollTo.d.ts"/>
var currentPage = 1;
var pages = ['page0', 'page1', 'page2'];
var defaultScrollToOptions = { duration: 200 };
$(function () {
    doScroll('#page1', { duration: 0 });
    updatePrevNextButtons();
    $('.next-button').on('click', function () {
        console.log('click next-button', currentPage);
        if (currentPage == (pages.length - 1)) {
            return;
        }
        currentPage += 1;
        updatePrevNextButtons();
        doScroll(pageId(), defaultScrollToOptions);
    });
    $('.prev-button').on('click', function () {
        console.log('click prev-button', currentPage);
        if (currentPage == 0) {
            return;
        }
        currentPage -= 1;
        updatePrevNextButtons();
        doScroll(pageId(), defaultScrollToOptions);
    });
});
function pageId() {
    return "#" + pages[currentPage];
}
function doScroll(element, options) {
    $('#wrapper').scrollTo(element, options);
}
function updatePrevNextButtons() {
    if (currentPage == 0) {
        $('.prev-button').hide();
    }
    else if (currentPage == (pages.length - 1)) {
        $('.next-button').hide();
    }
    else {
        $('.prev-button').show();
        $('.next-button').show();
    }
}
//# sourceMappingURL=index.js.map