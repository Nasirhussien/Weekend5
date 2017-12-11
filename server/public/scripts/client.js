var app = angular.module('RealEstateApp', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider.when('/',{
        templateUrl: '/views/home.html',
        controller: 'HomeController as vm'
    }).when('/listings', {
        templateUrl: '/views/listings.html',
        controller: 'ListingsController as vm'
    }).when('/rentals', {
        templateUrl: '/views/rentals.html',
        controller: 'RentalsController as vm'
    }).when('/addListing', {
        templateUrl: 'views/addListing.html',
        controller: 'AddListingController as vm'
    }).when('/addRental', {
        templateUrl: 'views/addRental.html',
        controller: 'AddRentalController as vm'
    }).otherwise({
        template: '<h1>404 Page Not Found</h1>'
    });
});