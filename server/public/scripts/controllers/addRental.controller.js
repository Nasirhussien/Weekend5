app.controller('AddRentalController', ['AddRentalService', function (AddRentalService) {
    console.log('AddRentalController is running');
    var self = this;

    self.message = 'HELLOOO'

    self.addRental = AddRentalService.addNewRental;

   
    


}]);