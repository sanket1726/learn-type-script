//  Writer some here so that concepts about generics & modules will be cleared.
var Generics = /** @class */ (function () {
    function Generics(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
    Generics.prototype.getDetails = function () {
        return "Name is : ".concat(this.name, " & age is: ").concat(this.age);
    };
    return Generics;
}());
var gen = new Generics("Sanket Benade", 26);
console.log(gen.getDetails());
