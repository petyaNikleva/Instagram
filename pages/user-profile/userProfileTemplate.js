import { html } from "./../../node_modules/lit-html/lit-html.js";
import { currentUser, submitHandler } from "./user-profile.js";

function testClickHandler() {
    let user = currentUser();
    console.log(user.image);
    if (user.image === "noPicture") {
        imgPath = "../../images/user-icon.png";
    }
}

export let userProfileTemplate = () => html`

<form id="form" enctype="multipart/form-data">
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
    <input type="file" name="image" class="input-img">
    <input class="submit-btn" type="button" @click="${submitHandler}" value="Submit" >
    <button @click="${testClickHandler}">Click Test</button>
</form>`











