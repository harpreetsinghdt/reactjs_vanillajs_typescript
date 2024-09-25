// Primitives: number, string, boolean, null, undefined, symbol
// More Complex types: arrays, objects
// Function types, parameters
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Primitives
var myAge = 37;
var age;
age = 37;
var MyFirstName = "Harpreet";
var firstName;
firstName = "Harpreet";
var isImDev = true;
var isDev;
isDev = true;
// More Complex types
var marks;
marks = [23, 32, 10, 55];
var hobbies;
hobbies = ["Coding", "Gym"];
var vehicle;
var person;
person = {
    name: "harpreet",
    age: 37,
};
// person = {
// 	isDev: true
// }
var people;
// Type Inference
// typescript internally get and assign the type of variable when it is initialize at the time of declaration.
var course = "Reactjs with typescript";
// course = 7975
// Union Types
// By this can define multiple possible types for single variable  which are may be type of variable in future but are not clear now what to assign.
var mycourse = "Reactjs with typescript";
mycourse = 7975;
var car;
var carShop;
// Functions & types
function add(a, b) {
    return a + b;
}
// not return means void type
function printMe(value) {
    console.log(value);
}
// Generics
function insertAtBegining(array, value) {
    var newArr = __spreadArray([value], array, true);
    return newArr;
}
var demoArr = [1, 2, 3];
var strArr = ["a1", "a2", "a3"];
var updatedArr = insertAtBegining(demoArr, -1);
var stringArr = insertAtBegining(strArr, "a11");
console.log(updatedArr);
console.log(stringArr);
// updatedArr[0].split("");
