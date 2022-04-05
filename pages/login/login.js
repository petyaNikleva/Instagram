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

    const emailValue = email.value;
    const passwordValue = password.value;

    if (emailValue !== localStorage.getItem('email')) {
        setError(email, 'Incorrect username or password');
    } else if (passwordValue !== localStorage.getItem('password')) {
        setError(passwordValue, 'Incorrect username or password');
    } else {
        setSuccess(email);
    }
   
    if (passwordValue !== localStorage.getItem('password')) {
        setError(password, 'Incorrect username or password');
    }
    else {
        setSuccess(password);
    }

    if (!errorOccured) {  
        let firstName = localStorage.getItem('firstName');
        let lastName = localStorage.getItem('lastName');
    
        alert(`Welcome, ${firstName} ${lastName}!`)
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

