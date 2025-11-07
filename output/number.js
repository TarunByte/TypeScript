"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// var var_name : data_type
var num1 = 10;
var num2 = 30;
var num3 = 30;
//? How to Add number with data types
var total = num1 + num3;
console.log(total);
//? How to use binary and hexadecimal numbers
var oct = 0o100001;
var hexa = 0x00001;
var binary = 0b00001;
console.log(oct + 10);
//? Convert string to number
var item = 100;
var item2 = "50";
// var item2Converted = Number(item2); //Method1
// var item2Converted = +item2; //Method2
console.log(item + +item2); //Method3
//? Type Inference with number
// var data = 30;
// data = 40;
// data = "anil siddhu";
// var data: number | string = 30;
// data = "anil";
