import { getUserforEdit, register } from '../../services/authService.js';
import { VALIDATOR } from '../../helpers/isValid.js';


(() => {

    const form = document.getElementById('form');
    const email = document.getElementById('email');
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const dateOfBirth = document.getElementById('dateOfBirth');

    const userForEdit = getUserforEdit();

    email.value = userForEdit.email;
    firstName.value = userForEdit.firstName;
    lastName.value = userForEdit.lastName;
    dateOfBirth.value = userForEdit.dateOfBirth;

})();

///

form.addEventListener('submit', e => {
    e.preventDefault();
    checkInputValid(email);
    checkInputValid(firstName);
    checkInputValid(lastName);
    checkInputValid(dateOfBirth);


    let hasError = false;

    let inputElements = [email, firstName, lastName, dateOfBirth];
    inputElements.forEach(element => {
        let isError = element.closest('.input-control').classList.contains('error');
        if (isError) {
            hasError = true;
        }
    });

    if (!hasError) {

        let userData = {
            firstName: firstName.value,
            lastName: lastName.value,
            dateOfBirth: dateOfBirth.value,
            email: email.value
        }

        const confirmEdit = confirm("Are you sure you want to update the data?");
        if (confirmEdit) {
            register(email.value, userData);

            setTimeout(() => {
                alert('Your data has been saved.')
                location.href = "/pages/user-list/user-list.html";
            }, 500);
        }


    }
});

email.addEventListener('blur', () => checkInputValid(email));
firstName.addEventListener('blur', () => checkInputValid(firstName));
lastName.addEventListener('blur', () => checkInputValid(lastName));
dateOfBirth.addEventListener('blur', () => checkInputValid(dateOfBirth));

function checkInputValid(element) {
    const container = element.closest('.input-control');
    if (element.dataset.validators) {
        const validators = createInputValidators(element);
        const value = element.value;
        let isError = false;
        validators.forEach((validator) => {
            container.classList.remove(`error--${validator.name}`);
            console.log(VALIDATOR[validator.name])
            if (VALIDATOR[validator.name](value, validator.param)) {
                container.classList.add(`error--${validator.name}`);
                isError = true;
            }
        })
        if (isError) {
            container.classList.remove('success');
            container.classList.add('error');
        } else {
            container.classList.add('success');
            container.classList.remove('error');
        }
    }

}

function createInputValidators(element) {
    const validators = [];
    element.dataset.validators.split(',').map((validator) => {
        let validatorStr = validator.trim();
        const name = validatorStr.split('(')[0];
        const param = validatorStr.split(/[()]/)[1];

        validators.push({
            name,
            param
        })
    })
    return validators
}
