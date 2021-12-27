class Customer {
    firstName: string;
    lastName: string;

    constructor(theFirst: string, theLast: string) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }


}

// create an instance of the classe
let myCustomer = new Customer("Mary", "Willis");

//myCustomer.firstName = "Marty";
//myCustomer.lastName = "Pillar";

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);