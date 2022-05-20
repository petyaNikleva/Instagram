import { html } from "./../../node_modules/lit-html/lit-html.js";

import { currentUser } from "./user-profile.js";

function fileChangeHandler (e) {
    let input = e.target;

    let fileData = e.target.files[0];
    //let fileData = e.target.files[0].name;
    console.log(fileData);
    return fileData;
}

function submitHandler (e) {
    e.preventDefault();
    // console.log(e);
    // console.log(e.target);
    let form = e.target;
    let imgInput = form.getElementsByClassName('input-img')[0];
    console.log(imgInput.files[0]);
    

     // Handle File data from the state before sending
     const data = new FormData();

    
     data.append('image', imgInput.files[0])

     fetch("http://localhost:3000/upload", {
         method: "POST",
         body: data
     })
        .then((result) => {
            console.log("File sent successful.");
        })
        .catch((err) => {
            console.log(err.message);
        });
    return false;    
};

export let userProfileTemplate = () => html`

<form id="form" @submit="${submitHandler}" enctype="multipart/form-data">
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
    <!-- <input type="file" name="image" @change="${(e) => fileChangeHandler(e)}"> -->
    <input class="submit-btn" type="submit" value="Submit" >
</form>`











