var Customer1 = /** @class */ (function () {
    function Customer1(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    Object.defineProperty(Customer1.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer1.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer1;
}());
// create an instance of the classe
var myCustomer1 = new Customer1("Mary", "Willis");
//myCustomer.firstName = "Marty";
//myCustomer.lastName = "Pillar";
console.log(myCustomer1.firstName);
console.log(myCustomer1.lastName);
