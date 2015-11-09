/// <reference path="typings/jquery.d.ts"/>
var pages = [
    {
        titleCardId: '#page1TitleCard',
        titleBackground: '#BBE8FF',
        contentId: '#page1Content'
    },
    {
        titleCardId: '#page2TitleCard',
        titleBackground: '#A7FFE9',
        contentId: '#page2Content'
    },
    {
        titleCardId: '#page3TitleCard',
        titleBackground: '#FF80B3',
        contentId: '#page3Content'
    }
];
// title or content
var currentActivePageType = 'title';
var currentPage = 0;
var firstScrollEventOnContent = true;
function renderTitleCard(index) {
    var contentToRender = $(pages[index].titleCardId);
    $("#contentContainer").html(contentToRender.html());
    $("#contentContainer").css('background-color', pages[index].titleBackground);
}
function renderContent(index) {
    var contentToRender = $(pages[index].contentId);
    $("#contentContainer").html(contentToRender.html());
}
$(function () {
    renderTitleCard(0);
    jQuery('#contentContainer').on("swiperight", function () {
        console.log("swiperight");
        if (currentActivePageType == 'content') {
            return;
        }
        if (currentPage == 0) {
            return;
        }
        currentPage = currentPage - 1;
        renderTitleCard(currentPage);
    }).on("swipeleft", function () {
        console.log("swipeleft");
        if (currentPage == (pages.length - 1)) {
            return;
        }
        if (currentActivePageType == 'content') {
            return;
        }
        currentPage = currentPage + 1;
        renderTitleCard(currentPage);
    });
    /*
     $("#contentContainer").on("swipeup",function() {
     if (currentActivePageType == 'content') {
     return
     }

     currentActivePageType = 'content'
     firstScrollEventOnContent = true
     renderContent(currentPage);
     });
     */
    /*
     $(document).on("scrollstop", function() {
     if (firstScrollEventOnContent) {
     firstScrollEventOnContent = false
     return
     }

     if (currentActivePageType == 'title') {
     return
     }

     var contentHeight = $(pages[currentPage].contentId).height();
     var scrollTop = $(document).scrollTop();
     var containerHeight = $("#contentContainer").height();

     console.log("scrollTop", scrollTop);

     if (scrollTop == 0) {
     // we are at the top
     console.log("at top!")

     renderTitleCard(currentPage)
     currentActivePageType = 'title'

     } else if (contentHeight == (scrollTop + containerHeight)) {
     console.log("at bottom!")
     }
     });
     */
});
//# sourceMappingURL=index.js.map