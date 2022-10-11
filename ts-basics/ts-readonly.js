var ReadOnly = /** @class */ (function () {
    function ReadOnly(name) {
        this.name = name;
    }
    ReadOnly.prototype.getName = function () {
        return this.name;
    };
    return ReadOnly;
}());
var readName = new ReadOnly("Sanket Benade");
console.log(readName.getName());
