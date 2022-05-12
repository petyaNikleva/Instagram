import authService from '../../services/authenticationService.js';
import { checkInputValid } from '../../helpers/validations.js';
import { User } from '../../models/User.js';

export function userForEdit () {
    let user = authService.getUserforEdit()
    return user;
}

export function updateHandler (e) {
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

        const email =  formData.get('email');
        const firstName = formData.get('firstName');
        const lastName = formData.get('lastName');
        const dateOfBirth = formData.get('dateOfBirth');
        const password = formData.get('password');
        
        const currentUser = new User (email, firstName, lastName, dateOfBirth, password);

        authService.register(email, currentUser);

        setTimeout(() => {
            alert('Successfully updated.')
            window.location.href = "/#user-list";
        }, 500);

    }
}

