app.service('AddRentalService',['$http', function($http){
    var self = this;
    self.newRental = {};
    



    self.addNewRental = function(newRental){
        console.log('button clicked: ', newRental);
        $http({
            method: 'POST',
            url: '/rentals',
            data: newRental
        }).then(function(response){
            console.log(response);
        })
    };


}]);  