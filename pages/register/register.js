import { checkInputValid, checkPasswordsMatch } from "../../helpers/validations.js";
import { register } from "../../services/authService.js";


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
        let isError = element.closest('.input-control').classList.contains('error');
        if (isError) {
            hasError = true;
        }
    });

    if (!hasError) {
        const formData = new FormData(form);

        const user = {
            email: formData.get('email'),
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            dateOfBirth: formData.get('dateOfBirth'),
            password: formData.get('password'),
            repeatPassword: formData.get('repeat-password')
        }

        register(user.email, user);

        setTimeout(() => {
            alert('Successful registration.')
            // To Do
            location.pathname = "/login";
        }, 500);

    }
}