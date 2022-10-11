var fn  = () => 'response';

// vairables binding with types
var a: number=20;
var numArray: number[] ;
var numArray2: number[]= [];
var stringArray: string[];
var stringArray2: string[] = [];
var objArray: object[] = [];
var objArray:object[] = [{a:'sa',b:'bb'},{a:'ssd',b:'dd'}]

// tuples
var myArray: [number,boolean];

var myFunction: Function =  (a: number, b: number) => {
    return a + b;
}

// post declarations for vairables
a=10;
numArray=[10,20,30];
numArray2=[20,30,40];
numArray.push(40);
// numArray2.push('name'); // wrong declarations

stringArray=['a','b','c','d','e','f','g','h','i'];
stringArray2=['a','b','c','d','e','f','g'];
stringArray2.push('z');
// stringArray2.push(40); // wrong insertion

myArray = [10,false];
// myArray = [20,'sanket']; // wrong value insertion


// Function binding with optional arguments
function add (a: number=0, b: number=0,c:number = 0){
    return a + b + c;
}

eval

add(10,10,20)

// Any & Uniion types >> more flexibility
var d: number | boolean = 0;
d= 10;
d = false;
// d = 'sanket' // wrong value insertion