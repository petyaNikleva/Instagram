import { render } from "../../node_modules/lit-html/lit-html.js";
import { navTemplate } from "./navTemplate.js";
import { logOut } from "../../services/authService.js";

export function navGetView () {
    
    let container = document.getElementsByTagName('nav')[0];
    render(navTemplate(), container);
}

export function logOutHandler (e) {
    logOut();
}

//

// import { checkIsLoggedUser, logOut } from '../../services/authService.js';

// export function showNavigation () {
//     const loggedUser = checkIsLoggedUser();

//     const registerLinkElement = document.getElementsByClassName('register')[0];
//     const loginLinkElement = document.getElementsByClassName('login')[0];
//     const logOutLinkElement = document.getElementsByClassName('logout')[0];
//     const userListElement = document.getElementsByClassName('user-list')[0];
    
//     if (loggedUser !== "noUser" && loggedUser != null) {
//         registerLinkElement.style.display = 'none';
//         loginLinkElement.style.display = 'none';
//         userListElement.style.display = 'block';
//     }
//     else {
//         registerLinkElement.style.display = 'block';
//         loginLinkElement.style.display = 'block';
//         userListElement.style.display = 'none';
//         logOutLinkElement.style.display = 'none';  
//     }

//     logOutLinkElement.addEventListener("click", function (e) {
//         logOut();
//         showNavigation();
//         window.location.href = "/#";  
//     })
// }
// showNavigation();
