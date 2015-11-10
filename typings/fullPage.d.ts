/// <reference path="jquery.d.ts"/>

interface FullPageOptions {
    loopHorizontal?: boolean;
}

interface JQuery {
    fullpage: {
        (options?: FullPageOptions): any;
    }
}
