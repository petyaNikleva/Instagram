import { areValidCredentials } from "../../helpers/validations.js";
import { logIn } from "../../services/authService.js";


export function loginHandler(e) {
    e.preventDefault();

    const button = e.target;
    const form = button.parentElement.parentElement;
    const emailElement = form.querySelector('#email');
    const email = emailElement.value;
    const passwordElement = form.querySelector('#password');
    const password = passwordElement.value;

    if (areValidCredentials(email, password, passwordElement) ){
        logIn(email);
    }
}







