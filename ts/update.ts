import { User } from './user.model';

//等待其他文件加载完成，再执行的内容
window.onload = function() {
    //获取修改的用户数据，绑定到页面上显示
    var user = getUser(JSON.parse(sessionStorage.users));
    (<HTMLInputElement>document.getElementById('newName')).value = user.name;
    (<HTMLInputElement>document.getElementById('newGender')).value = user.gender;
    (<HTMLInputElement>document.getElementById('newAge')).value = user.age +'';
    (<HTMLInputElement>document.getElementById('newMarry')).value = user.marry;
    (<HTMLInputElement>document.getElementById('newAddress')).value = user.address;
    (<HTMLInputElement>document.getElementById('newIdType')).value = user.idType;
    (<HTMLInputElement>document.getElementById('newIdNumber')).value = user.idNumber;
    (<HTMLInputElement>document.getElementById('newTel')).value = user.tel;
    (<HTMLInputElement>document.getElementById('newEmail')).value = user.email;

}

//从users获取被修改用户的user
function getUser(users: Array<User>) {
    for (var i = 0; i < users.length; i++) {
        if (users[i].id == sessionStorage.userId) {
            return users[i];
        }
    }
}

function updateUser() {
    var users = JSON.parse(sessionStorage.users);
    var user = new User(
        sessionStorage.userId,
        (<HTMLInputElement>document.getElementById('newName')).value,
        (<HTMLSelectElement>document.getElementById('newGender')).value,
        parseInt((<HTMLInputElement>document.getElementById('newAge')).value),
        (<HTMLSelectElement>document.getElementById('newMarry')).value,
        (<HTMLInputElement>document.getElementById('newAddress')).value,
        (<HTMLSelectElement>document.getElementById('newIdType')).value,
        (<HTMLInputElement>document.getElementById('newIdNumber')).value,
        (<HTMLInputElement>document.getElementById('newTel')).value,
        (<HTMLInputElement>document.getElementById('newEmail')).value
    );
    updateBytextContent(users,user);
    //重新更改sessionStorage的数据
    sessionStorage.users = JSON.stringify(users);
    alert('修改成功');
    location.href = '../html/show.html';
}
document.getElementsByClassName("updateUser")[0].addEventListener('click', function() {
    updateUser();
});


function updateBytextContent(arr: Array<User>,val: User) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].id == sessionStorage.userId) {
            arr[i] = val;
            break;
        }
    }
};