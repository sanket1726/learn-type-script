var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        if (firstName === void 0) { firstName = ""; }
        if (lastName === void 0) { lastName = ""; }
        this.firstName = firstName;
        this.lastName = lastName;
    }
    //   greet() {
    //     return `Hello this is Hi from Person ${this.firstName} ${this.lastName}!`
    //   }
    Person.prototype.greet = function () {
        console.log("Hello this is Hi from Person!");
    };
    return Person;
}());
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    function Programmer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //   greet() {
    //     return `Hello this is Hi from Programmer ${this.firstName} ${this.lastName}!`
    //   }
    Programmer.prototype.greet = function () {
        console.log("Hello this is Hi from Programmer!");
    };
    Programmer.prototype.greetLikeNormalPerson = function () {
        _super.prototype.greet.call(this);
    };
    return Programmer;
}(Person));
// let personObj = new Person("Sanket", "Benade")
// let programmerObj = new Programmer("Sanket", "Benade")
var programmerObj = new Programmer();
var programmerObj2 = new Programmer();
var call = programmerObj.greetLikeNormalPerson();
// Property 'greetLikeNormalPerson' does not exist on type 'Person'.
// let call2 = programmerObj2.greetLikeNormalPerson()
