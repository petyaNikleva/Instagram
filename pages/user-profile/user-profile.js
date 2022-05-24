import authService from "../../services/authenticationService.js";

export function currentUser() {
    const email = authService.getLoggedUser()
    const user = authService.getUser(email);
    return user;
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
                window.location.href = "/#reloadPage";
                window.location.href = "/#";
            }, 500)
        })
        .catch((err) => {
            console.log(err.message);
        });
};

export const getImage = async () => {
    const user = currentUser();
    const imageId = user.image;
    return await fetch(`http://localhost:3000/upload/${imageId}`).then(res => res.blob());
}


export function testClickHandler(e) {
    //const form = e.currentTarget.form;
    //let imgElement = form.getElementsByTagName('img')[0];
    const user = currentUser();
    const imageId = user.image;
    let imgPath;
    if (imageId === "noPicture") {
        imgPath = "../../images/user-icon.png";
        return imgPath;
    } else {
        let data;
        let imageUrl = fetch(`http://localhost:3000/upload/${imageId}`)
            .then(response => {
                response.blob()
            .then(blobResponse => {
                    data = blobResponse;
                    const urlCreator = window.URL || window.webkitURL;
                    let a = urlCreator.createObjectURL(data);
                
                    return a;
                })
            })
            .catch((err) => {
                console.log(err)
            });
        return imageUrl
    }
}

