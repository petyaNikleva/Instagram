//import { logOut, checkIsLoggedUser } from "../../services/authService.js";
import authService  from "../../services/authenticationService.js";

export function logOutHandler (e) {
    e.preventDefault();
    authService.logOut();
    window.location.href = "/#reloadPage";
    window.location.href = "/#"; 
}

export function isLogged () {
    const loggedUser = authService.checkIsLoggedUser();
    if (loggedUser !== "noUser" && loggedUser != null) {
        return true;
    }
    return false;
}





