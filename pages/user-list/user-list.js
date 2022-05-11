import { getAllUsers, deleteUser } from "../../services/authService.js";
import { setUserforEdit } from "../../services/authService.js";

 export function allUsers () {
    let users = Object.values(getAllUsers());
    return users;
   
}

export function deleteHandler(e) {
    const grandparent = e.target.parentElement.parentElement;
    const children = grandparent.children;
    const email = children[2].textContent;
    const confirmDelete = confirm("Are you sure you want to delete this user?");
    if (confirmDelete) {
        deleteUser(email);
        window.location.href = "/#reloadPage";
        window.location.href = "/#user-list";
    }
}

export function editHandler (email) {
    setUserforEdit(email);
    window.location.href = "/#edit";
}







