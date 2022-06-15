import { login } from "../../services/userService.js"
import authService from "../../services/authenticationService.js";
import { incorrectEmailAndPass } from "../../helpers/validations.js"



export function loginHandler(e) {
    e.preventDefault();

    const button = e.target;
    const form = button.parentElement.parentElement;
    const emailElement = form.querySelector('#email');
    const email = emailElement.value;
    const passwordElement = form.querySelector('#password');
    const password = passwordElement.value;

    login(email, password)
        .then((user) => {
            if (user && user.password === password) {
                authService.setLoggedUser(user);
                setTimeout(() => {
                    alert(`Welcome, ${user.firstName} ${user.lastName}!`)
                    window.location.href = "/#";
                }, 500);
            } else {
                throw new Error('Invalid email ot pass!!!')
            }
        })
        .catch((error) => {
            incorrectEmailAndPass(emailElement, passwordElement);
            console.log(error);
        })

}







