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
         ? users.map(user => userTemplate(user)) // it worked propertly when allUsers() wasn't async func
         : html`<p class="no-reg-user">There are no registered users.</p>`
        }
</section>
`

function imageHandler(user) {
    const imageId = user.image;
    let imgPath;
    if (imageId === "noPicture") {
        imgPath = "../../images/user-icon.png";
        return imgPath;
    } else {
        let data;
        fetch(`http://localhost:3000/upload/${imageId}`)
            .then(response => {
                response.blob()
                    .then(blobResponse => {
                        data = blobResponse;
                        const urlCreator = window.URL || window.webkitURL;
                        const imgBlob = urlCreator.createObjectURL(data);
                        const imgElement = document.getElementsByClassName(user._id)[0];
                        imgElement.setAttribute('src', imgBlob);
                        const nameElement = document.getElementsByClassName("card-name")[0];
                        nameElement.textContent = `${user.firstName} ${user.lastName}`;
                    })
            })
            .catch((err) => {
                console.log(err)
            });
    }
}


export let userTemplate = (user) => html`
    <article class="user-card users">
        <div class="card-img">
            <img class="${user._id}" src="${imageHandler(user)}">
        </div>
        <p class="card-name">${user.firstName} ${user.lastName}</p>
        <p>${user.email}</p>
        <p>Date of birth: ${user.dateOfBirth}</p>
        <div class="container-btn">
            <button @click="${(e) => editHandler(user)}" class="btn edit-btn">Edit</button>
            <button @click="${(e) => deleteHandler(user._id)}" class="btn delete-btn">Delete</button>
        </div>
    </article>
`



