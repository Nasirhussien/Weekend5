app.controller('RentalsController', ['RentalsService', function (RentalsService) {
    console.log('RentalsController is running');
    var self = this;
    
    self.message = 'welcome to the rentals page'

    self.rentals = RentalsService.rentals;
    console.log(self.rentals);
    

    RentalsService.getRentals();

    
    
    


}]);