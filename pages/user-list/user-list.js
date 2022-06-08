import authService from "../../services/authenticationService.js";
import { deleteById } from "../../services/userService.js";
import { getAll } from "../../services/userService.js"

//  export function allUsers () {
//     return getAll()
//     .then (result => {
//         console.log(result);
//         let userContainerElement = document.getElementsByClassName("user-container")[0];

//         return result;
//     })
// }

export function deleteHandler(userId) {
    const confirmDelete = confirm("Are you sure you want to delete this user?");
    if (confirmDelete) {
        deleteById(userId)
        .then (result => {
             console.log(result);})
        //authService.deleteUser(email);
        window.location.href = "/#reloadPage";
        window.location.href = "/#user-list";
    }
}

export function editHandler (email) {
    authService.setUserforEdit(email);
    window.location.href = "/#edit";
}







