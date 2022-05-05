import { html } from "./../../node_modules/lit-html/lit-html.js";

import { getAllUsers, deleteUser } from "../../services/authService.js";
import { setUserforEdit } from "../../services/authService.js";

// export function showUsers () {
//     const users = Object.values(getAllUsers());
//     users.forEach(user => {
//         createUserCard(user)
//     });
// }

 export function allUsers () {
    let users = Object.values(getAllUsers());
    return users;
    // users.forEach(user => {
    //     createUserCard(user)
    // });
}



// function createUserCard (user) {
//     let article = html`
//     <article class="user-card">
//     <div class="card-img">
//         <img src="../../images/user-icon.png">
//     </div>
//         <p class="card-name">${user.firstName} ${user.lastName}</p>
//         <p class="card-email">${user.email}</p>
//         <p class="card-date-of-birth">Date of birth: ${user.dateOfBirth}</p>
//         <div class="btn-container">
//             <button class="btn edit">Edit</button>
//             <button class="btn delete">Delete</button>
//          </div>
//     </article> 
//     `

//     const userContainer = document.getElementsByClassName('user-container')[0];

    //userContainer.appendChild(article);

    // editBtn.addEventListener('click', () => {
    //     setUserforEdit(userdata.email);
    //     location.href = "/pages/edit/edit.html";
    // });

    // deleteBtn.addEventListener('click', deleteHandler)
//}

function deleteHandler(e) {
    const grandparent = e.target.parentElement.parentElement;
    const children = grandparent.children;
    const email = children[2].textContent;
    const confirmDelete = confirm("Are you sure you want to delete this user?");
    if (confirmDelete) {
        deleteUser(email);
        location.href = "/pages/user-list/user-list.html";
    }
}








