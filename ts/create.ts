import { User } from './user.model';

function createUser() {
    var users = JSON.parse(sessionStorage.users) as Array<User>;
    var user = new User(getUserId(users),
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
    users.push(user);

    sessionStorage.users = JSON.stringify(users);
    alert('创建成功');
    location.href = '../html/show.html';
};

document.getElementsByClassName("createUser")[0].addEventListener('click', function() {
    createUser();
});

//根据所有用户里的最大id值，得到新用户的id值
function getUserId(val: Array<User>) {
    var max = val[0].id;
    for (var i = 0; i < val.length; i++) {
        if (!val[i].id) {
            continue;
        } else {
            if (val[i].id > max) {
                max = val[i].id;
            }
        }
    }
    return max + 1;
}