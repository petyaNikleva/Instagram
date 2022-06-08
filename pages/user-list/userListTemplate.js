import { html, render } from "./../../node_modules/lit-html/lit-html.js";
import {  deleteHandler, editHandler } from "../user-list/user-list.js";
import { getAll } from "../../services/userService.js"


function allUsers () {
    getAll()
    .then (users => {
        //console.log(users);
        let userContainerElement = document.getElementsByClassName("user-container")[0];
        let divContainerElement = divContainerTemplate(users);
        let noRegUserelement = document.getElementsByClassName('no-reg-user')[0];
        noRegUserelement.style.display = "none";
        render(divContainerElement, userContainerElement);
    })
}

let divContainerTemplate = (users) => html`
    ${users.map(user => userTemplate(user))}
`

export let userListTemplate = () => html`
<h2>User List</h2>
<section class="user-container">
    ${allUsers()?.length > 0
         ? users.map(user => userTemplate(user)) // it worked proprertly when allUsers() wasn't async func
         : html`<p class="no-reg-user">There are no registered users.</p>`
        }
</section>
`


export let userTemplate = (user) => html`
    <article class="user-card">
        <div class="card-img">
            <img src="../../images/user-icon.png">
        </div>
        <p class="card-name">${user.firstName} ${user.lastName}</p>
        <p>${user.email}</p>
        <p>Date of birth: ${user.dateOfBirth}</p>
        <div class="container-btn">
            <button @click="${(e) => editHandler(user.email)}" class="btn edit-btn">Edit</button>
            <button @click=${deleteHandler} class="btn delete-btn">Delete</button>
        </div>
    </article>
`



