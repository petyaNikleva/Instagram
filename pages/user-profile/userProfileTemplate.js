import { html } from "./../../node_modules/lit-html/lit-html.js";
import { currentUser, submitHandler, testClickHandler } from "./user-profile.js";



export let userProfileTemplate = () => html`

<form id="form" enctype="multipart/form-data">
    <article class="user-card">
        <div class="card-img">
            <!-- <img src="blob:http://127.0.0.1:5501/a4423963-2d92-4199-bd95-f3c8abbf4e48"> -->
            <img src="${testClickHandler()}">
            <!-- <img src="../../images/user-icon.png"> -->
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
    <!-- <button @click="${testClickHandler}">Click Test</button> -->
</form>`











