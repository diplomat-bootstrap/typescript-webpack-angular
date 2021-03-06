/// <reference path="../typings/tsd.d.ts" />
/// <reference path="./home/controllers/home.ts" />

import {HomeController} from "./home/controllers/home";
import {Whois} from "./components/whois/directives/whois";

// initialising new Angular module
let app = angular.module("application", ["ngRoute"]);

// importing all application's controllers for future usage
app.controller("HomeController", ($scope) => new HomeController($scope));

// importing all application's components for future usage
app.directive("whois", Whois);

app.config(($routeProvider: angular.route.IRouteProvider) => {

    let homeTemplate = require("./home/views/home.html");
    $routeProvider.when("/home", {
        templateUrl: homeTemplate,
        controller: "HomeController"
    }).otherwise({
        redirectTo: "/home"
    })
});