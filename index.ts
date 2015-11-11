/// <reference path="typings/jquery.d.ts"/>
/// <reference path="typings/fullPage.d.ts"/>

var mapboxAccessToken: string = "pk.eyJ1Ijoic3RyYXZhbHIiLCJhIjoiQjV5dllkNCJ9.Jso5bao3AOEvB1NjbkPJXg";

function instagramUrl(id, requestedWidth: number): string {
    var size = 'l';
    if (requestedWidth <= 320) {
        size = 'm'
    }

    return `https://www.instagram.com/p/${id}/media?size=${size}`
}

function mapboxStaticMap(arg: string): string {
    return `https://api.mapbox.com/v4/mapbox.streets/${arg}?access_token=${mapboxAccessToken}`
}

function mapboxMapSize(height: number, width: number): string {
    return `${height}x${width}`
}

class FullPageManager {
    private docHeight: number;
    private docWidth: number;

    firstPage = new FirstPage();
    lastPage = new LastPage();
    //pages: Array<Section>;

    constructor(docHeight: number, docWidth: number) {
        this.docHeight = docHeight;
        this.docWidth = docWidth;
    }

    render(): string {
        return `
            ${this.firstPage.render()}
            ${this.pages().map(function(p) {return p.render()} ).join('')}
            ${this.lastPage.render()}
            `
    }

    documentWidth(): number {
        return this.docWidth
    }

    documentHeight(): number {
        return this.docHeight
    }

    pages(): Array<Section> {
        return [new Section(
            `<div class="section active">
      <div class="slide">
        <img src="${instagramUrl('4QqH_uxRLf', this.documentWidth())}" width="${this.documentWidth()}" />
      </div>
      <div class="slide">
        <img src="${mapboxStaticMap(`path-5+f44+f44(acreF%60m%60jV%60A%60Dq%60@sh@eEeHH_DwJl@%7D~AzvAcJzMeGfP~G%60eA%7DCbH%60Cd%5E_CtEeG%60DEnEdDjItIrCjCjFuAdDOpMsFrKfRnoC%60CbHuC%60h@hFkC%7COt@~ApAMxEbCvAnBQbCkGhGjHrFKJuBiGqMDmEjFcFzAiHhIgFnD%7DNpIk@~D%60De@oKbDw@WqHxCm@oAgSlDk@%7BCqf@lIkA)/auto/${mapboxMapSize(this.documentWidth(), this.documentHeight())}.png`)}" width="${this.documentWidth()}" height="627" />
      </div>
      <div class="slide"><img src="${instagramUrl('34rI74xRFj', this.documentWidth())}" width="${this.documentWidth()}" /></div>
    </div>`),
            new Section(`
        <div class="section">
          <div class="slide">
            <img src="${mapboxStaticMap(`path-5+f44+f44(kumwFrjvbMaf%40kuD%7BnCkS)/auto/${mapboxMapSize(this.documentWidth(), this.documentHeight())}.png`)}" width=${this.documentWidth()}" height="627" />
          </div>
          <div class="slide">
            <img src="${instagramUrl('4IZpIZRRHi', this.documentWidth())}" width="${this.documentWidth()}" />
          </div>
          <div class="slide">
            <img src="${instagramUrl('371ql4RRC1', this.documentWidth())}" width="${this.documentWidth()}" />
          </div>
        </div>`)]
    }

    initPlugin(): any {
        $('#fullpage').fullpage({
            loopHorizontal: false,
            slidesNavigation: true,
            verticalCentered: false
        });
    }
}

class Section {
    el: string;

    constructor(el: string) {
        this.el = el;
    }

    render(): string {
        return this.el;
    }
}

class FirstPage extends Section {
    constructor() {
        super('')
    }

    render(): string {
        return `
        <div id="settings" class="section">
            <div id="settingsContent">
                <img class="labslogo" src="images/strava-labs-logo.png" />
            </div>
        </div>`
    }
}

class LastPage extends Section {
    constructor() {
        super('')
    }

    render(): string {
        return `
        <div id="end" class="section">
          <div id="endContent">
            <h1>What will you discover next?</h1>
            <h2>Come back tomorrow at 10am ET to explore more.</h2>
            <img class="labslogo" src="images/strava-labs-logo.png" />
          </div>
        </div>`
    }
}

$(function() {
    var docHeight = $(document).height();
    var docWidth = $(document).width();

    var pageManager = new FullPageManager(docHeight, docWidth);
    $('#fullpage').html(pageManager.render());
    pageManager.initPlugin();

    setTimeout(function() {
        $('#loader').fadeOut(1000);
    }, 1500);
});
