class userService {
    constructor() {
    }

    getLoggedUser() {
        let loggedUser = localStorage.getItem('loggedUser');
        return loggedUser;
    }

    checkIsRegistered(emailValue) {
        let users = this.getAllUsers();
        if (users[emailValue]?.email === emailValue) {
            return true;
        }
        return false;
    }

    logIn(email) {
        localStorage.setItem('loggedUser', email);
    }

    register(email, userData) {
        let users = this.getAllUsers();
        users[email] = userData;
        localStorage.setItem('users', JSON.stringify(users));
    }

    logOut() {
        localStorage.setItem('loggedUser', 'noUser');
    }

    getUser(email) {
        return JSON.parse(localStorage.users)[email];
    }

    getAllUsers() {
        let users = {};
        let areRegisteredUsers = !!(localStorage.getItem('users'));
        if (areRegisteredUsers) {
            users = JSON.parse(localStorage.users);
        }
        return users;
    }

    setUserforEdit(email) {
        localStorage.setItem('userForEdit', email);
    }

    getUserforEdit() {
        const email = localStorage.getItem('userForEdit');
        return this.getUser(email);
    }

    deleteUser(email) {
        let users = this.getAllUsers();
        delete users[email];
        localStorage.setItem('users', JSON.stringify(users));
    }

}

const authService = new userService();
Object.freeze(authService);

export default authService;
