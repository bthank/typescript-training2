var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
// create an instance of the classe
var myCustomer = new Customer("Mary", "Willis");
//myCustomer.firstName = "Marty";
//myCustomer.lastName = "Pillar";
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
