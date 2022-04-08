const form = document.getElementById('form');
const email = document.getElementById('email');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const password = document.getElementById('password');
const repeatPassword = document.getElementById('repeat-password');

let errorOccured;

form.addEventListener('submit', e => {
    e.preventDefault();

    validateLoginCredentials();
});

function validateLoginCredentials() {

    errorOccured = false;
    let currentUserData;

    const emailValue = email.value;
    const passwordValue = password.value;

    let isRegistered = localStorage.getItem(emailValue);
    if (isRegistered) {
        currentUserData = JSON.parse(isRegistered);
        if (passwordValue !== currentUserData.password) {
            setError(password, 'Incorrect email or password');  
        } else {
            setSuccess(email);
            setSuccess(password);
        }
    } else {
        setError(email, 'Incorrect email or password');
    }

    if (!errorOccured) {
        const firstName = currentUserData.firstName;
        const lastName = currentUserData.lastName;

        //
        const userData = {
            email: emailValue
        }
        localStorage.setItem('loggedUser', JSON.stringify(userData))

        setTimeout( () => {
            alert(`Welcome, ${firstName} ${lastName}!`)
            location.href='/index.html';
        }, 500);
        
    } 
}

function setError(element, message) {
    errorOccured = true;
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

function setSuccess(element) {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

