import authService from "../../services/authenticationService.js";

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
        .then(result => {
            const email = currentUser().email;
            authService.uploadImage(email, result.filename);
            setTimeout(() => {
                alert('Picture uploaded.')
                getImageHandler();
            }, 500)
        })
        .catch((err) => {
            console.log(err.message);
        });
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
                })
            })
            .catch((err) => {
                console.log(err)
            }); 
    }
}



