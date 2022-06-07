import { html } from "./../../node_modules/lit-html/lit-html.js";
import { currentUser, submitHandler, getImageHandler } from "./user-profile.js";
import authService from "../../services/authenticationService.js";

const user = authService.getLoggedUser()

export let userProfileTemplate = () => html`
<form id="form" enctype="multipart/form-data">
    <article class="user-card">
        <div class="card-img">
            <img id="user-profile-image" src="${getImageHandler()}">
        </div>
        <p class="card-name">${user.firstName} ${user.lastName}</p>
        <p>${user.email}</p>
        <p>Date of birth: ${user.dateOfBirth}</p>
        <div class="container-btn">
        </div>
    </article>
    <p class="upload-text">Upload profile picture</p>
    <input type="file" name="image" class="input-img">
    <input class="submit-btn" type="button" @click="${submitHandler}" value="Submit">
</form>`











