class UserService {
    constructor() {
    }

    getLoggedUser() {
        return JSON.parse(localStorage.loggedUser);
    }

    setLoggedUser(user) {
        localStorage.setItem('loggedUser', JSON.stringify(user));
    }

    logOut() {
        localStorage.setItem('loggedUser', JSON.stringify({ user: 'noUser' }));
    }

    setUserforEdit(user) {
        localStorage.setItem('userForEdit', JSON.stringify(user));
    }

    getUserforEdit() {
        return JSON.parse(localStorage.userForEdit);
    }

    // ???
    checkIsRegistered(emailValue) {
        let users = this.getAllUsers();
        if (users[emailValue]?.email === emailValue) {
            return true;
        }
        return false;
    }

}

const authService = new UserService();
Object.freeze(authService);

export default authService;



