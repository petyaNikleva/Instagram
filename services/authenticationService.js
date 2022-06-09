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

    // ok
    logIn(user) {
        localStorage.setItem('loggedUser', JSON.stringify(user));
    }

   // ok
    logOut() {
        localStorage.setItem('loggedUser', JSON.stringify({user: 'noUser'}));
    }

    //ok
    setUserforEdit(user) {
        localStorage.setItem('userForEdit', JSON.stringify(user));
    }

    //ok
    getUserforEdit() {
        return JSON.parse(localStorage.userForEdit);
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



