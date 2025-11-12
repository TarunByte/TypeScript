"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CollegeData {
    name;
    constructor(cName) {
        this.name = cName;
    }
    displayTeachersName() {
        console.log("anil", "sam", "peter");
    }
    getStudentList() {
        return ["anil", "sam", "bruce"];
    }
}
var college1 = new CollegeData("IIT Delhi");
// college1.displayTeachersName();
console.log(college1.getStudentList());
