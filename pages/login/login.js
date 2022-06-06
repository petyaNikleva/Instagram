import { login } from "../../services/userService.js"
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

    if (areValidCredentials(email, password, passwordElement)) {

        login(email,password)
        .then((user) => {
            console.log(user)
            if (user && user.password === password) {
                authService.logIn(user._id);
                setTimeout(() => {
                    alert(`Welcome, ${user.firstName} ${user.lastName}!`)
                    window.location.href = "/#";
                }, 500);
            }
        })
        .catch((error) => {
            console.log(error)
        })
        
       
        

        //authService.logIn(email);
    }
}







