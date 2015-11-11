/// <reference path="jquery.d.ts"/>

interface FullPageOptions {
    loopHorizontal?: boolean;
    slidesNavigation?: boolean;
    verticalCentered?: boolean;
}

interface JQuery {
    fullpage: {
        (options?: FullPageOptions): any;
    }
}
