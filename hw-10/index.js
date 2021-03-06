'use strict';

const btnGetAllUsers = document.querySelector('.btn-get-all-users');
const btnFindUserById = document.querySelector('.btn-find-user-by-id');
const btnAddUser = document.querySelector('.btn-add-user');
const btnRemoveUser = document.querySelector('.btn-remove-user');
const btnUpdateUser = document.querySelector('.btn-update-user');
const allUsersList = document.querySelector('.all-users-list');
const inputFindUserById = document.querySelector('.input-find-user-by-id');
const userById = document.querySelector('.user-by-id');
const inputAddUserName = document.querySelector('.input-add-user-name');
const inputAddUserAge = document.querySelector('.input-add-user-age');
const inputRemoveUserId = document.querySelector('.input-remove-user-id');
const inputUpdateUserId = document.querySelector('.input-update-user-id');
const inputUpdateUserName = document.querySelector('.input-update-user-name');
const inputUpdateUserAge = document.querySelector('.input-update-user-age');
const btnClearAllUsers = document.querySelector('.btn-clear-all-users');
let allUsersList_empty = true;


btnGetAllUsers.value = 'Get All Users';
btnFindUserById.value = 'Find User By Id';
btnAddUser.value = 'Add User';
btnRemoveUser.value = 'Remove User';
btnUpdateUser.value = 'Update User';
btnClearAllUsers.value = 'Clear List';

const url = 'https://test-users-api.herokuapp.com/users/';

btnClearAllUsers.addEventListener('click', clearAllUsers);

function clearAllUsers() {
    allUsersList_empty = true;
    allUsersList.innerHTML = '';
}


btnGetAllUsers.addEventListener('click', getAllUsers);
function getAllUsers() {
    if (allUsersList_empty) {
        allUsersList_empty = false;
        fetch(url)
            .then(response => {
                if (response.ok) return response.json();

                throw new Error(`Error while fetching: ${response.statusText}`);
            })
            .then(data => {

                let arr = data.data.map(el => el
                )
                console.log(arr);
                
                
                // allUsersList.innerHTML = `<h3>${arr.name}</h3><p>age: ${arr.age}</p><p> id: ${arr.id}</p> `

            }


            )
            .catch(error => console.log(error));

    }
}


btnFindUserById.addEventListener('click', findUserById);

function findUserById(id) {
    id = inputFindUserById.value;


    fetch(`${url}${id}`)
        .then(response => {
            if (response.ok) return response.json();

            throw new Error(`Error while fetching: ${response.statusText}`);
        })
        .then(data => {

            console.log(data.data);

            for (let el in data.data) {
                userById.innerHTML += `<p>${el}:${data.data[el]}</p>`;
            }

        }
        )
        .catch(error => console.log(error));



}


btnAddUser.addEventListener('click', addUser);

function addUser() {

    let newPost = {
        name: inputAddUserName.value,
        age: inputAddUserAge.value,
    };

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(newPost),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => {
            if (response.ok) return response.json();

            throw new Error(`Error while fetching: ${response.statusText}`);
        })
        .then(data => alert('User added!'))
        .catch(error => console.log('ERROR' + error));
}


btnRemoveUser.addEventListener('click', removeUser);

function removeUser(id) {
    id = inputRemoveUserId.value;


    fetch(`${url}${id}`, {
        method: 'DELETE'
    }).then(() => alert('User deleted!'))
        .catch(error => console.log('ERROR' + error));
}

btnUpdateUser.addEventListener('click', updateUser);

function updateUser(id) {
    id = inputUpdateUserId.value;

    let update = {
        name: inputUpdateUserName.value,
        age: inputUpdateUserAge.value,
    }

    fetch(`${url}${id}`, {
        method: 'PUT',
        body: JSON.stringify(update),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => {
            if (response.ok) return response.json();

            throw new Error(`Error while fetching: ${response.statusText}`);
        })
        .then(data => alert('User updated!'))
        .catch(error => console.log('ERROR' + error));

}