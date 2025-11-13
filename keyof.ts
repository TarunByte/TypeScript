//? The keyof keyword in TypeScript is used to get the keys of a type as a union of string.
//? It is primarily used for type safety when working with objects.

type PersonT = {
  name: string;
  age: number;
  isEmp: boolean;
};

let PersonData: PersonT = {
  name: "Anil siddhu",
  age: 20,
  isEmp: true,
};
type PersonX = keyof PersonT;
// let PersonDataX: PersonX;
let PersonDataX: keyof PersonT;
PersonDataX = "name";
PersonDataX = "age";
PersonDataX = "isEmp";

let UserX: keyof typeof PersonData = "name";
