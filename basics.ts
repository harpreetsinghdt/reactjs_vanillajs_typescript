// Primitives: number, string, boolean, null, undefined, symbol
// More Complex types: arrays, objects
// Function types, parameters

// Primitives

let myAge: number = 37;

let age: number;
age = 37;

let MyFirstName: string = "Harpreet";

let firstName: string | string[];
firstName = "Harpreet";

let isImDev: boolean = true;

let isDev: boolean;
isDev = true;

// More Complex types
let marks: number[];
marks = [23, 32, 10, 55];

let hobbies: string[];
hobbies = ["Coding", "Gym"];

let vehicle: any;

let person: {
  name: string;
  age: number;
};

person = {
  name: "harpreet",
  age: 37,
};

// person = {
// 	isDev: true
// }

let people: {
  name: string;
  age: number;
}[];

// Type Inference
// typescript internally get and assign the type of variable when it is initialize at the time of declaration.
let course = "Reactjs with typescript";
// course = 7975

// Union Types
// By this can define multiple possible types for single variable  which are may be type of variable in future but are not clear now what to assign.
let mycourse: string | number = "Reactjs with typescript";
mycourse = 7975;

// Type Aliases
type Car = {
  id: number;
  name: string;
  year: number;
  isBrandNew: boolean;
};

let car: Car;

let carShop: Car[];

// Functions & types
function add(a: number, b: number): number {
  return a + b;
}

// not return means void type
function printMe(value: any) {
  console.log(value);
}

// Generics
function insertAtBegining<T>(array: T[], value: T) {
  const newArr = [value, ...array];
  return newArr;
}

const demoArr = [1, 2, 3];
const strArr = ["a1", "a2", "a3"];
const updatedArr = insertAtBegining(demoArr, -1);
const stringArr = insertAtBegining(strArr, "a11");
console.log(updatedArr);
console.log(stringArr);

// updatedArr[0].split("");
