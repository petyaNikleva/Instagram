import { html } from "./../../node_modules/lit-html/lit-html.js";

import { currentUser } from "./user-profile.js";
//import { userForEdit} from "../edit/edit.js";

console.log(currentUser());

export let userProfileTemplate = () => html`

<form id="form" method="POST" action="http://localhost:3000/upload" enctype="multipart/form-data">
    <article class="user-card">
        <div class="card-img">
            <img src="../../images/user-icon.png">
        </div>
        <p class="card-name">${currentUser().firstName} ${currentUser().lastName}</p>
        <p>${currentUser().email}</p>
        <p>Date of birth: ${currentUser().dateOfBirth}</p>
        <div class="container-btn">
        </div>
    </article>
    <p class="upload-text">Upload profile picture</p>
    <input type="file" name="image">
    <input class="submit-btn" type="submit" value="Submit" >
</form>`











