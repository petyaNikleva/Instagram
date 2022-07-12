import authService from "../../services/authenticationService.js";
import { updateUserImage} from "../../services/userService.js";

export function currentUser() {
    return authService.getLoggedUser();
}

export function submitHandler(e) {
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
            let userData = currentUser();
            const userId = currentUser()._id;
            updateUserImage(userId, imageData.filename, userData)
                .then((updatedUserData) => {
                    authService.setLoggedUser(updatedUserData);
                    getImageHandler();
                })
        })
        .catch((err) => {
            console.log(err);
        })
};

export function getImageHandler() {
    const user = currentUser();
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
                        const imgElement = document.getElementById("user-profile-image");
                        const inputFileElement = document.getElementsByClassName('input-img')[0];
                        inputFileElement.value = '';
                        imgElement.setAttribute('src', imgBlob);

                        const nameElement = document.getElementsByClassName("card-name")[0];
                        nameElement.textContent = `${user.firstName} ${user.lastName}`;
                        const emailElement = document.getElementsByClassName("email")[0];
                        emailElement.textContent = user.email;
                        const dateOfBirthElement = document.getElementsByClassName("date-of-birth")[0];
                        dateOfBirthElement.textConent = `Date of birth: ${user.dateOfBirth}`;
                        const imageNameElement = document.getElementsByClassName("img-name")[0];
                        imageNameElement.textConent = `${user.image}`;
                        imageNameElement.style.display = 'none';
                    })
            })
            .catch((err) => {
                console.log(err)
            });
    }
}



