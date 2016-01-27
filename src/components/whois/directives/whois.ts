/// <reference path="../../../../typings/tsd.d.ts" />

interface DirectiveScope extends ng.IScope {
    url: string;
}

export function Whois(): ng.IDirective {
    return {
        restrict: "E",
        link: (scope: DirectiveScope) => {
            scope.url = "google.com"
        },
        templateUrl: require("../views/whois.html")
    }
}