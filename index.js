/// <reference path="typings/jquery.d.ts"/>
/// <reference path="typings/fullPage.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var mapboxAccessToken = "pk.eyJ1Ijoic3RyYXZhbHIiLCJhIjoiQjV5dllkNCJ9.Jso5bao3AOEvB1NjbkPJXg";
function instagramUrl(id, requestedWidth) {
    var size = 'l';
    if (requestedWidth <= 320) {
        size = 'm';
    }
    return "https://www.instagram.com/p/" + id + "/media?size=" + size;
}
function mapboxStaticMap(arg) {
    return "https://api.mapbox.com/v4/mapbox.streets/" + arg + "?access_token=" + mapboxAccessToken;
}
function mapboxMapSize(height, width) {
    return height + "x" + width;
}
var FullPageManager = (function () {
    //pages: Array<Section>;
    function FullPageManager(docHeight, docWidth) {
        this.firstPage = new FirstPage();
        this.lastPage = new LastPage();
        this.docHeight = docHeight;
        this.docWidth = docWidth;
    }
    FullPageManager.prototype.render = function () {
        return "\n            " + this.firstPage.render() + "\n            " + this.pages().map(function (p) { return p.render(); }).join('') + "\n            " + this.lastPage.render() + "\n            ";
    };
    FullPageManager.prototype.documentWidth = function () {
        return this.docWidth;
    };
    FullPageManager.prototype.documentHeight = function () {
        return this.docHeight;
    };
    FullPageManager.prototype.pages = function () {
        return [new Section("<div class=\"section active\">\n      <div class=\"slide\">\n        <img src=\"" + instagramUrl('4QqH_uxRLf', this.documentWidth()) + "\" width=\"" + this.documentWidth() + "\" />\n      </div>\n      <div class=\"slide\">\n        <img src=\"" + mapboxStaticMap("path-5+f44+f44(acreF%60m%60jV%60A%60Dq%60@sh@eEeHH_DwJl@%7D~AzvAcJzMeGfP~G%60eA%7DCbH%60Cd%5E_CtEeG%60DEnEdDjItIrCjCjFuAdDOpMsFrKfRnoC%60CbHuC%60h@hFkC%7COt@~ApAMxEbCvAnBQbCkGhGjHrFKJuBiGqMDmEjFcFzAiHhIgFnD%7DNpIk@~D%60De@oKbDw@WqHxCm@oAgSlDk@%7BCqf@lIkA)/auto/" + mapboxMapSize(this.documentWidth(), this.documentHeight()) + ".png") + "\" width=\"" + this.documentWidth() + "\" height=\"627\" />\n      </div>\n      <div class=\"slide\"><img src=\"" + instagramUrl('34rI74xRFj', this.documentWidth()) + "\" width=\"" + this.documentWidth() + "\" /></div>\n    </div>"),
            new Section("\n        <div class=\"section\">\n          <div class=\"slide\">\n            <img src=\"" + mapboxStaticMap("path-5+f44+f44(kumwFrjvbMaf%40kuD%7BnCkS)/auto/" + mapboxMapSize(this.documentWidth(), this.documentHeight()) + ".png") + "\" width=" + this.documentWidth() + "\" height=\"627\" />\n          </div>\n          <div class=\"slide\">\n            <img src=\"" + instagramUrl('4IZpIZRRHi', this.documentWidth()) + "\" width=\"" + this.documentWidth() + "\" />\n          </div>\n          <div class=\"slide\">\n            <img src=\"" + instagramUrl('371ql4RRC1', this.documentWidth()) + "\" width=\"" + this.documentWidth() + "\" />\n          </div>\n        </div>")];
    };
    FullPageManager.prototype.initPlugin = function () {
        $('#fullpage').fullpage({
            loopHorizontal: false,
            slidesNavigation: true,
            verticalCentered: false
        });
    };
    return FullPageManager;
})();
var Section = (function () {
    function Section(el) {
        this.el = el;
    }
    Section.prototype.render = function () {
        return this.el;
    };
    return Section;
})();
var FirstPage = (function (_super) {
    __extends(FirstPage, _super);
    function FirstPage() {
        _super.call(this, '');
    }
    FirstPage.prototype.render = function () {
        return "\n        <div id=\"settings\" class=\"section\">\n            <div id=\"settingsContent\">\n                <img class=\"labslogo\" src=\"images/strava-labs-logo.png\" />\n            </div>\n        </div>";
    };
    return FirstPage;
})(Section);
var LastPage = (function (_super) {
    __extends(LastPage, _super);
    function LastPage() {
        _super.call(this, '');
    }
    LastPage.prototype.render = function () {
        return "\n        <div id=\"end\" class=\"section\">\n          <div id=\"endContent\">\n            <h1>What will you discover next?</h1>\n            <h2>Come back tomorrow at 10am ET to explore more.</h2>\n            <img class=\"labslogo\" src=\"images/strava-labs-logo.png\" />\n          </div>\n        </div>";
    };
    return LastPage;
})(Section);
$(function () {
    var docHeight = $(document).height();
    var docWidth = $(document).width();
    var pageManager = new FullPageManager(docHeight, docWidth);
    $('#fullpage').html(pageManager.render());
    pageManager.initPlugin();
    setTimeout(function () {
        $('#loader').fadeOut(1000);
    }, 1500);
});
//# sourceMappingURL=index.js.map