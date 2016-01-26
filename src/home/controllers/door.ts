/// <reference path="../../../typings/tsd.d.ts" />

export class DoorController {
    scope:any;

    constructor($scope:ng.IScope) {
        this.scope = $scope;
        this.scope.someVar = 43;
    }
}
