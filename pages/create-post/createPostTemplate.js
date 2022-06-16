import { html } from "./../../node_modules/lit-html/lit-html.js";
import { currentUser, submitHandler, getImageHandler } from "../user-profile/user-profile.js";


export let createPostTemplate = () => html`

<header>
    <div class="logo-container">
        <a href="#">
            <img src="../../images/instagram_letters.png" alt="Instagram-logo">
        </a>
    </div>
</header>

<form id="create-post-form" enctype="multipart/form-data">


    <h1>New Post</h1>
    <hr>
    <div class="input-control">
        <!-- <p class="upload-text">Add picture</p> -->
        <input type="file" name="image" class="input-img">
        <textarea id="post-description" name="post-description" rows="6" cols="50"
            placeholder="Add description"></textarea>
        <hr>
        <div id="author" class="card-name">Author: ${currentUser().firstName} ${currentUser().lastName}</div>
        <hr>
        <input class="submit-btn register-btn create-btn" type="button" @click="${submitHandler}" value="Create Post">
    </div>
    <hr>
</form>

`