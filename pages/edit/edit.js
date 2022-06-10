import authService from '../../services/authenticationService.js';
import { checkInputValid } from '../../helpers/validations.js';
import { editHandler } from '../user-list/user-list.js';
import { update } from '../../services/userService.js';

export function userForEdit() {
    let user = authService.getUserforEdit()
    return user;
}

export function updateHandler(e, userId) {
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

        const email = formData.get('email');
        const firstName = formData.get('firstName');
        const lastName = formData.get('lastName');
        const dateOfBirth = formData.get('dateOfBirth');
        const password = formData.get('password');
        const image = formData.get('img-name') || 'noPicture';

        const currentUser = {
            email,
            firstName,
            lastName,
            dateOfBirth,
            password,
            image
        };

        // edit(userId)
        update(userId, currentUser)
            //authService.register(email, currentUser);
            .then((data) => {
                setTimeout(() => {
                    alert('User data has been updated successfully.')
                    window.location.href = "/#user-list";
                }, 500);
            })
            .catch(err => {
                console.log(err);
            })
    }
}


