app.service('AddListingService',['$http', function($http){
    var self = this;
    self.newListing = {};
    



    self.addNewListing = function(newListing){
        console.log('button clicked: ', newListing);
        $http({
            method: 'POST',
            url: '/listings',
            data: newListing
        }).then(function(response){
            console.log(response);
        })
    };


}]);  