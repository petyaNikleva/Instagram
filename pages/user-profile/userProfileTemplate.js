import { html } from "./../../node_modules/lit-html/lit-html.js";
import { currentUser } from "./user-profile.js";


function submitHandler (e) {
    e.preventDefault();
    const form = e.target.form;
    const imgInput = form.getElementsByClassName('input-img')[0];

     // Handle File data from the state before sending
     const data = new FormData();

     data.append('image', imgInput.files[0])

     fetch("http://localhost:3000/upload", {
         method: "POST",
         body: data
     })
        .then(response => response.json())
        .then(result => console.log(result))
            // setTimeout(() => {
            //     alert('Picture uploaded.')
            //     window.location.href = "/#reloadPage";
            //     window.location.href = "/#";
            // }, 500);

        .catch((err) => {
            console.log(err.message);
        });      
};

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
</form>`











