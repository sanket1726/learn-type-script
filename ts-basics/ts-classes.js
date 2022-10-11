var Demo = /** @class */ (function () {
    function Demo(firstName, lastName) {
        // this.firstName = "";
        // this.lastName = "";
        this.firstName = "Sanket";
        this.lastName = "Benade";
    }
    Demo.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Demo;
}());
var demoObj = new Demo();
console.log(demoObj.getFullName());
