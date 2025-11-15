"use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
var UserNameSpace;
(function (UserNameSpace) {
  class Auth {
    login() {
      console.log("user login function");
    }
  }
  UserNameSpace.Auth = Auth;
  function getList() {
    console.log("list of users");
  }
  UserNameSpace.getList = getList;
})(UserNameSpace || (UserNameSpace = {}));
var AdminNameSpace;
(function (AdminNameSpace) {
  class Auth {
    login() {
      console.log("user login function");
    }
  }
  AdminNameSpace.Auth = Auth;
  function getList() {
    console.log("list of users", apiURL);
  }
  AdminNameSpace.getList = getList;
  const apiURL = "www.com";
})(AdminNameSpace || (AdminNameSpace = {}));
var user8 = new UserNameSpace.Auth();
user8.login();
UserNameSpace.getList();
