"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inheritance_1 = require("./inheritance");
var userInfo = {
    name: "anil",
    age: 21,
    email: "anil@test.com",
    password: "1234@abc",
};
class User extends inheritance_1.Auth {
}
var user1 = new User();
user1.login(userInfo.name, userInfo.password);
console.log(userInfo);
