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

    let currentUser = localStorage.getItem(emailValue);
    let currentUserData = JSON.parse(currentUser); 
    console.log(currentUserData.password)

    if (passwordValue !== currentUserData.password) {
        setError(password, 'Incorrect username or password');
    } else {
        setSuccess(email);
        setSuccess(password);
    }
   
    if (!errorOccured) {  
        const firstName = currentUserData.firstName;
        const lastName = currentUserData.lastName;
    
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

