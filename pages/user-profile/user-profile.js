import authService from "../../services/authenticationService.js";

export function currentUser () {
    const email = authService.getLoggedUser()
    const user = authService.getUser(email);
    return user;
}

export function submitHandler (e) {
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

