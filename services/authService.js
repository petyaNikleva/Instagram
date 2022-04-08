export function checkIsLoggedUser() {
    let loggedUser = localStorage.getItem('loggedUser');
    return loggedUser;
}

export function logOut () {
    localStorage.setItem('loggedUser', 'noUser');
}