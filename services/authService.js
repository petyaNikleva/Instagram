export function checkIsLoggedUser() {
    let loggedUser = localStorage.getItem('loggedUser');
    return loggedUser;
}

export function checkIsRegistered(email) {
    let isRegisteredUser = localStorage.getItem(email);
    return isRegisteredUser;
}

export function logIn(email) {
    localStorage.setItem('loggedUser', email);
}

export function registerOld(email, userData) {
    localStorage.setItem(email, JSON.stringify(userData));
}


export function register(email, userData) {
    let users = {};
    let areRegisteredUsers = !!(localStorage.getItem('users'));
    if (areRegisteredUsers) {
        users = JSON.parse(localStorage.users);
    }
    users[email] = userData;
    localStorage.setItem('users', JSON.stringify(users));
}


export function logOut() {
    localStorage.setItem('loggedUser', 'noUser');
}



