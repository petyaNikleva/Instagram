import { logOut, checkIsLoggedUser } from "../../services/authService.js";

export function logOutHandler (e) {
    e.preventDefault();
    logOut();
    window.location.href = "/#reloadPage";
    window.location.href = "/#"; 
}

export function isLogged () {
    const loggedUser = checkIsLoggedUser();
    if (loggedUser !== "noUser" && loggedUser != null) {
        return true;
    }
    return false;
}





