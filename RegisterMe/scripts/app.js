/**
 * Created by Stasy on 21-Jan-17.
 */
var NMber = angular.module("Register", ["ui.router"]);

NMber.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state("home", {
            url:"/",
            templateUrl:"html/home.html"
        })

        .state("NewMember", {
            url:"/NewMember",
            templateUrl:"html/NewMember.html"
        })

        .state("UpdateMember", {
            url:"/UpdateMember",
            templateUrl:"html/UpdateMember.html"
        });

    });

NMber.controller("NewMemberCtrl", function($scope){

});

