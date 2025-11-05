// var var_name : data_type
var num1: number = 10;
var num2: number = 30;
var num3: number = 30;

//? How to Add number with data types
var total: number = num1 + num3;
console.log(total);

//? How to use binary and hexadecimal numbers
var oct: number = 0o100001;
var hexa: number = 0x00001;
var binary: number = 0b00001;

console.log(oct + 10);

//? Convert string to number
var item: number = 100;
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
