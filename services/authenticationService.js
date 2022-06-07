class UserService {
    constructor() {
    }

    getLoggedUser() {
        return JSON.parse(localStorage.loggedUser);
    }

    checkIsRegistered(emailValue) {
        let users = this.getAllUsers();
        if (users[emailValue]?.email === emailValue) {
            return true;
        }
        return false;
    }

    // to stay
    logIn(user) {
        localStorage.setItem('loggedUser', JSON.stringify(user));
    }

   // to stay
    logOut() {
        localStorage.setItem('loggedUser', JSON.stringify({user: 'noUser'}));
    }

    getUser(email) {
        return JSON.parse(localStorage.users)[email];
    }

    // getAllUsers() {
    //     let users = {};
    //     let areRegisteredUsers = !!(localStorage.getItem('users'));
    //     if (areRegisteredUsers) {
    //         users = JSON.parse(localStorage.users);
    //     }
    //     return users;
    // }

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

    uploadImage(email, imgId) {
        const user = this.getUser(email);
        user.image = imgId;
        this.register(email, user);
    }

}

const authService = new UserService();
Object.freeze(authService);

export default authService;



