(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_model_1 = require("./user.model");
function createUser() {
    var users = JSON.parse(sessionStorage.users);
    var user = new user_model_1.User(getUserId(users), document.getElementById('newName').value, document.getElementById('newGender').value, parseInt(document.getElementById('newAge').value), document.getElementById('newMarry').value, document.getElementById('newAddress').value, document.getElementById('newIdType').value, document.getElementById('newIdNumber').value, document.getElementById('newTel').value, document.getElementById('newEmail').value);
    users.push(user);
    sessionStorage.users = JSON.stringify(users);
    alert('创建成功');
    location.href = '../html/show.html';
}
;
document.getElementsByClassName("createUser")[0].addEventListener('click', function () {
    createUser();
});
//根据所有用户里的最大id值，得到新用户的id值
function getUserId(val) {
    var max = val[0].id;
    for (var i = 0; i < val.length; i++) {
        if (!val[i].id) {
            continue;
        }
        else {
            if (val[i].id > max) {
                max = val[i].id;
            }
        }
    }
    return max + 1;
}

},{"./user.model":2}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(id, name, gender, age, marry, address, idType, idNumber, tel, email) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.marry = marry;
        this.address = address;
        this.idType = idType;
        this.idNumber = idNumber;
        this.tel = tel;
        this.email = email;
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.marry = marry;
        this.address = address;
        this.idType = idType;
        this.idNumber = idNumber;
        this.tel = tel;
        this.email = email;
    }
    return User;
}());
exports.User = User;

},{}]},{},[1]);
