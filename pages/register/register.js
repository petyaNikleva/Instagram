//import authService from "../../services/authenticationService.js";
import { register } from "../../services/userService.js";
import { checkInputValid, checkPasswordsMatch } from "../../helpers/validations.js";

import { User } from "../../model/User.js";

export function repeatPasswordHandler(e) {
    const repeatPasswordElement = e.target;
    const form = repeatPasswordElement.parentElement.parentElement;
    const passwordElement = form.querySelector('#password');

    checkInputValid(repeatPasswordElement);
    checkPasswordsMatch(passwordElement, repeatPasswordElement);
}

export function registerHandler(e) {
    e.preventDefault();
    const form = (e.target).parentElement;
    const inputs = form.querySelectorAll('.input-control input');

    let hasError = false;
    const arrInputElements = [...inputs];
    arrInputElements.forEach(element => { 
        checkInputValid(element);
        const isError = element.closest('.input-control').classList.contains('error');
        if (isError) {
            hasError = true;
        }
    });

    if (!hasError) {

        const formData = new FormData(form);

        // const user = {
        //     email: formData.get('email'),
        //     firstName: formData.get('firstName'),
        //     lastName: formData.get('lastName'),
        //     dateOfBirth: formData.get('dateOfBirth'),
        //     password: formData.get('password'),
        // }
        
        const email =  formData.get('email');
        const firstName = formData.get('firstName');
        const lastName = formData.get('lastName');
        const dateOfBirth = formData.get('dateOfBirth');
        const password = formData.get('password');
        const image = 'noPicture';
        
        //const currentUser = new User (email, firstName, lastName, dateOfBirth, password, image);
        register(email, firstName, lastName, dateOfBirth, password, image)
        .then((data) => {
            setTimeout(() => {
                alert('Successful registration.')
                window.location.href = "/#login";
            }, 500);
          })
          .catch(err => {
            console.log(err);
          })  

        //authService.register(email, currentUser);

    }
}