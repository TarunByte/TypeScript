"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = void 0;
class Auth {
    login(name, password) {
        if (name && password) {
            return "Student Login";
        }
        else {
            return "not Login";
        }
    }
}
exports.Auth = Auth;
class Student extends Auth {
    result(marks) {
        if (marks > 33) {
            return "Pass";
        }
        else {
            return "failed";
        }
    }
}
var s1 = new Student();
console.log(s1.result(60));
class Teacher extends Auth {
    subject(subject) {
        return "he teach" + subject;
    }
}
var t1 = new Teacher();
console.log(t1.login("sam", "12345"));
