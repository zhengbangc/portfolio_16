var app = angular.module('mp3',['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: "partials/gallery.html"
        })
        .otherwise({
            redirectTo: '/'
        });
})
