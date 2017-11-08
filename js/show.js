"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//模块加载器
var user_model_1 = require("./user.model");
window.onload = function () {
    var users = [
        new user_model_1.User(1, '张一', '男', 12, '未婚', '成都', '身份证', '54652', '0102', '@aaa'),
        new user_model_1.User(2, '张二', '男', 12, '已婚', '上海', '军人证', '54652', '0102', '@aaa'),
        new user_model_1.User(3, '张三', '女', 12, '未婚', '大理', '身份证', '54652', '0102', '@aaa'),
        new user_model_1.User(4, '张四', '女', 12, '已婚', '成都', '军人证', '54652', '0102', '@aaa')
    ];
    if (!sessionStorage.users) {
        sessionStorage.users = JSON.stringify(users);
    }
    auto_data();
};
function auto_data() {
    var users = JSON.parse(sessionStorage.users);
    var tbody = document.getElementsByTagName('tbody')[0];
    //不能直接获取到rows，？？？类型检测麻烦
    var row = tbody.firstElementChild;
    var _loop_1 = function () {
        row.getElementsByClassName('id')[0].textContent = users[i].id;
        row.getElementsByClassName('name')[0].textContent = users[i].name;
        row.getElementsByClassName('gender')[0].textContent = users[i].gender;
        row.getElementsByClassName('age')[0].textContent = users[i].age;
        row.getElementsByClassName('marry')[0].textContent = users[i].marry;
        row.getElementsByClassName('address')[0].textContent = users[i].address;
        row.getElementsByClassName('idType')[0].textContent = users[i].idType;
        row.getElementsByClassName('idNumber')[0].textContent = users[i].idNumber;
        row.getElementsByClassName('tel')[0].textContent = users[i].tel;
        row.getElementsByClassName('email')[0].textContent = users[i].email;
        console.log(row.getElementsByClassName('name')[0].textContent);
        var userId = users[i].id;
        button = row.getElementsByClassName('remove')[0];
        button.addEventListener('click', function () {
            removeUser(userId);
        });
        update = row.getElementsByClassName('update')[0];
        update.addEventListener('click', function () {
            updateUser(userId);
        });
        console.log(row);
        if (i > 0) {
            tbody.appendChild(row);
        }
        //类型转换,????我去
        row = row.cloneNode(true);
    };
    var button, update;
    for (var i = 0; i < users.length; i++) {
        _loop_1();
    }
}
//给Array的prototype赋予新属性，得先声明类型
function removeByValue(arr, val) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].id == val) {
            arr.splice(i, 1);
            break;
        }
    }
}
;
function removeUser(id) {
    var newUsers = JSON.parse(sessionStorage.users);
    removeByValue(newUsers, id);
    sessionStorage.users = JSON.stringify(newUsers);
    alert('删除成功');
    location.reload();
}
;
function updateUser(id) {
    sessionStorage.userId = id;
    location.href = '../html/update.html';
}
//browserify模块加载器,导致无法使用onclick=“createUser”
// function createUser() {
//     location.href = '../html/create.html';
// };
document.getElementsByClassName("createUser")[0].addEventListener('click', function () {
    location.href = '../html/create.html';
});
var Show = /** @class */ (function () {
    function Show() {
    }
    return Show;
}());
exports.Show = Show;
;
