import authService from '../../services/authenticationService.js';
import { checkInputValid } from '../../helpers/validations.js';

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
        }
        authService.register(user.email, user);

        setTimeout(() => {
            alert('Successfully updated.')
            window.location.href = "/#user-list";
        }, 500);

    }
}

