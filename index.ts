/// <reference path="typings/jquery.d.ts"/>
/// <reference path="typings/fullPage.d.ts"/>

class FullPageManager {
    firstPage = new FirstPage();
    lastPage = new LastPage();
    pages: Array<Section> = [new Section(
        `<div class="section active">
      <div class="slide">
        <img src="https://www.instagram.com/p/4QqH_uxRLf/media?size=l" width="375" />
      </div>
      <div class="slide">
        <img src="https://api.mapbox.com/v4/mapbox.streets/path-5+f44+f44(acreF%60m%60jV%60A%60Dq%60@sh@eEeHH_DwJl@%7D~AzvAcJzMeGfP~G%60eA%7DCbH%60Cd%5E_CtEeG%60DEnEdDjItIrCjCjFuAdDOpMsFrKfRnoC%60CbHuC%60h@hFkC%7COt@~ApAMxEbCvAnBQbCkGhGjHrFKJuBiGqMDmEjFcFzAiHhIgFnD%7DNpIk@~D%60De@oKbDw@WqHxCm@oAgSlDk@%7BCqf@lIkA)/auto/375x627.png?access_token=pk.eyJ1Ijoic3RyYXZhbHIiLCJhIjoiQjV5dllkNCJ9.Jso5bao3AOEvB1NjbkPJXg" width="375" height="627" />
      </div>
      <div class="slide"><img src="https://www.instagram.com/p/34rI74xRFj/media?size=l" width="375" /></div>
    </div>`),
        new Section(`
        <div class="section">
          <div class="slide">
            <img src="https://api.mapbox.com/v4/mapbox.streets/path-5+f44+f44(kumwFrjvbMaf%40kuD%7BnCkS)/auto/375x627.png?access_token=pk.eyJ1Ijoic3RyYXZhbHIiLCJhIjoiQjV5dllkNCJ9.Jso5bao3AOEvB1NjbkPJXg" width="375" height="627" />
          </div>
          <div class="slide">
            <img src="https://www.instagram.com/p/4IZpIZRRHi/media?size=l" width="375" />
          </div>
          <div class="slide">
            <img src="https://www.instagram.com/p/371ql4RRC1/media?size=l" width="375" />
          </div>
        </div>`)];

    render(): string {
        return `
            ${this.firstPage.render()}
            ${this.pages.map(function(p) {return p.render()} ).join('')}
            ${this.lastPage.render()}
            `
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

var pageManager = new FullPageManager();

$(function() {
    setTimeout(function() {
        $('#fullpage').html(pageManager.render());
        pageManager.initPlugin();

        $('#loader').fadeOut(1000);
    }, 1500);
});
