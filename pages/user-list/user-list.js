import authService from "../../services/authenticationService.js";
import { deleteById } from "../../services/userService.js";

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

export function editHandler (user) {
    authService.setUserforEdit(user);
    window.location.href = "/#edit";
}







