import { html } from "./../../node_modules/lit-html/lit-html.js";
import { allUsers, deleteHandler } from "../user-list/user-list.js";




export let userListTemplate = () => html`
<h2>User List</h2>
<section class="user-container">
    ${allUsers().length > 0
         ? allUsers().map(user => userTemplate(user))
         : html`<p>There are no registered users.</p>`
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
        <div class="btn-container">
            <button class="btn edit">Edit</button>
            <button @click=${deleteHandler} class="btn delete">Delete</button>
        </div>
    </article>
`



