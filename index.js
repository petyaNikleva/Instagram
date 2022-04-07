function showNavigation () {
    const isLogged = localStorage.getItem('isLogged');

    const registerLinkElement = document.getElementsByClassName('register')[0];
    const loginLinkElement = document.getElementsByClassName('login')[0];
    const logOutLinkElement = document.getElementsByClassName('logout')[0];
    if (isLogged !== "false") {
        registerLinkElement.style.display = 'none';
        loginLinkElement.style.display = 'none';
    }
    else {
        registerLinkElement.style.display = 'block';
        loginLinkElement.style.display = 'block';
        logOutLinkElement.style.display = 'none'  
    }

    logOutLinkElement.addEventListener("click", function (e) {
        localStorage.setItem('isLogged', false);
        showNavigation();
    })
}
showNavigation();


