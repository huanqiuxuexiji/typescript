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
