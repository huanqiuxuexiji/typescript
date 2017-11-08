"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_model_1 = require("./user.model");
//等待其他文件加载完成，再执行的内容
window.onload = function () {
    //获取修改的用户数据，绑定到页面上显示
    var user = getUser(JSON.parse(sessionStorage.users));
    document.getElementById('newName').value = user.name;
    document.getElementById('newGender').value = user.gender;
    document.getElementById('newAge').value = user.age + '';
    document.getElementById('newMarry').value = user.marry;
    document.getElementById('newAddress').value = user.address;
    document.getElementById('newIdType').value = user.idType;
    document.getElementById('newIdNumber').value = user.idNumber;
    document.getElementById('newTel').value = user.tel;
    document.getElementById('newEmail').value = user.email;
};
//从users获取被修改用户的user
function getUser(users) {
    for (var i = 0; i < users.length; i++) {
        if (users[i].id == sessionStorage.userId) {
            return users[i];
        }
    }
}
function updateUser() {
    var users = JSON.parse(sessionStorage.users);
    var user = new user_model_1.User(sessionStorage.userId, document.getElementById('newName').value, document.getElementById('newGender').value, parseInt(document.getElementById('newAge').value), document.getElementById('newMarry').value, document.getElementById('newAddress').value, document.getElementById('newIdType').value, document.getElementById('newIdNumber').value, document.getElementById('newTel').value, document.getElementById('newEmail').value);
    updateBytextContent(users, user);
    //重新更改sessionStorage的数据
    sessionStorage.users = JSON.stringify(users);
    alert('修改成功');
    location.href = '../html/show.html';
}
document.getElementsByClassName("updateUser")[0].addEventListener('click', function () {
    updateUser();
});
function updateBytextContent(arr, val) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].id == sessionStorage.userId) {
            arr[i] = val;
            break;
        }
    }
}
;
