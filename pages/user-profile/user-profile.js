import authService from "../../services/authenticationService.js";

export function currentUser () {
    let email = authService.getLoggedUser()
    let user = authService.getUser(email);
    return user;
}

