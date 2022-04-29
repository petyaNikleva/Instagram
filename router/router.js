import { render } from "../../node_modules/lit-html/lit-html.js";

export const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const routes = {
    // "/index.html": newsFeedTemplate,
    // "/": newsFeedTemplate,
    // "/register": "/pages/register/register.html",
    // "/login": "/pages/login/login.html",
    // "/user-list": "/pages/user-list/useer-list.html"
};

export const addToRoute = (uri, template) => {
    routes[uri] = template;
}


const handleLocation = () => {
    const path = window.location.pathname;
    const html = routes[path]();
    let container = document.getElementsByClassName('main-content')[0];
    render(html, container);
};


window.onpopstate = handleLocation;
window.route = route;

