/// <reference path="typings/jquery.d.ts"/>
/// <reference path="typings/jquery.scrollTo.d.ts"/>

var currentRow = 1;
var currentColumn = 2;
var numColumns = 4;
var numRows = 2;
var defaultDuration = 200;

var columnsWithContent = [2, 3];

declare var windowHeight: number;
declare var windowWidth: number;

$(function() {
    windowHeight = $(document).height();
    windowWidth = $(document).width();

    $('#mask').css('width', windowWidth * numColumns);
    $('#mask').css('height', windowHeight * numRows);
    $('li').css('width', windowWidth);
    $('li').css('height', windowHeight);

    changeScreen(0);

    $('.next-button').on('click', handleNext);
    $('.prev-button').on('click', handlePrev);
    $('#wrapper')
        .on('swipeleft', handleNext)
        .on('swiperight', handlePrev);

    $('.up-button').on('click', handleUp);
    $('.down-button').on('click', handleDown);
});

function handleNext(): any {
    if (currentColumn == numColumns) { return }
    if (currentRow == 2) {
        currentRow -= 1
    }

    currentColumn += 1;
    changeScreen();
}

function handlePrev(): any {
    if (currentColumn == 1) { return }
    if (currentRow == 2) {
        currentRow -= 1
    }

    currentColumn -= 1;
    changeScreen();
}

function handleDown(): any {
    console.log('click down', currentColumn, currentRow);
    currentRow += 1;
    changeScreen()
}

function handleUp(): any {
    currentRow -= 1;
    changeScreen()
}

function changeScreen(duration = 200): any {
    updatePrevNextButtons();
    updateUpDownButton();
    doScroll(currentRow, currentColumn, duration);
}

function doScroll(rowNumber: number, colNumber: number, duration: number = defaultDuration): any {
    var top = windowHeight * (rowNumber - 1);
    var left = windowWidth * (colNumber - 1);
    $('#wrapper').scrollTo({ top: top, left: left}, {duration: duration});
}

function updatePrevNextButtons(): any {
    if (currentColumn == 1) {
        $('.prev-button').hide();
    } else if (currentColumn == numColumns) {
        $('.next-button').hide();
    } else {
        $('.prev-button').show();
        $('.next-button').show();
    }
}

function updateUpDownButton(): any {
    if (columnsWithContent.indexOf(currentColumn) == -1) {
        $('.up-button').hide();
        $('.down-button').hide();
        return
    }

    if (currentRow == 1) {
        $('.up-button').hide();
        $('.down-button').show();
    }
    else if (currentRow == 2) {
        $('.up-button').show()
        $('.down-button').hide()
    }
}
