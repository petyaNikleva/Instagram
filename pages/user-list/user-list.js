import authService from "../../services/authenticationService.js";
import { getAll } from "../../services/userService.js"

//  export function allUsers () {
//     return getAll()
//     .then (result => {
//         console.log(result);
//         let userContainerElement = document.getElementsByClassName("user-container")[0];

//         return result;
//     })
// }

export function deleteHandler(e) {
    const grandparent = e.target.parentElement.parentElement;
    const children = grandparent.children;
    const email = children[2].textContent;
    const confirmDelete = confirm("Are you sure you want to delete this user?");
    if (confirmDelete) {
        authService.deleteUser(email);
        window.location.href = "/#reloadPage";
        window.location.href = "/#user-list";
    }
}

export function editHandler (email) {
    authService.setUserforEdit(email);
    window.location.href = "/#edit";
}







