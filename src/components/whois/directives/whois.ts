/// <reference path="../../../../typings/tsd.d.ts" />

//var template = ;

export class Whois {
    constructor() {
        let template = require("../views/whois.html");
        return {
            restrict: "E",
            template: template
        }
    }
}