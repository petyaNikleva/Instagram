import authService from "../../services/authenticationService.js";
import { areValidCredentials } from "../../helpers/validations.js";


export function loginHandler(e) {
    e.preventDefault();

    const button = e.target;
    const form = button.parentElement.parentElement;
    const emailElement = form.querySelector('#email');
    const email = emailElement.value;
    const passwordElement = form.querySelector('#password');
    const password = passwordElement.value;

    if (areValidCredentials(email, password, passwordElement)){
        const user = authService.getUser(email);
        setTimeout(() => {
            alert(`Welcome, ${user.firstName} ${user.lastName}!`)
            window.location.href = "/#";
        }, 500);
        authService.logIn(email);
    }
}







