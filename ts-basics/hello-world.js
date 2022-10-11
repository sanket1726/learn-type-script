var fn = function () { return 'response'; };
// vairables binding with types
var a = 20;
var numArray;
var numArray2 = [];
var stringArray;
var stringArray2 = [];
var objArray = [];
var objArray = [{ a: 'sa', b: 'bb' }, { a: 'ssd', b: 'dd' }];
// tuples
var myArray;
var myFunction = function (a, b) {
    return a + b;
};
// post declarations for vairables
a = 10;
numArray = [10, 20, 30];
numArray2 = [20, 30, 40];
numArray.push(40);
// numArray2.push('name'); // wrong declarations
stringArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
stringArray2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
stringArray2.push('z');
// stringArray2.push(40); // wrong insertion
myArray = [10, false];
// myArray = [20,'sanket']; // wrong value insertion
// Function binding with optional arguments
function add(a, b, c) {
    if (a === void 0) { a = 0; }
    if (b === void 0) { b = 0; }
    if (c === void 0) { c = 0; }
    return a + b + c;
}
add(10, 10, 20);
// Any & Uniion types >> more flexibility
var d = 0;
d = 10;
d = false;
// d = 'sanket' // wrong value insertion
