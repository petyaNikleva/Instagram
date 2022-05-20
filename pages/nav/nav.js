import authService  from "../../services/authenticationService.js";

export function logOutHandler (e) {
    e.preventDefault();
    authService.logOut();
    window.location.href = "/#reloadPage";
    window.location.href = "/#";
    alert('Success') 
}

export function isLogged () {
    const loggedUser = authService.getLoggedUser();
    if (loggedUser !== "noUser" && loggedUser != null) {
        return true;
    }
    return false;
}





