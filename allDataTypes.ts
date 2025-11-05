//! 🔹 Basic Data Types
// var userName: string = "Kartik Aryan";
// var age: number = 20;
// var male:boolean=true;

//? number : Represents all numbers (integers, floats, hex, binary, octal).
// let age: number = 25;
// let pi: number = 3.14;
// let hex: number = 0xff; // hexadecimal

//? string : Used for text (with single, double, or backticks for template strings).
// let name: string = "Arjun";
// let greeting: string = `Hello, ${name}!`;

//? boolean : Represents true/false values.
// let isActive: boolean = true;
// let isAdmin: boolean = false;

//? null & undefined: Special types with only one value each.
// let n: null = null;
// let u: undefined = undefined;

//! 🔹 Special Types

//? any : Can hold any type (not recommended unless necessary).
// let randomValue: any = 10;
// randomValue = "Hello";
// randomValue = true;

//? unknown: Similar to any, but safer (forces type-checking before usage).
// let value: unknown = "hello";
// if (typeof value === "string") {
//   console.log(value.toUpperCase());
// }

//? void: Usually for functions that don’t return anything.
// function logMessage(msg: string): void {
//   console.log(msg);
// }

//? never: Represents values that never occur (e.g., function that always throws error).
// function throwError(message: string): never {
//   throw new Error(message);
// }

//! 🔹 Object & Collection Types
// object: Represents non-primitive types.
// let person: { name: string; age: number } = { name: "Aman", age: 22 };

//? Arrays: Can be written as type[] or Array<type>.
// let numbers: number[] = [1, 2, 3];
// let fruits: Array<string> = ["apple", "banana"];

//? Tuples: Fixed length & order array with specific types.
// let user: [number, string] = [1, "Raj"];

//? Enums:A set of named constants.
// enum Direction { Up, Down, Left, Right }
// let move: Direction = Direction.Up;

//! 🔹 Advanced Types

//? Union (|) : Variable can be multiple types.
// let id: number | string;
// id = 101;
// id = "abc";

//? Intersection (&): Combines multiple types into one.
// type Person = { name: string };
// type Employee = { id: number };
// type Staff = Person & Employee;

// let emp: Staff = { name: "Ravi", id: 101 };

//? Type Aliases:Create your own type shortcuts.
// type ID = number | string;
// let userId: ID = "U123";

//? Literal Types:Restrict values to exact strings/numbers.
// let status: "success" | "error" | "loading";
// status = "success";
