import { register } from "../../services/userService.js";
import { checkInputValid, checkPasswordsMatch } from "../../helpers/validations.js";

export function repeatPasswordHandler(e) {
    const repeatPasswordElement = e.target;
    checkInputValid(repeatPasswordElement);
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
    const passwordElement = form.querySelector('#password');
    const repeatPasswordElement = form.querySelector('#repeat-password');
    if (!checkPasswordsMatch(passwordElement, repeatPasswordElement)) {
        hasError = true;
    } 
    if (!hasError) {
        const formData = new FormData(form);
        const email =  formData.get('email');
        const firstName = formData.get('firstName');
        const lastName = formData.get('lastName');
        const dateOfBirth = formData.get('dateOfBirth');
        const password = formData.get('password');
        const image = 'noPicture';
        
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
    }
}