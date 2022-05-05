import { logOut, checkIsLoggedUser } from "../../services/authService.js";
import { changePage } from "../../router/router.js";

export function logOutHandler (e) {
    e.preventDefault();
    logOut();
    changePage("");
    
    // if (window.location.hash == ""){
    //     hashChangeHandler(window.location.hash);
    // } else {
    //     window.location.href = "/#";
    // } 
}

export function isLogged () {
    const loggedUser = checkIsLoggedUser();
    if (loggedUser !== "noUser" && loggedUser != null) {
        return true;
    }
    return false;
}



