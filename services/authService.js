export function checkIsLoggedUser() {
    let loggedUser = localStorage.getItem('loggedUser');
    return loggedUser;
} 

export function checkIsRegistered(emailValue) {
    let users = getAllUsers();
    if (users[emailValue]?.email === emailValue) {
        return true;
    }
    return false;
} 

export function logIn(email) {
    localStorage.setItem('loggedUser', email);
} 

export function register(email, userData) {
    let users = getAllUsers();
    users[email] = userData;
    localStorage.setItem('users', JSON.stringify(users));
} 

export function logOut() {
    localStorage.setItem('loggedUser', 'noUser');
} 

export function getUser(email) {
    return JSON.parse(localStorage.users)[email];
} 

export function getAllUsers() {
    let users = {};
    let areRegisteredUsers = !!(localStorage.getItem('users'));
    if (areRegisteredUsers) {
        users = JSON.parse(localStorage.users);
    }
    return users;
}

export function setUserforEdit(email) {
    localStorage.setItem('userForEdit', email);
}

export function getUserforEdit() {
    const email = localStorage.getItem('userForEdit');
    const user = getUser(email);
    return user;
} 

export function deleteUser (email) {
    let users = getAllUsers();
    delete users[email];
    localStorage.setItem('users', JSON.stringify(users));
}

