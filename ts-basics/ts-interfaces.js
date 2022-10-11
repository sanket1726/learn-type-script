var MyPerson = /** @class */ (function () {
    //   firstName: string
    //   lastName: string
    function MyPerson(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    MyPerson.prototype.setFirstName = function (firstName) {
        this.firstName = firstName;
    };
    MyPerson.prototype.getFirstName = function () {
        return this.firstName;
    };
    MyPerson.prototype.setLastName = function (lastName) {
        this.lastName = lastName;
    };
    MyPerson.prototype.getLastName = function () {
        return this.lastName;
    };
    MyPerson.prototype.getFullName = function () {
        console.log("".concat(this.firstName, " ").concat(this.lastName));
    };
    return MyPerson;
}());
// Duck-Typing
var obj = {
    firstName: "Krishna",
    lastName: "Vasudev",
    getFullName: function () { return obj.firstName + " " + obj.lastName; }
};
var aPerson = new MyPerson("Sanket", "Benade");
// aPerson = obj
aPerson.getFullName();
