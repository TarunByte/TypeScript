//? Intersection types allow you to Combine multiple types into one

// type personTA = { name: string };
// type personTB = { age: number };
// type personTC = personTA & personTB;

interface personTA {
  name: string;
}
interface personTB {
  age: number;
}
type personTC = personTA & personTB;

var PersonDataA: personTA = { name: "Anil Sidhu" };
var PersonDataB: personTB = { age: 20 };

var PersonDataC: personTC = { name: "Sidhu", age: 22 };
