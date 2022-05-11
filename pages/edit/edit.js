import { getUserforEdit, register } from '../../services/authService.js';
import { checkInputValid } from '../../helpers/validations.js';

export function userForEdit () {
    let user = getUserforEdit()
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
        console.log(user);
        register(user.email, user);

        setTimeout(() => {
            alert('Successfully updated.')
            window.location.href = "/#user-list";
        }, 500);

    }
}


// (() => {

//     const form = document.getElementById('form');
//     const email = document.getElementById('email');
//     const firstName = document.getElementById('firstName');
//     const lastName = document.getElementById('lastName');
//     const dateOfBirth = document.getElementById('dateOfBirth');
//     const password = document.getElementById('password');


//     const userForEdit = getUserforEdit();

//     email.value = userForEdit.email;
//     firstName.value = userForEdit.firstName;
//     lastName.value = userForEdit.lastName;
//     dateOfBirth.value = userForEdit.dateOfBirth;
//     password.value = userForEdit.password;

// })();

// ///

// form.addEventListener('submit', e => {
//     e.preventDefault();
//     checkInputValid(email);
//     checkInputValid(firstName);
//     checkInputValid(lastName);
//     checkInputValid(dateOfBirth);


//     let hasError = false;

//     let inputElements = [email, firstName, lastName, dateOfBirth, password];
//     inputElements.forEach(element => {
//         let isError = element.closest('.input-control').classList.contains('error');
//         if (isError) {
//             hasError = true;
//         }
//     });

//     if (!hasError) {

//         let userData = {
//             firstName: firstName.value,
//             lastName: lastName.value,
//             dateOfBirth: dateOfBirth.value,
//             email: email.value,
//             password: password.value
//         }

//         const confirmEdit = confirm("Are you sure you want to update the data?");
//         if (confirmEdit) {
//             register(email.value, userData);

//             setTimeout(() => {
//                 alert('Your data has been saved.')
//                 location.href = "/pages/user-list/user-list.html";
//             }, 500);
//         }


//     }
// });

// email.addEventListener('blur', () => checkInputValid(email));
// firstName.addEventListener('blur', () => checkInputValid(firstName));
// lastName.addEventListener('blur', () => checkInputValid(lastName));
// dateOfBirth.addEventListener('blur', () => checkInputValid(dateOfBirth));
