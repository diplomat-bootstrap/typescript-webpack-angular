/// <reference path="../../../typings/tsd.d.ts" />

export class HomeController {
    scope:any;

    constructor($scope:ng.IScope) {
        this.scope = $scope;
        this.scope.someVar = 42;
    }
}
