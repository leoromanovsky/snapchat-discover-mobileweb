/// <reference path="jquery.d.ts"/>

interface HorizonScrollOptions {
    swipe?: boolean;
    i?: number;
}

interface JQuery {
    horizon: {
        (settings?: HorizonScrollOptions): any;
    }
}
