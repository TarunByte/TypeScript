"use strict";
//? In JavaScript and TypeScript, Number has a maximum safe integer
//? Number.MAX_SAFE_INTEGER = 2^53-1
//? 9007199254740991
//? Beyond this limit, precision issues arise.
Object.defineProperty(exports, "__esModule", { value: true });
console.log("bigint example");
var bignumber = 9007199254740991n;
var x = 1n;
var y = 2n;
console.log(bignumber + x);
console.log(bignumber + y);
