//import authService  from "../../services/authenticationService.js";
import { getLoggedUser } from "../../services/userService.js"

export function logOutHandler (e) {
    e.preventDefault();
    authService.logOut();
    window.location.href = "/#reloadPage";
    window.location.href = "/#";
}

export function isLogged () {
    getLoggedUser()
    .then(user => {
            if (user.isLogged === "Yes") {
            return true;
        }
        return false;
    }).catch(err => {
        console.log(err);
    }) 
}





