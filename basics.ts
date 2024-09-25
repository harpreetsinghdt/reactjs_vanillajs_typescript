// Primitives: number, string, boolean, null, undefined, symbol
// More Complex types: arrays, objects
// Function types, parameters

// Primitives

let myAge: number = 37;

let age: number;
age = 37;

let MyFirstName: string = "Harpreet";

let firstName: string;
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
