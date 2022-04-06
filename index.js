function checkIsLogged () {
    let isLogged = localStorage.getItem('isLogged');
    console.log(isLogged);
    if (isLogged) {
        let registerLink = document.getElementsByClassName('register')[0];
        let loginLink = document.getElementsByClassName('login')[0];
        registerLink.style.display = 'none';
        loginLink.style.display = 'none';
    }
}
checkIsLogged();
