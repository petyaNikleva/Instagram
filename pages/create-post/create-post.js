import authService from "../../services/authenticationService.js";
import { create } from "../../services/postService.js"

export function currentUser() {
    return authService.getLoggedUser();
}

export function createNewPost(e) {
    e.preventDefault();
    const form = e.target.form;
    const imgInput = form.getElementsByClassName('input-img')[0];

    const data = new FormData();
    data.append('image', imgInput.files[0])

    fetch("http://localhost:3000/upload", {
        method: "POST",
        body: data
    })
        .then(response => response.json())
        .then(imageData => {
            const fileName = imageData.filename
            const description = document.getElementById('post-description').value;
            const _authorId = currentUser()._id;
            create(_authorId, description, fileName)
             .then((data) => {
                    console.log(data)
                    setTimeout(() => {
                        alert('Post created.')
                        window.location.href = "/#";
                    }, 500);
                })
        })
        .catch((err) => {
            console.log(err);
        })
};


