export function checkIsLoggedUser() {
    let loggedUser = localStorage.getItem('loggedUser');
    return loggedUser;
}

export function checkIsRegistered(email) {
    let isRegisteredUser = localStorage.getItem(email);
    return isRegisteredUser;
}

export function getUserData(data) {
    const currentUserData = JSON.parse(data);
    return currentUserData;
}

export function setLoggedUser(email) {
    localStorage.setItem('loggedUser', email);
}

export function logOut() {
    localStorage.setItem('loggedUser', 'noUser');
}